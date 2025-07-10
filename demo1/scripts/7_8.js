//使用解构语法赋值
//将foo对象中属性名与之相同的属性的值赋给变量bar
//const { bar } = foo;
let a, b;
[a, b] = [1, 2];
console.log(a, b); //1,2
//const 仅阻止重新赋值，而不阻止修改。被赋值为常量的对象的属性是不受保护的.
const MY_OBJECT = { key: "值" };
MY_OBJECT.key = "其他值";

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];

// 变量提升
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "局部值";
})();

//在使用 + 运算符的表达式中涉及数字和字符串，JavaScript 会把数字转换成字符串。
//使用其他运算符时，JavaScript 不会把数字转换成字符串。
x1 = "答案是 " + 42; // "答案是 42"
y1 = 42 + " 是答案"; // "42 是答案"
z1 = "37" + 7; // "377"
x2 = "37" - 7; // 30
y2 = "37" * 7; // 259

console.log(x1, y1, z1, x2, y2);

//字符串转换为数字
//parseInt()只能将字符串转为整数，parseFloat()可以将字符串转换为浮点数。
//Number()可以将字符串转换为整数或浮点数，取决于字符串的内容。
// parseInt("101", 2); // 5
// parseInt("37", 10); // 37
// parseFloat("3.14"); // 3.14
// Number("42"); // 42

console.log(
  parseInt("101", 2),
  parseInt("37.5", 10),
  parseInt("37", 10),
  parseFloat("3.14"),
  Number("42")
);
/*
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// 注意：括号是为了清晰起见而添加的，不是必需的。
*/

//------------------------------------------------------------------------

//数组字面量，数组字面量创建 Array 对象。
const coffees = ["French Roast", "Colombian", "Kona"];
const fish = ["Lion", , "Angel"];
//数组字面量可以包含任意类型的值，包括对象和函数。
console.log(fish); // ["Lion", <1 empty item>, "Angel"]
//注意，第二项是“empty”，与实际的 undefined 值完全不同。
// 当使用数组遍历方法（例如，Array.prototype.map）时，空槽会被跳过。
// 然而，索引访问 fish[1] 仍会返回 undefined。
//如果你在元素列表的尾部添加了一个逗号，它将会被忽略。

//对象字面量
const sales = "Toyota";
function carTypes(name) {
  return name === "Honda" ? name : `对不起，我们不售卖 ${name}。`;
}

//对象字面量创建 Object 对象。
const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

//对象字面量可以包含任意类型的值，包括数组和函数。
const car2 = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car2.manyCars.b); // Jeep
console.log(car2[7]); // Mazda

/*
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // “handler: handler”的简写
  handler,
  // 方法
  toString() {
    // Super 调用
    return "d " + super.toString();
  },
  // 计算（动态的）属性名
  ["prop_" + (() => 42)()]: 42,
};

//console.log(obj); 
// {__proto__: theProtoObj, handler: handler, toString: ƒ, prop_42: 42}
*/

//------------------------------------------------------------------------
// 错误处理示例， try...catch 语句来捕获异常
function getMonthName(mo) {
  mo = Number(mo);
  mo--; // 将月份调整为数组索引（0 = 一月）
  const months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("无效的月份数值");
  }
}

function logMyErrors(e) {
  console.error("捕获到异常:", e.message);
}

function showMonthName() {
  const input = document.getElementById("myMonth").value;
  const result = document.getElementById("monthName");
  try {
    result.textContent = getMonthName(input);
  } catch (e) {
    result.textContent = e.message;
    logMyErrors(e);
  }
}
window.showMonthName = showMonthName;
//------------------------------------------------------------------------
//运行流程
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // 这个 return 语句会被挂起直到 finally 块结束
    return true;
    console.log(2); // 不可达
  } finally {
    console.log(3);
    return false; // 覆盖前面的“return”
    console.log(4); // 不可达
  }
  // 现在执行“return false”
  console.log(5); // 不可达
}
console.log(f()); // 0、1、3、false

function f1() {
  try {
    throw "bogus";
  } catch (e) {
    console.log("捕获内部的“bogus”");
    // 这个 return 语句会被挂起直到 finally 块结束
    throw e;
  } finally {
    return false; // 覆盖前面的“throw”
  }
  // 现在执行“return false”
}

try {
  console.log(f1());
} catch (e) {
  // 这永远不会抵达！
  // f1() 执行时，`finally` 块返回 false，而这会覆盖上面的 `catch` 中的 `throw`
  console.log("捕获外部的“bogus”");
}

// 日志：
// 捕获内部的“bogus”
// false

//------------------------------------------------------------------------
//for循环
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("选择选项的数量是：" + howMany(document.selectForm.musicTypes));
});

//------------------------------------------------------------------------
//使用标签语句在循环中跳出多层嵌套的循环
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
      // 返回到整个 outPoint 下方，继续执行
    }
    num++;
  }
}

// alert(num); // 输出 55
console.log(num); // 输出 55

var num1 = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outPoint;
    }
    num1++;
  }
}
// alert(num1); // 95
console.log(num1); // 95

//------------------------------------------------------------------------
// for...in 和 for...of 循环
// for...in 循环用于遍历对象的可枚举属性，包括数组的索引和自定义属性。
// for...of 循环用于遍历可迭代对象（如数组、字符串、Map、Set 等）的值。
// 注意：for...in 循环会遍历对象的所有可枚举属性
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}

// 注意 for...of 的输出没有出现 "hello"

//----------------------------------------------------------------------
// 函数声明
function foo() {}

// 函数表达式
(function bar() {});

// 函数表达式
x = function hello() {};

if (x) {
  // 函数表达式
  function world() {}
}

// 函数声明
function ab() {
  // 函数声明
  function b() {}
  if (0) {
    //函数表达式
    function c() {}
  }
}

//----------------------------------------------------------------------
//typeof
console.log("123", typeof 123); // "number"
console.log("abc", typeof "abc"); // "string"
console.log("true", typeof true); // "boolean"
console.log("undefined", typeof undefined); // "undefined"
console.log("null", typeof null); // "object"
console.log("Symbol()", typeof Symbol()); // "symbol"
console.log("BigInt(123)", typeof BigInt(123)); // "bigint"
console.log("function", typeof function () {}); // "function"
console.log("[1,2,3]", typeof [1, 2, 3]); // "object"
console.log("[]", typeof []); // "object"
console.log("{}", typeof {}); // "object"
console.log("new Date()", typeof new Date()); // "object"
console.log("new RegExp()", typeof new RegExp("")); // "object"
console.log("new Error()", typeof new Error()); // "object"

//----------------------------------------------------------------------
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour == 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
function showClock() {
  var clock = document.getElementById("clock");
  clock.innerHTML = JSClock();
  setTimeout(showClock, 1000);
}

//----------------------------------------------------------------------
// 计算今年剩余的天数

function showDaysLeft() {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999); // 今年最后一天
  var msPerDay = 24 * 60 * 60 * 1000;
  var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
  daysLeft = Math.round(daysLeft);
  document.getElementById("daysLeft").textContent =
    "今年还剩 " + daysLeft + " 天";
}
window.showDaysLeft = showDaysLeft; // 确保全局可用

//----------------------------------------------------------------------
// 验证电话号码格式
//r
var re = /^1[3-9]\d{9}$/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  var result = document.getElementById("result");
  if (!OK) {
    result.textContent =
      phoneInput.value + " isn't a phone number with area code!";
  } else {
    result.textContent = "Thanks, your phone number is " + OK[0];
  }
}
