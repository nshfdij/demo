// TypeScript 类型系统
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = "red";
//两种数组创建方法，推荐使用Array<类型>，因为更直观
var numbers = [1, 2, 3];
var lists = [1, 2, 3];
var names = "bob";
var age = 25;
var sentence = "Hello, world!";
sentence = "Hello, my name is ".concat(names, ". I'll be ").concat(age + 1, " years old next month.");
//元组类型
var x;
x = ["hello", 22];
console.log(x[0].substring(1));
var person = { name: "Alice", age: 30 };
