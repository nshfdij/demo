<template>
    <li :class="{ completed: todo.completed, editing: editing }">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="toggleModel">
            <label @click="startEdit"></label>
            <button class="destroy" @click="deleteTodo"></button>
        </div>
        <div class="input-container">
            <input id="edit-todo-input" type="text" class="edit" ref="editInput" v-model="editModel"
                @keyup.enter="finishEdit" @blur="cancelEdit"> <-- 输入回车键完成编辑，失去焦点取消编辑->
                <label class="visually-hidden" for="edit-todo-input">Edit Todo Input</label>
        </div>
    </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps(['todo', 'index']);
const emit = defineEmits(['delete-todo', 'edit-todo', "toggle-todo"]);

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
        emit("toggle-todo", props.index, value);
    }
});

function startEdit() {
    editing.value = true;
    if (editInput.value) {
        editInput.value.focus();
    }
}


function finishEdit() {
    editing.value = false;
    // 判断输入框内容是否为空
    if (editText.value.trim().length === 0) {
        deleteTodo();
    } else {
        updateTodo();
    }
}

function cancelEdit() {
    editing.value = false;
}

function deleteTodo() {
    emit("delete-todo", props.todo);
}

function updateTodo() {
    emit("edit-todo", props.todo, editText.value);
}
</script>
<style scoped></style>
