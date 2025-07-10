# 循环与迭代

JavaScript 中提供了这些循环语句：

- [for 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for_语句)
- [do...while 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_语句)
- [while 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#while_语句)
- [label 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#label_语句)
- [break 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#break_语句)
- [continue 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_语句)
- [for...in 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_语句)
- [for...of 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_语句)

## [`for` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for_语句)

一个 [`for`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环会一直重复执行，直到指定的循环条件为 false。JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。一个 for 语句是这个样子的：

```javascript
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

## [`do...while` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_语句)

[`do...while`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while) 语句一直重复直到指定的条件求值得到假值（false）。一个 do...while 语句看起来像这样：

```javascript
do
  statement
while (condition);
```

## [`while` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#while_语句)

一个 [`while`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 语句只要指定的条件求值为真（true）就会一直执行它的语句块。一个 `while` 语句看起来像这样：

```javascript
while (condition)
  statement
```

## [`label` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#label_语句)

一个 [`label`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label) 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 label 标识一个循环，然后使用 `break` 或者 `continue` 来指出程序是否该停止循环还是继续循环。

label 语句的语法看起来像这样：

```javascript
label :
   statement
```

## [`break` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#break_语句)

使用 [`break`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break) 语句来终止循环，`switch`，或者是链接到 label 语句。

- 当你使用不带 label 的 `break` 时，它会立即终止当前所在的 `while`，`do-while`，`for`，或者 `switch` 并把控制权交回这些结构后面的语句。
- 当你使用带 label 的 `break` 时，它会终止指定的带标记（label）的语句。

## [`continue` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_语句)

[`continue`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/continue) 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 `while`、`do-while`、`for`，或者 `label` 语句。

- 当你使用不带 label 的 `continue` 时，它终止当前 `while`，`do-while`，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。
- 当你使用带 label 的 `continue` 时，它会应用被 label 标识的循环语句。

## [`for...in` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_语句)

[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 语句循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript 会为每一个不同的属性执行指定的语句。

```javascript
for (variable in object) {
  statements
}
```

## [`for...of` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_语句)

[`for...of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 语句在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（包括[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)、[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)、[`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。

```javascript
for (variable of object) {
  statement
}
```

下面的这个例子展示了 `for...of` 和 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 两种循环语句之间的区别。 `for...in` 循环遍历的结果是数组元素的下标，而 `for...of` 遍历的结果是元素的值：

```javascript
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}

// 注意 for...of 的输出没有出现 "hello"
```