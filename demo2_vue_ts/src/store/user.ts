import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
  //actions:为方法，state:为状态，getters:为计算属性
  actions: {
    changeName(value: string) {
      if (value && value.length < 10) this.name = value;
    },
  },
  getters: {
    getUsername(): string {
      return this.name;
    },
  },
  state() {
    return {
      name: "张三",
    };
  },
});
