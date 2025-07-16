<template>
  <div class="person">
    <!-- 使用了v-if，v-for，v-model，v-bind，v-on来实现双向绑定 -->
    <h2>姓名：<input type="text" v-model="person.name"></h2>
    <h2>年龄：<input type="number" v-model="person.age"></h2>
    <!-- <h2>喜欢吃：<select v-model="favoriteFood" name="favoriteFood">
        <option value="1">苹果</option>
        <option value="2">香蕉</option>
        <option value="3">橙子</option>
      </select></h2>
    <h2><button @click="changeShow">查看拥有的东西</button></h2>
    <h2 v-if="show">有：<span v-for="thing in things" :key="thing">{{ thing }}</span></h2>
    <h2>添加新事物：<input type="text" v-model="newThing">
      <button @click="addThing">添加</button>
    </h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <button v-on:click="changeTel">修改联系方式</button> -->
  </div>
</template>

<script setup lang="ts">
import type { Person } from '../interface';
// import { ref } from 'vue'

// let name = ref('张三');
// let age = ref(18);

//defineExpose，将定义的响应式数据暴露给父组件，父组件可以通过ref来获取
// defineExpose({
//   name,
//   age
// })

//defineProps，定义父组件传递的属性
// defineProps({
//   Person: Object
// })

defineProps<{
  person: Person
}>()



//使用setup语法糖，是组合式API的一种方法，方便数据响应式处理
//使用ref,reactive来定义响应式数据
// let name = ref(Person.name);
// let age = ref(Person.age);
// let tel = ref(Person.tel);
// let things = reactive(Person.things);
// let favoriteFood = ref('2');
// let newThing = '';
// let show = ref(false);
// let name: string = '张三';
// let age: number = 18;
// let tel: number = 13888888888;
// let favoriteFood: string = '2';
// let things: string[] = ['手机', '电脑', '电视'];
// let newThing: string = '';
// let show: boolean = false;
// // 修改电话
// function changeTel() {
//   tel.value = '13999999999';
//   console.log(tel);
// }
// // 修改姓名
// function changeName() {
//   name.value = 'zhang-san';
//   console.log(name);
// }
// // 修改年龄
// function changeAge() {
//   age.value += 1;
//   console.log(age);
// }
// // 展示联系方式
// function showTel() {
//   alert(tel.value);
//   console.log(tel);
// }
// // 添加新事物
// function addThing() {
//   things.push(newThing)
//   newThing = ''
// }

</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

span {
  margin-right: 10px;
}
</style>