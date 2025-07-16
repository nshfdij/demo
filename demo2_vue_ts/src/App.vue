<template>
  <div class="app">
    <Header />
    <!-- 导航区 -->
    <div class="navigate">
      <!-- replace属性：点击后，会替换掉当前路由，无法回退，不会添加到历史记录中 -->
      <RouterLink replace to="/home" active-class="active">首页</RouterLink>
      <RouterLink replace :to="{ name: 'xinwen' }" active-class="active">新闻</RouterLink>
      <RouterLink replace :to="{ path: '/about' }" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
      <!-- RouterView，路由组件展示区 -->
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import Header from './components/Header.vue'

</script>

<style>
/* App */
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: #ffffff;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  letter-spacing: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.navigate a.active {
  background-color: #ff8080;
  color: #ffffff;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>
