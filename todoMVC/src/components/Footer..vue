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
        <button class="clear-completed">Clear completed</button>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

const props = defineProps(['todos']);
const route = useRoute();
const remaining = computed(() => props.todos.filter(todo => !todo.completed).length);

</script>

<style scoped></style>