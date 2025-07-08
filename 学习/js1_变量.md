### [数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数据类型)

最新的 ECMAScript 标准定义了 8 种数据类型：

- 七种[基本](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)数据类型：
  1. [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)。`true` 和 `false`。
  2. [null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)。一个表示空值的特殊关键字。（因为 JavaScript 是区分大小写的，所以 `null` 和 `Null`、`NULL` 或其他变体是不一样的。）
  3. [undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/Undefined)。一个未定义值的顶级属性。
  4. [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)。整数或浮点数。例如，`42` 或 `3.14159`。
  5. [BigInt](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt)。任意精度的整数。例如，`9007199254740992n`。
  6. [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String)。表示文本值的字符序列。例如，`"Howdy"`。
  7. [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。其实例是唯一且不可变的数据类型。
- 以及 [Object](https://developer.mozilla.org/zh-CN/docs/Glossary/Object)

| 变量                                                         | 解释                                                         | 示例                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [字符串](https://developer.mozilla.org/zh-CN/docs/Glossary/String) | 字符串就是文本序列。用单引号或双引号括起来的值就是字符串。   | `let myVariable = '鲍勃';` 或者 `let myVariable = "鲍勃";`   |
| [数字](https://developer.mozilla.org/zh-CN/docs/Glossary/Number) | 数字周围没有引号。                                           | `let myVariable = 10;`                                       |
| [布尔](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean) | 真/假值。单词 `true`/`false` 是不需要引号的特殊关键字。      | `let myVariable = true;`                                     |
| [数组](https://developer.mozilla.org/zh-CN/docs/Glossary/Array) | 让你在单一引用中存储多个值的结构。                           | `let myVariable = [1,'鲍勃','斯蒂夫',10];` 像这样引用数组成员：`myVariable[0]`、`myVariable[1]`，等等。 |
| [对象](https://developer.mozilla.org/zh-CN/docs/Glossary/Object) | 可以是任何内容。JavaScript 里的一切都是对象，对象能在变量中存储。这一点要牢记于心。 | `let myVariable = document.querySelector('h1');` 上面的示例都是。 |

## [赋值运算符](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math#assignment_operators)

| 算子 | 名字     | 目的                                              | 例        | 的快捷方式   |
| :--- | :------- | :------------------------------------------------ | :-------- | :----------- |
| `+=` | 加法赋值 | 将右侧的值添加到左侧的变量值，然后 返回新的变量值 | `x += 4;` | `x = x + 4;` |
| `-=` | 减法赋值 | 从左侧的变量值中减去右侧的值， 并返回新的变量值   | `x -= 3;` | `x = x - 3;` |
| `*=` | 乘法赋值 | 将左侧的变量值乘以右侧的值，然后 返回新的变量值   | `x *= 3;` | `x = x * 3;` |
| `/=` | 部门分配 | 将左侧的变量值除以右侧的值，然后 返回新的变量值   | `x /= 5;` | `x = x / 5;` |



## [声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#声明)

JavaScript 有三种变量声明方式。

- [`var`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)

  声明一个变量，可选择将其初始化为一个值。

- [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

  声明一个块级作用域的局部变量，可选择将其初始化为一个值。

- [`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)

  声明一个块级作用域的只读命名常量。

### [变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#变量)

在应用程序中，你将变量用作值的符号名。变量的名字又叫做[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)，其需要遵守一定的规则。

JavaScript 标识符通常以字母、下划线（`_`）或者美元符号（`$`）开头；后续的字符也可以是数字（`0`-`9`）。因为 JavaScript 是区分大小写的，所以字母包含从 `A` 到 `Z` 的大写字母和从 `a` 到 `z` 的小写字母。

你可以在标识符中使用大部分 Unicode 字母，例如 `å` 和 `ü`（想要了解更多细节，参见[词法语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)参考）。你也可以在标识符中使用 [Unicode 转义序列](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字符串字面量)表示字符。

合法的标识符示例：`Number_hits`、`temp99`、`$credit` 和 `_name`。

### [声明变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#声明变量)

你可以用以下两种方式声明变量：

- 使用关键字 [`var`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)。例如 `var x = 42`。这个语法可以用来声明**局部**变量和**全局**变量，具体取决于*执行上下文*。
- 使用关键字 [`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 或 [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 。例如 `let y = 13`。这个语法可以用来声明块级作用域的局部变量。（参见下方的[变量作用域](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#变量作用域)。）

你可以使用[解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)语法声明用于解包值的变量。例如 `const { bar } = foo`。这会创建一个名为 `bar` 的变量，并且将 `foo` 对象中属性名与之相同的属性的值赋给它。

### [变量作用域](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#变量作用域)

一个变量可能属于下列[作用域](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)之一：

- 全局作用域：在脚本模式中运行的所有代码的默认作用域。
- 模块作用域：在模块模式中运行的代码的作用域。
- 函数作用域：由[函数](https://developer.mozilla.org/zh-CN/docs/Glossary/Function)创建的作用域。

此外，用 [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 声明的变量属于另一个作用域：

- 块级作用域：用一对花括号创建的作用域（[块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/block)）。

当你在函数的外部声明变量时，该变量被称作*全局*变量，因为当前文档中任何其他代码都能使用它。当你在函数内声明变量时，该变量被称作*局部*变量，因为它仅在那个函数内可用。

`let` 和 `const` 声明也会被限制在声明所在的[块语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#块语句)中。

```javascript
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

然而，用 `var` 创建的变量不是块级作用域的，而只是块所在的*函数（或全局作用域）*的。

例如，下列代码会输出 `5`，因为 `x` 的作用域是全局上下文（如果代码是函数的一部分的话，就是函数上下文）。`x` 的作用域不受附近的 `if` 语句块的限制。

```javascript
if (true) {
  var x = 5;
}
console.log(x); // x 是 5
```

### [变量提升](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#变量提升)

用 `var` 声明的变量会被[提升](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)，意味着你可以在该变量所在的作用域的任意地方引用该变量，即使还没有到达变量声明的地方。你可以看见 `var` 声明好像被提升到该变量的函数或全局作用域的顶部。然而，如果你在声明变量之前访问该变量，其值总是 `undefined`，因为只有该变量的*声明*和*默认初始化（为 `undefined`）\*被提升，而不是它的\*值赋值*。

```javascript
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "局部值";
})();
```

上面的例子可以被解释为：

```javascript
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "局部值";
})();
```

由于存在变量提升，一个函数中所有的 `var` 语句应尽可能地放在接近函数顶部的地方。这个最佳实践会提升代码的清晰度。

`let` 和 `const` 是否被提升是个定义争论。在变量声明之前引用块中的变量，将总是抛出 [`ReferenceError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)，因为该变量位于从块的开始到声明所在的“[暂时性死区](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)”中。

```javascript
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

与 `var` 声明不同（其仅提升声明，不提升其值），[函数声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#函数提升)是全部被提升——你可以在该函数的作用域中的任何地方安全地调用函数。想要了解更多讨论，参见[提升](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)术语条目。

### [全局变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#全局变量)

实际上，全局变量是*全局对象*的属性。

在网页中，全局对象是 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)，所以你可以用 `window.variable` 语法读取和设置全局变量。在所有的环境中，[`globalThis`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 变量（其自身也是一个全局变量）可以被用于读取和设置全局变量。这为不同 JavaScript 运行时提供了一个一致的接口。

因此，你可以通过指定 `window` 或 `frame` 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，如果在文档中声明了一个叫 `phoneNumber` 的变量，那么你就可以在 `iframe` 中使用 `parent.phoneNumber` 引用它。

### [常量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#常量)

你可以用 [`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 关键字创建一个只读命名常量。常量标识符的语法和任何变量标识符的语法相同：必须以字母、下划线或美元符号（`$`）开头并可以包含字母、数字或下划线。

```javascript
const PI = 3.14;
```

常量不可以通过赋值来改变其值或在脚本运行时被重新声明。必须为其初始化一个值。常量的作用域规则和 `let` 块级作用域变量的一致。

在同一作用域中，不能使用与变量名或函数名相同的名字来声明常量。例如：

```javascript
// 这会造成错误
function f() {}
const f = 5;

// 这也会造成错误
function f() {
  const g = 5;
  var g;
}
```

然而，`const` 仅阻止*重新赋值*，而不阻止*修改*。被赋值为常量的对象的属性是不受保护的，所以下面的语句执行时不会产生错误。

```javascript
const MY_OBJECT = { key: "值" };
MY_OBJECT.key = "其他值";
```

同样的，数组的元素也是不受保护的，所以下面的语句执行时也不会产生错误。

```javascript
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

### [字符串转换为数字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字符串转换为数字)

有一些方法可以将内存中表示一个数字的字符串转换为数字。

- [`parseInt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [`parseFloat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

`parseInt` 只返回整数，因此它在处理小数时用途有限。

## [字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字面量)

在 JavaScript 中，*字面量*可以表示值。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。本节将介绍以下类型的字面量：

- [数组字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数组字面量)
- [布尔字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#布尔字面量)
- [数字字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数字字面量)
- [对象字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量)
- [RegExp 字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_字面量)
- [字符串字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字符串字面量)

### [布尔字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#布尔字面量)

布尔类型有两种字面量值：`true` 和 `false`。

### [数字字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数字字面量)

JavaScript 数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量。

值得一提的是，语言规范要求数字字面量必须是无符号的。但是像 `-123.4` 这样的代码片段还是没有问题的，会被解释为一元操作符 `-` 应用于数字字面量 `123.4`。

#### 整数字面量

整数和 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 字面量可以用十进制（基数 10）、十六进制（基数 16）、八进制（基数 8）和二进制（基数 2）表示。

- *十进制*整数字面量由数字序列组成，且没有前缀 `0`（零）。
- *八进制*的整数字面量以 `0`（或 `0O`、`0o`）开头，只能包括数字 0-7。
- *十六进制*整数字面量以 `0x`（或 `0X`）开头，可以包含数字（`0`-`9`）和字母 `a`-`f` 或 `A`-`F`。（字符的大小写不影响数值。因此，`0xa` = `0xA` = `10` 和 `0xf` = `0xF` = `15`。）
- *二进制*整数字面量以 `0b`（或 `0B`）开头，只能包含数字 `0` 和 `1`。
- [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 由整数字面量和 `n` 后缀组成。[`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 也可以使用上面的基数。注意前缀零的八进制语法（例如，`0123n`）是不允许的，但 `0o123n` 是可以的。

#### 浮点数字面量

浮点数字面量可以有以下的组成部分：

- 一个无符号的十进制整数，
- 小数点（“.”），
- 小数部分（另一个十进制数），
- 指数部分。

指数部分以 `e` 或 `E` 开头，后面跟着一个整数，这个整数可以有正负号（即前缀 `+` 或 `-`）。浮点数字面量至少有一位数字，而且必须带小数点或者 `e`（`E`）。

### [对象字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量)

对象字面量是由一对花括号（`{}`）括起来的包含零个或多个属性名和相关值的列表。

可以使用数字或字符串字面量作为属性的名字，或者在另一个对象字面量内嵌套一个对象字面量。

### [RegExp 字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_字面量)

一个正则表达式字面量（详细定义参见[这篇文章](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)）是字符被正斜杠围成的表达式。下面是正则表达式字面量的一个示例。

```javascript
const re = /ab+c/;
```

### [字符串字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字符串字面量)

字符串字面量是由一对双引号（`"`）或单引号（`'`）括起来的零个或多个字符。字符串被限定在同种引号之间（也即，必须是成对单引号或成对双引号）。

下面是字符串字面量的示例：

```javascript
'foo'
"bar"
'1234'
'一行\n另一行'
"Joyo 的猫"
```

你应该使用字符串字面量，除非你特别需要使用 `String` 对象。想要了解有关 `String` 对象的细节，参见 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)。

你可以在字符串字面量值上使用 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象的所有方法。JavaScript 会自动将字符串字面量转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象。你也可以使用字符串字面量的 `length` 属性。

jsCopy to Clipboard

```
// 将打印字符串中的字符个数（包括空格）
console.log("John 的猫".length); // 结果为：7
```

[模板字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)也可用。模板字面量由一对反引号（```）（[重音符](https://zh.wikipedia.org/wiki/重音符)）包围，而不是双引号或单引号。

模板字面量为构建字符串提供了语法糖。（这与 Perl、Python 还有其他语言中的字符串插值的特性相似。）

以下表格列举了你能在 JavaScript 的字符串中使用的特殊字符。



| 字符        | 意思                                                         |
| :---------- | :----------------------------------------------------------- |
| `\0`        | 空字节                                                       |
| `\b`        | 退格符                                                       |
| `\f`        | 换页符                                                       |
| `\n`        | 换行符                                                       |
| `\r`        | 回车符                                                       |
| `\t`        | 制表符                                                       |
| `\v`        | 垂直制表符                                                   |
| `\'`        | 撇号或单引号                                                 |
| `\"`        | 双引号                                                       |
| `\\`        | 反斜杠字符                                                   |
| `\XXX`      | 由从 `0` 到 `377` 最多三位八进制数 `XXX` 表示的 Latin-1 字符。例如，`\251` 是版权符号的八进制序列。 |
| `\xXX`      | 由从 `00` 和 `FF` 的两位十六进制数字 `XX` 表示的 Latin-1 字符。例如，`\xA9` 是版权符号的十六进制序列。 |
| `\uXXXX`    | 由四位十六进制数字 `XXXX` 表示的 Unicode 字符。例如，`\ u00A9` 是版权符号的 Unicode 序列。见 [Unicode 转义序列](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字符串字面量)。 |
| `\u{XXXXX}` | Unicode 码位转义。例如，`\u{2F804}` 相当于 Unicode 转义 `\uD87E\uDC04`。 |