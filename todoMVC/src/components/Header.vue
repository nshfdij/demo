<template>
    <header class="header">
        <h1>todos</h1>

        <input type="text" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
            @keyup.enter="
                // @ts-ignore
                $emit('add-todo', $event.target.value);
            // @ts-ignore
            $event.target.value = '';
            " />
    </header>
</template>
<script setup lang="ts">
</script>

<style>
h1 {
    color: #b83f45;
    text-align: center;
    font-size: 80px;
    font-weight: 200;
    top: 10px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    line-height: 1.4em;
}

input {
    background: rgba(0, 0, 0, .003);
}
</style>