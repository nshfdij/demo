## [块语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#块语句)

最基本的语句是用于组合语句的*块语句*。块由一对花括号界定：

```javascript
{
  statement1;
  statement2;
  // …
  statementN;
}
```

**备注：** 用 [`var`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 声明的变量不是块级作用域的，而是函数作用域或脚本作用域的，且设置它们的效果会超越到块本身之外。例如：

```javascript
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

会输出 `2`，因为块中 `var x` 语句和块前面的 `var x` 语句的作用域是一样的。（在 C 或 Java 中，等效的代码会输出 `1`。）

使用 [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 会消除这个作用域效果。

## [条件语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#条件语句)

条件语句是一组会在指定的条件为真时执行的指令。JavaScript 支持两种条件语句：`if...else` 和 `switch`。

### [if...else 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_语句)

使用 `if` 语句在逻辑条件为 `true` 时执行语句。使用可选的 `else` 子句在条件为 `false` 时执行语句。

#### 假值

下面这些值求值为 `false`（也叫做[假](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)值）：

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空字符串（`""`）

所有其他的值——包括所有的对象——在被传递给条件语句时会求值为 `true`。

### [switch 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_语句)

`switch` 语句允许程序求一个表达式的值并且尝试将表达式的值和 `case` 标签进行匹配。如果匹配成功，程序会执行相关的语句。

#### break 语句

每个 `case` 子句会关联一个可选的 `break` 语句，它能保证在匹配的语句被执行后程序可以跳出 `switch` 并且继续执行 `switch` 后面的语句。如果不使用 `break` ，程序会在 `switch` 语句内继续执行（将会执行下一个 `case` 的语句，依此类推）。

## [异常处理语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#异常处理语句)

你可以用 `throw` 语句抛出一个异常并且用 `try...catch` 语句处理它。

- [`throw` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_语句)
- [`try...catch` 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_语句)

### [异常类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#异常类型)

JavaScript 可以抛出任意对象。然而，并非所有抛出的对象都是生而平等的。尽管抛出数字或者字符串作为错误信息十分常见，但是用下列其中一种专门为这个目的而创建的异常类型通常更为高效：

- [ECMAScript 异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#错误类型)
- [`DOMException`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMException)

### [throw 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_语句)

使用 `throw` 语句抛出异常。`throw` 语句会指明要抛出的值

### [try...catch 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_语句)

`try...catch` 语句用于标记一段要尝试的语句块，并指定抛出异常时的一个或多个响应。如果抛出了异常，`try...catch` 语句会捕获它。

你希望`try` 块执行成功——但如果它<u>没有执行成功</u>，那么你希望将控制转移到 `catch` 块。如果 `try` 块中的语句（或者在 `try` 块中调用的函数里）<u>抛出了异常</u>，那么控制*立马*转移到 `catch` 块。如果 `try` 块没有抛出异常，`catch` 块就会被跳过。`finally` 块总会紧跟在 `try` 和 `catch` 块之后执行，但会在 `try...catch` 语句后面的语句之前执行。

#### catch 块

你可以使用 `catch` 块来处理所有可能在 `try` 块中产生的异常。

**备注：** 在 `catch` 块中将错误输出到控制台时，建议使用 `console.error()` 而不是 `console.log()` 进行调试。它会将消息格式化为错误，并将其添加到页面生成的错误消息列表。

#### finally 块

`finally` 块包含的语句在 `try` 和 `catch` 块执行*之后*执行。此外，`finally` 块在 `try…catch…finally` 语句后面的代码*之前*执行。

#### 嵌套 try...catch 语句

你可以嵌套一个或多个 `try ... catch` 语句。

如果一个内部 `try` 块*没有*对应的 `catch` 块：

1. 它*必须*有一个 `finally` 块，以及
2. 包围的 `try...catch` 语句的 `catch` 块会被检查是否能处理该异常。

想要了解更多信息，参见 [`try... catch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 参考页上的[嵌套 try 块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#嵌套_try_块)。

### [使用 Error 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#使用_error_对象)

根据错误类型，你也许可以用 `name` 和 `message` 属性获取更精炼的信息。

`name` 属性提供了常规的 `Error` 类（如 `DOMException` 或 `Error`），而 `message` 通常提供的信息比将错误对象转换成字符串得到的信息更简明。

在抛出自定义异常时，为了充分利用那些属性（比如 `catch` 块不能分辨是自定义异常还是系统异常时），你可以使用 `Error` 构造函数。

比如：

```javascript
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("消息");
  } else {
    doSomethingToGetAJavaScriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  // 现在，实际使用 `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // “消息”，或者一个 JavaScript 错误消息
}
```