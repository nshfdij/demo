<template>
    <footer class="footer" v-show="todos.length">
        <span class="todo-count">
            <strong>{{ remaining }}</strong> {{ remaining === 1 ? "item" : "items" }} left
        </span>

        <ul class="filters">
            <li>
                <!-- to属性为"/all"，如果route.path等于"/all"，则class为selected -->
                <RouterLink to="/all" :class="{ selected: route.path === '/all' }">All</RouterLink>
            </li>
            <li>
                <!-- to属性为"/active"，如果route.path等于"/active"，则class为selected -->
                <RouterLink to="/active" :class="{ selected: route.path === '/active' }">Active</RouterLink>
            </li>
            <li>
                <!-- to属性为"/completed"，如果route.path等于"/completed"，则class为selected,selected -->
                <RouterLink to="/completed" :class="{ selected: route.path === '/completed' }">Completed</RouterLink>
            </li>
        </ul>
        <button class="clear-completed" v-show="todos.some(todo => todo.completed)"
            @click="$emit('deleteCompleted')">Clear completed</button>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';
import type { Todo } from '../interface';
const props = defineProps<{
    todos: Todo[]
}>();
const route = useRoute();
const remaining = computed(() => props.todos.filter(todo => !todo.completed).length);

</script>

<style scoped>
.footer {
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;

}

.footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.todo-count {
    float: left;
    text-align: left;
}

.filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0
}

.filters li {
    display: inline
}

.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px
}

.filters li a.selected {
    border-color: #ce4646
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
    -moz-osx-font-smoothing: grayscale
}

.clear-completed,
html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 19px;
    text-decoration: none;
    cursor: pointer
}

.clear-completed:hover {
    text-decoration: underline
}
</style>