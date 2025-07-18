import { createRouter, createWebHashHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/all",
      name: "all",
      component: TodoView,
    },
    {
      path: "/active",
      name: "Active",
      component: TodoView,
    },
    {
      path: "/completed",
      name: "Completed",
      component: TodoView,
    },
    { path: "/", redirect: "/all" }, // 重定向
  ],
});

export default router;
