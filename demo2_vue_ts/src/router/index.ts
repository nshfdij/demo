// 创建一个路由器，并暴露出去

// 第一步：引入createRouter，createWebHistory,createWebHashHistory
import { createRouter, createWebHistory } from "vue-router";
// 引入一个一个可能要呈现组件
// import News from "../pages/News.vue";
// import About from "../pages/About.vue";
// import Detail from "../pages/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    //一个一个的路由规则
    {
      name: "zhuye",
      path: "/home",
      component: () => import("../pages/Home.vue"), //懒加载
    },
    {
      name: "xinwen",
      path: "/news",
      component: () => import("../pages/News.vue"),
      //嵌套路由
      children: [
        {
          name: "xiang",
          path: "detail",
          component: () => import("../pages/Detail.vue"),

          // 第一种写法：将路由收到的所有params参数作为props传给路由组件
          // props:true,

          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
          props(route: any) {
            return route.query;
          },

          // 第三种写法：对象写法
          /* props:{
            a:100,
            b:200,
            c:300
          } */
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

// 暴露出去router
export default router;
