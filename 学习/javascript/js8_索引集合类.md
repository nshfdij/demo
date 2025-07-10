# 索引集合

本章介绍按索引值排序的数据集合。包括数组和类数组结构，如 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 对象和 [`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 对象。

*数组*是由名称和索引引用的值构成的有序列表。

JavaScript 中没有明确的数组数据类型。但是，你可以使用预定义的 `Array` 对象及其方法来处理应用程序中的数组。`Array` 对象具有以各种方式操作数组的方法，例如连接、反转和排序。它有一个用于确定数组长度的属性和用于正则表达式的其他属性。

## [创建数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#创建数组)

以下语句创建了等效的数组：

```javascript
const arr1 = new Array(element0, element1, /* … ,*/ elementN);
const arr2 = Array(element0, element1, /* … ,*/ elementN);
const arr3 = [element0, element1, /* … ,*/ elementN];
```

为了创建一个长度不为 0，但是又没有任何元素的数组，可选以下任何一种方式：

```javascript
// 这种方式...
const arr1 = new Array(arrayLength);

// ...与这种方式会形成相同数组
const arr2 = Array(arrayLength);

// 这个效果也一样
const arr3 = [];
arr3.length = arrayLength;
```

除了上面所示的新定义的变量外，数组还可以被赋值为新对象或现有对象的属性：

```javascript
const obj = {};
// …
obj.prop = [element0, element1, /* … ,*/ elementN];

// 或
const obj = { prop: [element0, element1, /* … ,*/ elementN] };
```

## [引用数组元素](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#引用数组元素)

因为元素也是属性，你可以使用[属性访问器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)来访问。

将数组的第一个元素引用为 `myArray[0]`，将数组的第二个元素引用为 `myArray[1]`，等等...元素的索引从零开始。

## [填充数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#填充数组)

你可以通过给数组元素赋值来填充数组

**备注：** 如果你在以上代码中给数组运算符的是一个非整型数值，那么它将作为一个表示数组的对象的属性创建，而不是数组的元素。

```javascript
const arr = [];
arr[3.4] = "Oranges";
console.log(arr.length); // 0
console.log(Object.hasOwn(arr, 3.4)); // true
```

[`forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法提供了遍历数组元素的其他方法：

### [遍历数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#遍历数组)

一种常见的操作是遍历数组的值，以某种方式处理每个值。

```javascript
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

传递给 `forEach` 的函数对数组中的每个元素执行一次，数组元素作为参数传递给该函数。未赋值的值不会在 `forEach` 循环迭代。

### **[数组方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#数组方法)**

[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 对象具有下列方法：

[`concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 方法连接两个或多个数组并返回一个新的数组。

```javascript
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray 现在是 ["1", "2", "3", "a", "b", "c"]
```



[`join()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法将数组中的所有元素连接成一个字符串。

```javascript
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list 现在是 "Wind - Rain - Fire"
```



[`push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 方法在数组末尾添加一个或多个元素，并返回数组操作后的 `length`。

```javascript
const myArray = ["1", "2"];
myArray.push("3"); // myArray 现在是 ["1", "2", "3"]
```



[`pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 方法从数组移出最后一个元素，并返回该元素。

```javascript
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray 现在是 ["1", "2"]，last 为 "3"
```



[`shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 方法从数组移出第一个元素，并返回该元素。

```javascript
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray 现在是 ["2", "3"]，first 为 "1"
```



[`unshift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) 方法在数组开头添加一个或多个元素，并返回数组的新长度。

```javascript
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray 变成了 ["4", "5", "1", "2", "3"]
```



[`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 方法从数组提取一个片段，并作为一个新数组返回。

```javascript
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// 从索引 1 开始，提取所有的元素，直到索引 3 为止
```



[`at()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at) 方法返回数组中指定索引处的元素，如果索引超出范围，则返回 `undefined`。它主要用于从数组末尾访问元素的负下标。

```javascript
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d"，myArray 的倒数第二个元素
```



[`splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 方法从数组移除一些元素，并（可选地）替换它们。它返回从数组中删除的元素。

```javascript
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray 现在是 ["1", "a", "b", "c", "d", "5"]
// 本代码从 1 号索引开始（或元素“2”所在的位置），
// 移除 3 个元素，然后将后续元素插入到那个位置上。
```



[`reverse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 方法原地颠倒数组元素的顺序：第一个数组元素变为最后一个数组元素，最后一个数组元素变为第一个数组元素。它返回对数组的引用。

```javascript
const myArray = ["1", "2", "3"];
myArray.reverse();
// 将原数组颠倒，myArray = [ "3", "2", "1" ]
```

[`flat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 方法返回一个新数组，所有子数组元素递归地连接到其中，直到指定的深度。

```javascript
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray 现在是 [1, 2, 3, 4]，因为子数组 [3, 4] 已被展平
```

[`sort()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法对数组的元素进行适当的排序，并返回对数组的引用。

```javascript
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// 对数组排序，myArray = ["Fire", "Rain", "Wind"]
```



`sort()` 也可以接受回调函数来决定如何比较数组元素。使用两个参数调用回调函数，它们是来自数组的两个值。该函数比较这两个值并返回正数、负数或零，表示这两个值的顺序。例如，以下命令将根据字符串的最后一个字母对数组进行排序：

```javascript
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // 负数 => a < b，a 在 b 之前
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // 正数 => a > b，a 在 b 之后
  }
  return 0; // 0 => a = b，a 和 b 保持原来的顺序
};
myArray.sort(sortFn);
// 对数组排序，myArray = ["Wind","Fire","Rain"]
```

- 如果 `a` 小于 `b`，返回 `-1`（或任何负数）
- 如果 `a` 大于 `b`，返回 `1`（或任何正数）
- 如果 `a` 和 `b` 相等，返回 `0`。



[`indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 方法在数组中搜索 `searchElement` 并返回第一个匹配的索引。

```javascript
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// 再试一次，这次从最后一次匹配之后开始
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, 因为找不到 'z'
```

[`lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 方法的工作原理类似于 `indexOf`，但这是从末尾开始，反向搜索。

```javascript
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5
javascript
// 再试一次，这次从最后一次匹配之前开始
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

[`forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法对数组中的每个元素执行 `callback` 并返回 `undefined`。

```javascript
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// 输出：
// a
// b
// c
```

接受回调的 `forEach` 方法（以及下面的其他方法）被称为*迭代方法*，因为它们以某种方式遍历整个数组。每个都接受第二个可选的参数 `thisArg`。如果提供，`thisArg` 将成为回调函数体中 `this` 关键字的值。如果没有提供，就像在明确的对象上下文之外被调用一样，当函数在严格模式下时，`this` 是 `undefined`，当函数在[非严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下时，`this` 将引用全局对象（[`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)、[`globalThis`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 等。）。

**备注：** 上面介绍的 `sort()` 方法不是迭代方法，因为它的回调函数只用于比较，不能基于元素顺序以任何特定顺序调用。`sort()` 也不接受 `thisArg` 形参。

[`map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法返回由每个数组元素上执行 `callback` 的返回值所组成的新数组。

```javascript
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

[`flatMap()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) 方法先执行 `map()`，再执行深度为 1 的 `flat()`。

```javascript
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

[`filter()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 方法返回一个新数组，其中包含 `callback` 返回 `true` 的元素。

```javascript
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

[`find()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 方法返回 `callback` 返回 `true` 的第一个元素。

```javascript
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

[`findLast()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) 方法返回 `callback` 返回 `true` 的最后一个元素。

```javascript
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

[`findIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 方法返回 `callback` 返回 `true` 的第一个元素的索引。

```javascript
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

[`findLastIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) 方法返回 `callback` 返回 `true` 的最后一个元素的索引。

```javascript
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

如果 `callback` 对数组中的每一个元素都返回 `true`，则 [`every()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 方法返回 `true`。

```javascript
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

如果 `callback` 对数组中至少一个元素返回 `true`，则 [`some()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 方法返回 `true`。

```javascript
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
```

[`reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 方法对数组中的每个值执行 `callback(accumulator, currentValue, currentIndex, Array)`，目的是将列表中的元素减少到单个值。`reduce` 函数返回 `callback` 函数返回的最终值。

如果指定了 `initialValue`，则调用 `callback`，并将 `initialValue` 作为第一个参数值，将数组中第一个元素的值作为第二个参数值。

如果*没有*指定 `initialValue`，那么 `callback` 的前两个参数值将是数组的第一个和第二个元素。之后的*每一次*调用，第一个参数的值将是前一个调用中返回的 `callback`，第二个参数的值将是数组中的下一个值。

如果 `callback` 需要访问正在处理的元素的索引，或者访问整个数组，它们可以作为可选参数。

```javascript
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

[`reduceRight()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 方法的工作原理类似于 `reduce()`，但从最后一个元素开始。

`reduce` 和 `reduceRight` 是迭代数组方法中最不被人熟知的两个函数。它们应该使用在那些需要把数组的元素两两递归处理，并最终计算成一个单一结果的算法。

## [稀疏数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)

数组可以包含“空槽”，这与用值 `undefined` 填充的槽不一样。

## [多维数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#多维数组)

数组是可以嵌套的，这就意味着一个数组可以作为一个元素被包含在另外一个数组里面。利用 JavaScript 数组的这个特性，可以创建多维数组。