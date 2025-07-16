<template>
  <div class="app">
    <h1>你好啊！</h1>
    <!-- ref用来获取组件实例 -->
    <!-- <Person ref="person1" /> -->

    <!-- props 传参 -->
    <Person1 :person="person1" />
    <button @click="showRef">显示信息：</button>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import Person1 from './components/Person.vue'
import type { Person } from '../src/interface'
import { reactive } from 'vue';

let person1: Person = reactive({
  name: '张三',
  age: 18,
  tel: '13888888888',
  things: ['手机', '电脑', '电视']
})

// let person1 = ref()
function showRef() {

  person1.age += 1;
  // console.log(person1);
  // console.log(person1.value);
  // console.log(person1.value.name);
  // console.log(person1.value.age);
}
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>