## [定义函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#定义函数)

### [函数声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#函数声明)

一个**函数定义**（也称为**函数声明**，或**函数语句**）由 [`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function) 关键字，并跟随以下部分组成：

- 函数名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号括起来，`{ /* … */ }`。

参数本质上是**按值**传递给函数的——因此，即使函数体的代码为传递给函数的参数赋了新值，**这个改变也不会反映到全局或调用该函数的代码中**。

### [函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#函数表达式)

虽然上面的函数声明在语法上是一个语句，但函数也可以由[函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)创建。

这样的函数可以是**匿名**的；它不必有一个名称。

## [调用函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#调用函数)

*定义*的函数并不会自动*执行*它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。

**调用**函数才会以给定的参数真正执行这些动作。

 JavaScript 解释器会将整个函数声明提升到当前作用域的顶部，函数提升仅适用于函数*声明*，而不适用于函数*表达式*。

## [函数作用域](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#函数作用域)

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的作用域内定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。

换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。

## [作用域和函数栈](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#作用域和函数栈)

### [递归](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#递归)

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

1. 函数名
2. [`arguments.callee`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. 作用域内一个指向该函数的变量名

思考如下的函数定义：

```javascript
const foo = function bar() {
  // 这里编写语句
};
```

在这个函数体内，以下的语句是等价的：

1. `bar()`
2. `arguments.callee()`
3. `foo()`

调用自身的函数我们称之为***递归函数***。在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环，或者在这种情况下更确切地说是无限递归）。

### [嵌套函数和闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#嵌套函数和闭包)

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。

它自身也形成了一个*闭包*（closure）。闭包是可以拥有独立变量以及绑定了这些变量的环境（“封闭”了表达式）的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以“继承”容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

可以总结如下：

- 内部函数只可以在外部函数中访问。
- 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

### [多层嵌套函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#多层嵌套函数)

函数可以被多层嵌套。例如：

- 函数（`A`）可以包含函数（`B`），后者可以再包含函数（`C`）。
- 这里的函数 `B` 和 `C` 都形成了闭包，所以 `B` 可以访问 `A`，`C` 可以访问 `B`。
- 此外，因为 `C` 可以访问 `B`（而 `B` 可以访问 `A`），所以 `C` 也可以访问 `A`。

因此，闭包可以包含多个作用域；它们递归地包含了所有包含它的函数作用域。这个称之为*作用域链*。（稍后解释它被称为“链”的原因。）

## [构造函数 vs 函数声明 vs 函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions#构造函数_vs_函数声明_vs_函数表达式)

对比下面的例子：

一个用`Function`构造函数定义的函数，被赋值给变量 multiply：

```javascript
var multiply = new Function("x", "y", "return x * y");
```

一个名为`multiply`的函数声明：

```js
function multiply(x, y) {
  return x * y;
} // 没有分号
```

一个匿名函数的函数表达式，被赋值给变量`multiply`：

```javascript
var multiply = function (x, y) {
  return x * y;
};
```

一个命名为`func_named`的函数的函数表达式，被赋值给变量`multiply`：

```javascript
var multiply = function func_name(x, y) {
  return x * y;
};
```



## [闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#闭包)

闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数具有定义在外部函数中的所有变量和函数（以及外部函数能访问的所有变量和函数）的完全访问权限。

但是，外部函数却*不能*访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一种封装。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行的持续时间要长。当内部函数以某一种方式被任何一个外部函数之外的任何作用域访问时，就会创建闭包。

## [使用 arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#使用_arguments_对象)

函数的实际参数会被保存在一个类似数组的 arguments 对象中。在函数内，你可以按如下方式找出传入的参数：

```javascript
arguments[i];
```

其中 `i` 是参数的序号，从 `0` 开始。所以第一个传入函数的参数会是 `arguments[0]`。参数的数量由 `arguments.length` 表示。

使用 `arguments` 对象，你可以处理比声明更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。你可以用 `arguments.length` 来获得实际传递给函数的参数的数量，然后用 `arguments` 对象来访问每个参数。

## [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#箭头函数)

[箭头函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)（也称*胖箭头*，以区分未来 JavaScript 中假设的 `->` 语法）相比函数表达式具有较短的语法且没有它自己的 [`this`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)、[`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)、[`super`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 和 [`new.target`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。箭头函数总是匿名的。

有两个因素会影响对箭头函数的引入：*更简洁的函数*和 `this` 的*无绑定性*。

## [预定义函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#预定义函数)

JavaScript 语言有几个顶级的内置函数：

- [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

  **`eval()`** 方法执行方法计算以字符串表示的 JavaScript 代码。

- [`isFinite()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite)

  **`isFinite()`** 全局函数判断传入的值是否是有限的数值。如果需要的话，其参数首先被转换为一个数值。

- [`isNaN()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

  **`isNaN()`** 函数判断一个值是否是 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。注意：`isNaN` 函数内部的强制转换规则十分[有趣](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN#描述)。你也可以使用 [`Number.isNaN()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 来判断该值是否为 NaN。

- [`parseFloat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

  **`parseFloat()`** 函数解析字符串参数，并返回一个浮点数。

- [`parseInt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

  **`parseInt()`** 函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。

- [`decodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

  **`decodeURI()`** 函数对先前经过 [`encodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 函数或者其他类似方法编码过的统一资源标志符（URI）进行解码。

- [`decodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

  **`decodeURIComponent()`** 方法对先前经过 [`encodeURIComponent`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 函数或者其他类似方法编码的统一资源标志符（URI）进行解码。

- [`encodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

  **`encodeURI()`** 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理（surrogate）”字符组成的字符，只会编码为四个转义序列）。

- [`encodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

  **`encodeURIComponent()`** 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理”字符组成的字符，只会编码为四个转义序列）。