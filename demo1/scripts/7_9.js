// 创建一个只有唯一元素的数组：数字 42。
const arr = [42];

// // 创建一个没有元素的数组，且数组的长度被设置成 42。
// const arr = Array(42);

// // 上面的代码与下面的代码等价：
// const arr = [];
// arr.length = 42;

const wisenArray = Array.of(9.3); // wisenArray 只包含一个元素：9.3

//遍历数组
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red green blue

//在数组定义时省略的元素不会在 forEach 遍历时被列出，
// 但是手动赋值为 undefined 的元素是会被列出的：
const sparseArray = ["first", "second", , "fourth"];

sparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] 是 undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// undefined
// fourth

//----------------------------------------------------------------------

//数组方法

let arr1 = ["1", "2", "3"];
arr1 = arr1.concat("4", "5"); // ["1", "2", "3", "4", "5"]
arr1 = arr1.join(","); // "1,2,3,4,5"
//arr1.push("6"); // ["1", "2", "3", "4", "5", "6"]
// arr1 = arr1.pop(); // "6", arr1 变为 ["1", "2", "3", "4", "5"]
// arr1 = arr1.shift(); // "1", arr1 变为 ["2", "3", "4", "5"]
// arr1.unshift("0"); // ["0", "2", "3", "4", "5"]

let arr2 = arr1.slice(1, 3); // ["2", "3"]

// arr1.at(2); // "3"
// arr1.at(-1); // "5" (最后一个元素)
// arr1.splice(1, 2, "a", "b"); // ["0", "a", "b", "4", "5"],从1号位置开始删除2个元素，并插入"a"和"b"
// arr1.reverse(); // ["5", "4", "b", "a", "0"]
// arr1.sort(); // ["0", "4", "5", "a", "b"],默认按字符串排序
// arr1.sort((a, b) => a - b); // ["0", "4", "5", "a", "b"],按数字排序

console.log(arr1.indexOf("a")); // 3
console.log(arr1.lastIndexOf("a")); // 3
// arr1.forEach((element) => console.log(element)); // 输出数组中的每个元素
/*
let arr3 = arr1.map((x) => x.toUpperCase()); // ["0", "4", "5", "A", "B"]，将数组中的每个元素转为大写字母
let arr4 = arr1.filter((x) => x.length > 1); // ["4", "5", "A", "B"],过滤出长度大于1的元素
let arr4_1 = arr1.filter((x) => typeof x === "number"); // ["0", "4", "5"]，过滤出非字符串元素
let arr5 = arr1.reduce((acc, cur) => acc + cur, 0); // 15，将数组中的元素累加
let i = arr1.find((x) => typeof x === "number"); // "0"，找到第一个数字元素

let myArray = [1, 2, [3, 4]];
myArray = myArray.flat(); // [1, 2, 3, 4],将嵌套数组扁平化为一维数组

let myArray2 = ["a", "b", "c"];
myArray2 = myArray2.flatMap((x) => [x, x.toUpperCase()]); // ["a", "A", "b", "B", "c", "C"]，将数组中的每个元素映射为两个元素的新数组

const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // 60，将数组中的元素累加
console.log(total);

// 二维数组
const a1 = new Array(4);
for (i = 0; i < 4; i++) {
  a1[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a1[i][j] = "[" + i + "," + j + "]";
  }
}
Row 0: [0,0] [0,1] [0,2] [0,3]
Row 1: [1,0] [1,1] [1,2] [1,3]
Row 2: [2,0] [2,1] [2,2] [2,3]
Row 3: [3,0] [3,1] [3,2] [3,3]*/

//----------------------------------------------------------------------

// 创建一个 Map 对象
// Map 对象是一个键值对集合，键可以是任意类型的值。
// Map 对象的键值对是有序的，可以通过键来获取对应的值。
// Map 对象的大小可以通过 size 属性获取，使用 get() 方法获取值，使用 has() 方法判断是否存在某个键。
// Map 对象是一种集合，因此可以用 for...of 循环来遍历。
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.forEach((value, key) => {
  console.log(`${key} goes ${value}`);
});
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// 使用常规的 Map 构造函数可以将一个二维的键值对数组转换成一个 Map 对象
const myMap = new Map(kvArray);
console.log(myMap.get("key1")); // "value1"

// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维的键值对数组
console.log(Array.from(myMap)); // 输出和 kvArray 相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用 Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]

myMap.clear(); // 清空 Map 对象

// 克隆 Map 对象
// 使用 Map 构造函数可以克隆一个 Map 对象，克隆后的对象
const original = new Map([[1, "one"]]);
const clone = new Map(original);
console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用

//合并 Map 对象
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开语法本质上是将 Map 对象转换成数组。
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

//----------------------------------------------------------------------

// 创建一个 Set 对象
// Set 对象是一个无序的集合，集合中的元素不能重复。
// Set 对象可以用来存储集合，可以用来去重，可以用来判断元素是否存在。
// Set 对象是一种集合，因此可以用 for...of 循环来遍历。
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

//----------------------------------------------------------------------

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// 定义一个函数，用于显示对象的属性
function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };

// 定义一个函数，用于显示对象的属性
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
var person1 = new Person("John", 30, "male");

// 定义一个对象，包含一个属性和一个方法
var Animal = {
  type: "Invertebrates", // 属性默认值
  displayType: function () {
    // 用于显示 type 属性的方法
    console.log(this.type);
  },
};

// 创建一种新的动物——animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// 创建一种新的动物——Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes

//----------------------------------------------------------------------
// 验证输入值是否在指定范围内
function validate(obj, lowval, hival) {
  var errorElement = document.getElementById("error-message");
  if (obj.value < lowval || obj.value > hival) {
    errorElement.textContent = "Invalid Value!";
  } else {
    errorElement.textContent = "";
  }
}

