<script setup lang="ts">
import { ref } from 'vue'

// TypeScript 类型系统

let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

//两种数组创建方法，推荐使用Array<类型>，因为更直观
let numbers: number[] = [1, 2, 3];
let lists: Array<number> = [1, 2, 3];

let names: string = "bob";
let age: number = 25;
let sentence: string = "Hello, world!";
sentence = `Hello, my name is ${names}. I'll be ${age + 1
  } years old next month.`;

//元组类型
let x: [string, number];
x = ["hello", 22];
console.log(x[0].substring(1));

let person: { name: string; age: number } = { name: "Alice", age: 30 };

function changeName(newName: string) {
  person.name = newName;
}

//枚举类型
// enum Color { Red, Green, Blue }
// let c: Color = Color.Green;
// console.log(c);

// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

//let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// //void类型
// function warnUser(): void {
//   console.log("This is my warning message");
// }

// //null和undefined类型
// let u: undefined = undefined;
// let n: null = null;

// //never类型
// function error(message: string): never {
//   throw new Error(message);
// }

//类型断言
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

//变量声明合并
let age1, age2, age3: number;
age1 = 1;
age2 = 2;
age3 = 3;

//块作用域
function f(input: boolean) {
  let a = 100;

  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }

  // Error: 'b' doesn't exist here
  // return b;
}

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      <button type="button" @click="changeName('person')">好累</button>
      {{ person.age }}岁的{{ person.name }}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
