const heading = document.querySelector("h1");
heading.textContent = "Hello, World!";

document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼！");
});

//使用解构语法赋值
//将foo对象中属性名与之相同的属性的值赋给变量bar
const { bar } = foo;
let a, b;
[a, b] = [1, 2];
console.log(a, b); //1,2
//const 仅阻止重新赋值，而不阻止修改。被赋值为常量的对象的属性是不受保护的.
const MY_OBJECT = { key: "值" };
MY_OBJECT.key = "其他值";

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
