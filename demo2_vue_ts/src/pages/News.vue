<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <el-button type="primary" @click="showNewsDetail(news)">查看新闻</el-button>
        <!-- RouterLink路由跳转 -->
        <RouterLink :to="{
          // name: 'xiang',
          // query: {
          //   id: news.id,
          //   title: news.title,
          //   content: news.content
          // }
          name: 'xiang',
          params: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'

// 定义新闻列表
const newsList = reactive([
  { id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花' },
  { id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT' },
  { id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一' },
  { id: 'asfdtrfay04', title: '好消息！好消息！', content: '快过年了' }
])

// 获取路由实例
const router = useRouter()

// 定义新闻接口
interface NewsInter {
  id: string,
  title: string,
  content: string
}

// 显示新闻详情
function showNewsDetail(news: NewsInter) {

  // 使用replace方法跳转
  router.replace({
    //要么使用name和params，要么使用path和query
    name: 'xiang',
    // path:'detail',
    query: {
      id: news.id,
      title: news.title,
      content: news.content
    },
    params: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}

</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li::marker {
  color: #000000;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #000000;
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>