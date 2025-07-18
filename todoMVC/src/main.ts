import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/todomvc-common/base.css";
import "../node_modules/todomvc-app-css/index.css";
const app = createApp(App);

app.use(router);

app.mount("#app");
