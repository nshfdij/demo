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
sentence = `Hello, my name is ${names}. I'll be ${
  age + 1
} years old next month.`;

//元组类型
let x: [string, number];
x = ["hello", 22];
console.log(x[0].substring(1));

let person: { name: string; age: number } = { name: "Alice", age: 30 };
