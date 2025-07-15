<template>
  <div class="person">
    <!-- 使用了v-if，v-for，v-model，v-bind，v-on来实现双向绑定 -->
    <h2>姓名：<input type="text" v-model="name"></h2>
    <h2>年龄：<input type="number" v-model="age"></h2>
    <h2>喜欢吃：<select v-model="favoriteFood" name="favoriteFood">
        <option value="1">苹果</option>
        <option value="2">香蕉</option>
        <option value="3">橙子</option>
      </select></h2>
    <h2><button @click="show = !show">查看拥有的东西</button></h2>
    <h2 v-if="show">有：<span v-for="thing in things" :key="thing">{{ thing }}</span></h2>
    <h2>添加新事物：<input type="text" v-model="newThing">
      <button @click="addThing">添加</button>
    </h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <button v-on:click="changeTel">修改联系方式</button>
  </div>
</template>

<script lang="ts">
//不使用setup语法糖
export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '13888888888',
      favoriteFood: '2',
      things: ['手机', '电脑', '电视'],
      newThing: '',
      show: false
    }
  },
  methods: {
    // 修改电话
    changeTel() {
      this.tel = '13999999999'
    },
    // 修改姓名
    changeName() {
      this.name = 'zhang-san'
    },
    // 修改年龄
    changeAge() {
      this.age += 1
    },
    // 展示联系方式
    showTel() {
      alert(this.tel)
    },
    // 添加新事物
    addThing() {
      this.things.push(this.newThing)
      this.newThing = ''
    }
  }
}
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