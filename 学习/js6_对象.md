## [数学对象（Math）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_strings#数学对象（math）)

对于内置的[`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)数学常项和函数也有一些属性和方法。比方说， `Math` 对象的 `PI` 属性会有属性值 pi (3.141...)，你可以像这样调用它：

```
Math.PI; // π
```

同理，标准数学函数也是 Math 的方法。这些包括三角函数、对数、指数，和其他函数。比方说你想使用三角函数 `sin`，你可以这么写：

```
Math.sin(1.56);
```

需要注意的是 Math 的所有三角函数参数都是弧度制。

下面的表格总结了 `Math` 对象的方法。

Math 的方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`abs()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) | 绝对值                                                       |
| [`sin()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin), [`cos()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), [`tan()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan) | 标准三角函数;参数为弧度                                      |
| [`asin()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin), [`acos()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos), [`atan()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan), [`atan2()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2) | 反三角函数; 返回值为弧度                                     |
| [`sinh()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh), [`cosh()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh), [`tanh()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh) | 双曲三角函数; 参数为弧度。                                   |
| [`asinh()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh), [`acosh()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh), [`atanh()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh) | 反双曲三角函数;返回值为弧度。                                |
| [`pow()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow), [`exp()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp), [`expm1()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1), [`log10()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log10), [`log1p()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p), [`log2()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log2) | 指数与对数函数                                               |
| [`floor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`ceil()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) | 返回小于等于参数的最大整数；返回大于等于参数的最小整数       |
| [`min()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min), [`max()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max) | 返回一个以逗号间隔的数字参数列表中的较小或较大值 (分别地)    |
| [`random()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random) | 返回 0 和 1 之间的随机数。                                   |
| [`round()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round), [`fround()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/fround), [`trunc()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc), | 四舍五入和截断函数                                           |
| [`sqrt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), [`cbrt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt), [`hypot()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot) | 平方根，立方根，所有参数平方和的平方根两个参数平方和的平方根 |
| [`sign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) | 数字的符号，说明数字是否为正、负、零。                       |
| [`clz32()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32), [`imul()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) | 在 32 位 2 进制表示中，开头的 0 的数量。*返回传入的两个参数相乘结果的类 C 的 32 位表现形式* |

和其他对象不同，你不能够创建一个自己的 Math 对象。你只能使用内置的 Math 对象。

## [日期对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_strings#日期对象)

JavaScript 没有日期数据类型。但是你可以在你的程序里使用 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象和其方法来处理日期和时间。Date 对象有大量的设置、获取和操作日期的方法。它并不含有任何属性。

JavaScript 处理日期数据类似于 Java。这两种语言有许多一样的处理日期的方法，也都是以 1970 年 1 月 1 日 00:00:00 以来的毫秒数来储存数据类型的。

`Date` 对象的范围是相对距离 UTC 1970 年 1 月 1 日 的前后 100,000,000 天。

创建一个日期对象：

```
var dateObjectName = new Date([parameters]);
```

这里的 dateObjectName 对象是所创建的 Date 对象的一个名字，它可以成为一个新的对象或者已存在的其他对象的一个属性。

不使用 *new* 关键字来调用 Date 对象将返回当前时间和日期的字符串

前边的语法中的参数（parameters）可以是一下任何一种：

- 无参数 : 创建今天的日期和时间，例如： `today = new Date();`.
- 一个符合以下格式的表示日期的字符串："月 日，年 时：分：秒"。例如： `var Xmas95 = new Date("December 25, 1995 13:30:00")。`如果你省略时、分、秒，那么他们的值将被设置为 0。
- 一个年，月，日的整型值的集合，例如： `var Xmas95 = new Date(1995, 11, 25)`。
- 一个年，月，日，时，分，秒的集合，例如： `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### [`Date 对象的方法`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_strings#date_对象的方法)

处理日期时间的 Date 对象方法可分为以下几类：

- "set" 方法，用于设置 Date 对象的日期和时间的值。
- "get" 方法，用于获取 Date 对象的日期和时间的值。
- "to" 方法，用于返回 Date 对象的字符串格式的值。
- parse 和 UTC 方法，用于解析 Date 字符串。

通过“get”和“set”方法，你可以分别设置和获取秒，分，时，日，星期，月份，年。这里有个 getDay 方法可以返回星期，但是没有相应的 setDay 方法用来设置星期，因为星期是自动设置的。这些方法用整数来代表以下这些值：

- 秒，分：0 至 59
- 时：0 至 23
- 星期：0 (周日) 至 6 (周六)
- 日期：1 至 31
- 月份：0 (一月) to 11 (十二月)
- 年份：从 1900 开始的年数