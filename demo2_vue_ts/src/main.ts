// 引入createApp用于创建应用
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入App根组件
import App from "./App.vue";
// 引入路由器
import router from "./router";

// 创建一个应用
const app = createApp(App);
// 使用路由器
app.use(router);

//创建pinia
const pinia = createPinia();

// 使用pinia
app.use(pinia);

//使用element-plus组件库
app.use(ElementPlus);

// 挂载整个应用到app容器中
app.mount("#app");
