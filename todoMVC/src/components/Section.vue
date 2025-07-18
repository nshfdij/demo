<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import TodoItem from './TodoItem.vue'
import Footer from './Footer.vue'
import { RouterLink, useRoute } from 'vue-router'
import type { Todo } from '../interface'

const todos: Ref<Todo[]> = ref([])
const route = useRoute()


// 定义一个filters对象，包含三个方法：all、active、completed
const filters = {
    // all方法返回所有待办事项
    all: (todos: Ref<Todo[]>) => todos.value,
    // active方法返回未完成的待办事项
    active: (todos: Ref<Todo[]>) => todos.value.filter(todo => !todo.completed),
    // completed方法返回已完成的待办事项
    completed: (todos: Ref<Todo[]>) => todos.value.filter(todo => todo.completed)
}

const activeTodos = computed(() => filters.active(todos));
const completedTodos = computed(() => filters.completed(todos));
// 定义一个计算属性，根据路由名称返回不同的待办事项列表
const filteredTodos = computed(() => {
    if (!route || !route.name) return todos;
    // 根据路由名称返回不同的待办事项列表
    switch (route.name) {
        // 如果路由名称为Active，则返回activeTodos
        case 'Active':
            return activeTodos;
        // 如果路由名称为Completed，则返回completedTodos
        case 'Completed':
            return completedTodos;
        // 默认情况下，返回todos
        default:
            return todos;
    }
})

//
// 定义一个计算属性ToggleModel，用于判断activeTodos.value的长度是否为0
const ToggleModel = computed({
    // 获取activeTodos.value的长度是否为0
    get() {
        return activeTodos.value.length === 0;
    },
    // 设置todos.value的每个元素的completed属性为value
    set(value) {
        todos.value.forEach(todo => {
            todo.completed = value;
        });

    }
});

// 生成一个UUID,用于唯一标识每个待办事项,并添加到todos数组中
function uuid() {
    let uuid = "";
    // 循环32次
    for (let i = 0; i < 32; i++) {
        // 生成一个0-15之间的随机数
        let random = (Math.random() * 16) | 0;

        // 如果i等于8、12、16、20，则在uuid中添加一个"-"
        if (i === 8 || i === 12 || i === 16 || i === 20)
            uuid += "-";

        // 如果i等于12，则在uuid中添加4，否则如果i等于16，则在uuid中添加一个随机数与3按位与的结果与8按位或的结果，否则在uuid中添加随机数的16进制表示
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
    }
    // 返回uuid
    return uuid;
}

function addTodo(value: string) {
    todos.value.push({
        completed: false,
        title: value,
        id: uuid(),
    })
}
function handleAddTodo(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();
    if (value) {
        addTodo(value);
        target.value = ''; // 清空输入框
    }
}

function deleteTodo(todo: Todo) {
    todos.value = todos.value.filter((t) => t !== todo);
}

function toggleTodo(todo: Todo, value: boolean) {
    todo.completed = value;
};

function editTodo(todo: Todo, value: string) {
    todo.title = value;
}

function deleteCompleted() {
    todos.value = todos.value.filter(todo => !todo.completed);
}
</script>

<template>
    <header class="header">
        <h1>todos</h1>
        <input type="text" id="new-todo" @keyup.enter="handleAddTodo" class="new-todo" autofocus autocomplete="off"
            placeholder="what needs to be done?">

    </header>
    <!-- <header class="header">
        <a href="/">
            <h1>todos</h1>
        </a>
        <input type="text" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" "
      />
  </header> -->
    <main class=" main">
        <div class="toggle-all-container" v-show="todos.length > 0">
            <input type="checkbox" id="toggle-all-input" class="toggle-all" v-model="ToggleModel"
                :disabled="filteredTodos.value.length === 0">
            <label class="toggle-all-label" for="toggle-all-input"> Toggle All Input </label>
        </div>
        <ul class="todo-list">
            <TodoItem v-for="(todo, index) in filteredTodos.value" :key="todo.id" :todo="todo" :index="index"
                @delete-todo="deleteTodo" @edit-todo="editTodo" @toggle-todo="toggleTodo" />
        </ul>
    </main>
    <Footer v-if="route" :todos="todos" @delete-completed="deleteCompleted" />
</template>

<style scoped>
/* h1 {
    position: absolute;
    color: #b83f45;
    text-align: center;
    font-size: 80px;
    font-weight: 200;
    top: 10px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    line-height: 1.4em;
}

.new-todo {
    height: 65px;
    width: 550px;
    border: none;
    background: rgba(0, 0, 0, .003);
    box-shadow: inset 0 -2px 1px #00000008;
}

.new-todo,
.edit {
    position: relative;
    margin: 0;
    font-size: 24px;
    font-weight: inherit;
    font-style: italic;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    padding: 16px 16px 16px 60px;

    box-shadow: inset 0 -1px 5px #0003;
    box-sizing: border-box;
}

.new-todo:focus {

    box-shadow: 0 0 2px 2px #cf7d7d;
    outline: 0;
}

.new-todo::placeholder {
    color: #999;
    font-style: italic;
}

.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}

.toggle-all-container {
    position: absolute;
    top: -52px;
    left: -13px;
    width: 60px;
    height: 34px;
    text-align: center;
    transform: rotate(90deg);
}

.toggle-all {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    border: none;
    opacity: 0;
    z-index: 1;
}

.toggle-all-label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-all-label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}

.toggle-all:checked+.toggle-all-label:before {
    color: #737373;
}

.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
    border-bottom: none;
}

.todo-list li.editing {
    border-bottom: none;
    padding: 0;
}

.todo-list li.editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
}

.todo-list li.editing .view {
    display: none;
}

.todo-list li .toggle {
    text-align: left;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.todo-list li .toggle {
    opacity: 0;
}

.todo-list li .toggle+label {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: center left
}

.todo-list li .toggle:checked+label {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E);
}

.todo-list li label {
    overflow-wrap: break-word;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color .4s;
    font-weight: 400;
    color: #484848;
}

.todo-list li.completed label {
    font-family: 14px Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #949494;
    text-decoration: line-through;
}

.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #949494;
    transition: color .2s ease-out;
}

.todo-list li .destroy:hover,
.todo-list li .destroy:focus {
    color: #c18585;
}

.todo-list li .destroy:after {
    content: "×";
    display: block;
    height: 100%;
    line-height: 1.1;
}

.todo-list li:hover .destroy {
    display: block;
}

.todo-list li .edit {
    display: none;
}

.todo-list li.editing:last-child {
    margin-bottom: -1px;
} */
</style>