//get,set 方法
// get 方法用于获取对象的属性值，set 方法用于设置对象的属性值。
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

//----------------------------------------------------------------------
class Color {
  // 声明：每个 Color 实例都有一个名为 #values 的私有字段。
  #values;

  constructor(r, g, b) {
    this.#values = [r, g, b];
  }

  getRed() {
    return this.#values[0];
  }

  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255

//----------------------------------------------------------------------

function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 在完成 Promise 之前的其他操作
      console.log("完成了一些事情");
      // promise 的兑现值
      resolve("https://example.com/");
    }, 200);
  });
}
// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`得到最终结果：${finalResult}`);
//   })
//   .catch(failureCallback);

async function logIngredients() {
  // 调用doSomething函数，获取url
  const url = await doSomething();
  // 发送fetch请求，获取数据
  const res = await fetch(url);
  // 将获取的数据转换为json格式
  const data = await res.json();
  // 将数据添加到listOfIngredients数组中
  listOfIngredients.push(data);
  // 打印listOfIngredients数组
  console.log(listOfIngredients);
}
//与以上代码一样
//doSomething()
// .then((url) => fetch(url))
// .then((res) => res.json())
// .then((data) => {
//   listOfIngredients.push(data);
// })
// .then(() => {
//   console.log(listOfIngredients);
// });

// new Promise((resolve, reject) => {
//   console.log("初始化");

//   resolve();
// })
//   .then(() => {
//     throw new Error("有哪里不对了");

//     console.log("执行「这个」");
//   })
//   .catch(() => {
//     console.log("执行「那个」");
//   })
//   .then(() => {
//     console.log("执行「这个」，无论前面发生了什么");
//   });
//结果：
// 初始化
// 执行「那个」
// 执行「这个」，无论前面发生了什么」

// 'https://jsonplaceholder.typicode.com/posts/1', // 测试API
// 'https://httpbin.org/json', // HTTP测试工具
// 'https://api.github.com/zen', // GitHub禅语
// 'https://dog.ceo/api/breeds/image/random', // 随机狗狗图片
// 'https://api.coindesk.com/v1/bpi/currentprice.json' // 比特币价格
// 用于获取数据的函数
// 定义一个函数，用于从指定URL获取数据
function fetchData(url) {
  // 返回一个Promise对象
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    // 当请求完成时，执行回调函数
    xhr.onload = () => {
      // 如果状态码为200，表示请求成功，调用resolve函数，并将响应数据作为参数传入
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        // 否则，调用reject函数，并将错误信息作为参数传入
        reject(new Error(xhr.statusText));
      }
    };
    // 当请求发生错误时，执行回调函数
    xhr.onerror = () => reject(new Error("网络错误"));
    xhr.send();
  });
}
// 用于显示数据的函数

document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetchBtn");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  fetchBtn.addEventListener("click", () => {
    loading.style.display = "block";
    result.textContent = "";
    error.textContent = "";

    fetchData("https://api.github.com/zen")
      .then((data) => {
        loading.style.display = "none";
        result.style.display = "block";
        result.innerHTML = `<h3 >获取数据成功:</h3><pre >${data}</pre>`;
        console.log("获取数据成功:", data);
      })
      .catch((error) => {
        loading.style.display = "none";
        error.style.display = "block";
        error.textContent = `获取数据失败: ${error.message}`;
        console.error("获取数据失败:", error);
      });
  });
});

//微任务包括：Promise 回调、MutationObserver 回调、process.nextTick（Node.js 环境）等。
// 宏任务包括：setTimeout、setInterval、I/O 操作、UI 渲染等。
// 在浏览器中，微任务队列会在每个宏任务执行完毕后立即执行，确保微任务在宏任务之前完成。

// const promise = new Promise((resolve, reject) => {
//   console.log("Promise 执行函数");
//   resolve();
// }).then((result) => {
//   console.log("Promise 回调（.then）");
// });

// setTimeout(() => {
//   console.log("新一轮事件循环：Promise（已完成）", promise);
// }, 0);

// console.log("Promise（队列中）", promise);

// 输出：
// Promise 执行函数
// Promise（队列中） Promise { <pending> }
// Promise 回调（.then）
// 新一轮事件循环：Promise（已完成） Promise { <fulfilled> }

//----------------------------------------------------------------------

//迭代器
// 定义一个函数，用于创建一个范围迭代器
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  // 初始化迭代器的起始索引，迭代次数
  let nextIndex = start;
  let iterationCount = 0;
  // 定义一个范围迭代器对象
  const rangeIterator = {
    // 定义迭代器的next方法
    next() {
      let result;
      if (nextIndex < end) {
        // 当前索引和迭代次数
        result = { value: nextIndex, done: false };
        // 更新当前索引
        nextIndex += step;
        iterationCount++;
        return result;
      }
      // 迭代次数和迭代结束标志
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

//使用迭代器

let rangeIterator = makeRangeIterator(1, 10, 2);
// 使用迭代器的next方法获取值
let result = rangeIterator.next();
while (!result.done) {
  console.log(result.value); // 输出当前索引
  result = rangeIterator.next(); // 获取下一个值
}
console.log(`迭代次数: ${result.value}`); // 输出迭代次数

//----------------------------------------------------------------------

// 生成器函数
// 定义一个生成器函数，用于生成斐波那契数列
function* fibonacci() {
  // 初始化当前值为0
  let current = 0;
  // 初始化下一个值为1
  let next = 1;
  // 无限循环
  while (true) {
    // 使用yield关键字返回当前值，并接收一个参数reset
    const reset = yield current;
    // 更新当前值和下一个值
    [current, next] = [next, next + current];
    // 如果reset为true，则重置当前值和下一个值
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0，重置序列
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
