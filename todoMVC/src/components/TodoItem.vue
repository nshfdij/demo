<template>
    <li :class="{ completed: todo.completed, editing: editing }">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="toggleModel">
            <!-- @dblclick 是 Vue.js 的事件监听指令，用于监听元素的双击事件。 -->
            <label @dblclick="startEdit">{{ todo.title }}</label>
            <button class="destroy" @click="deleteTodo"></button>
        </div>
        <div class="input-container">
            <input id="edit-todo-input" type="text" class="edit" ref="editInput" v-model="editModel"
                @keyup.enter="finishEdit" @blur="cancelEdit">
            <!--@keyup.enter 是 Vue.js 的键盘事件监听指令，专门用于监听回车键（Enter键）的抬起事件。
                 输入回车键完成编辑，失去焦点取消编辑-->
            <label class="visually-hidden" for="edit-todo-input">Edit Todo Input</label>
        </div>
    </li>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import type { Todo } from '../interface'

const props = defineProps(['todo', 'index']);
const emit = defineEmits<{
    'delete-todo': [todo: Todo]
    'edit-todo': [todo: Todo, newText: string]
    'toggle-todo': [todo: Todo, completed: boolean]
}>();

const editing = ref(false);//是否处于编辑状态
const editInput = ref<HTMLInputElement | null>(null);
const editText = ref('');

// 定义一个计算属性editModel，用于获取和设置props.todo.title的值
const editModel = computed({
    // 获取props.todo.title的值
    get() {
        return props.todo.title;
    },
    // 设置props.todo.title的值为value
    set(value) {
        editText.value = value;
    }
});

//toggleModel获取todo.completed的值，set(value)修改todo.completed的值
// 定义一个计算属性toggleModel，用于获取和设置props.todo.completed的值
const toggleModel = computed({
    // 获取props.todo.completed的值
    get() {
        return props.todo.completed;
    },
    // 设置props.todo.completed的值，并触发toggle-todo事件
    set(value) {
        emit("toggle-todo", props.todo, value);
    }
});


function startEdit() {
    editing.value = true;
    nextTick(() => {
        if (editInput.value) {
            editInput.value.focus();
        }
    });
}
function finishEdit() {
    editing.value = false;
    if (editText.value.trim().length === 0)
        deleteTodo();
    else
        updateTodo();
}

function cancelEdit() {
    editing.value = false;
}

function deleteTodo() {
    emit("delete-todo", props.todo);
}

function updateTodo() {
    emit("edit-todo", props.todo, editText.value);
    editText.value = "";
}
</script>

<!-- <style scoped>
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
    text-align: left !important;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 0;
    z-index: 1;
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
}

button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    /* clip作用：剪切元素，使其不可见 */
    clip-path: inset(50%);
    /* 现代剪切属性，从各边向内裁剪50%*/
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    /*防止文本换行*/
}
</style> -->


<style scoped>
.visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    /* clip作用：剪切元素，使其不可见 */
    clip-path: inset(50%);
    /* 现代剪切属性，从各边向内裁剪50%*/
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    /*防止文本换行*/
}
</style>