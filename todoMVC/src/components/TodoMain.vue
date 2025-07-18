<template>
    <TodoHeader @add-todo="addTodo" />
    <main class="main">
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
    <TodoFooter :todos="todos" @delete-completed="deleteCompleted" />

</template>

<script setup lang="ts">
import TodoHeader from './Header.vue'
import TodoFooter from './TodoFooter.vue'
import { useRoute } from 'vue-router';
import type { Todo } from '../interface';
import { ref, computed, type Ref } from 'vue'
import TodoItem from './TodoItem.vue'

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

<style></style>