## [运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#运算符)

JavaScript 拥有如下类型的运算符。本节描述了运算符和运算符的优先级。

- [赋值运算符（Assignment operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [比较运算符（Comparison operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#比较运算符)
- [算数运算符（Arithmetic operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#算术运算符)
- [位运算符（Bitwise operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#位运算符)
- [逻辑运算符（Logical operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#逻辑运算符)
- [字符串运算符（String operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#字符串运算符)
- [条件（三元）运算符（Conditional operator）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#条件（三元）运算符)
- [逗号运算符（Comma operator）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#逗号操作符)
- [一元运算符（Unary operators）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#一元操作符)
- [关系运算符（Relational operator）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#关系运算符)

### [赋值运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)

| 名字                                                         | 简写的运算符 | 含义             |
| :----------------------------------------------------------- | :----------- | :--------------- |
| [赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment) | `x = y`      | `x = y`          |
| [加法赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition_assignment) | `x += y`     | `x = x + y`      |
| [减法赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment) | `x -= y`     | `x = x - y`      |
| [乘法赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment) | `x *= y`     | `x = x * y`      |
| [除法赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Division_assignment) | `x /= y`     | `x = x / y`      |
| [求余赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder_assignment) | `x %= y`     | `x = x % y`      |
| [求幂赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment) | `x **= y`    | `x = x ** y`     |
| [左移位赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment) | `x <<= y`    | `x = x << y`     |
| [右移位赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment) | `x >>= y`    | `x = x >> y`     |
| [无符号右移位赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= y`   | `x = x >>> y`    |
| [按位与赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment) | `x &= y`     | `x = x & y`      |
| [按位异或赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) | `x ^= y`     | `x = x ^ y`      |
| [按位或赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment) | `x |= y`     | `x = x | y`      |
| [逻辑与赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment) | `x &&= f()`  | `x && (x = f())` |
| [逻辑或赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment) | `x ||= f()`  | `x || (x = f())` |
| [逻辑空赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) | `x ??= f()`  | `x ?? (x = f())` |

#### 解构

对于更复杂的赋值，[解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)语法是一个能从数组或对象对应的数组结构或对象字面量里提取数据的 Javascript 表达式。

```javascript
var foo = ["one", "two", "three"];

// 不使用解构
var one = foo[0];
var two = foo[1];
var three = foo[2];

// 使用解构
var [one, two, three] = foo;
```

### [比较运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#比较运算符)

| 运算符                                                       | 描述                                                         | 返回 true 的示例                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------- |
| [等于 Equal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#equality) (`==`) | 如果两边操作数相等时返回 true。                              | `3 == var1` `"3" == var1` `3 == '3'` |
| [不等于 Not equal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#inequality) (`!=`) | 如果两边操作数不相等时返回 true                              | `var1 != 4 var2 != "3"`              |
| [全等 Strict equal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#identity) (`===`) | 两边操作数相等且类型相同时返回 true。参见 [`Object.is`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) and [sameness in JS](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness). | `3 === var1`                         |
| [不全等 Strict not equal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#nonidentity) (`!==`) | 两边操作数不相等或类型不同时返回 true。                      | `var1 !== "3" 3 !== '3'`             |
| [大于 Greater than](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#greater_than_operator) (`>`) | 左边的操作数大于右边的操作数返回 true                        | `var2 > var1 "12" > 2`               |
| [大于等于 Greater than or equal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#greater_than_or_equal_operator) (`>=`) | 左边的操作数大于或等于右边的操作数返回 true                  | `var2 >= var1 var1 >= 3`             |
| [小于 Less than](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#less_than_operator) (`<`) | 左边的操作数小于右边的操作数返回 true                        | `var1 < var2 "2" < 12`               |
| [小于等于 Less than or equal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#less_than_or_equal_operator) (`<=`) | 左边的操作数小于或等于右边的操作数返回 true                  | `var1 <= var2 var2 <= 5`             |

**备注：** （**=>**）不是运算符，而是[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)的标记符号。

### [算术运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#算术运算符)

| 运算符            | 描述                                                         | 示例                                                         |
| :---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 求余（`%`）       | 二元运算符。返回相除之后的余数。                             | 12 % 5 返回 2。                                              |
| 自增（`++`）      | 一元运算符。将操作数的值加一。如果放在操作数前面（`++x`），则返回加一后的值；如果放在操作数后面（`x++`），则返回操作数原值，然后再将操作数加一。 | `var x=3;` `console.log(++x); //4` `console.log(x); //4` `var y=3;` `console.log(y++); //3` `console.log(y); //4` |
| 自减（`--`）      | 一元运算符。将操作数的值减一。前后缀两种用法的返回值类似自增运算符。 | var x=3; console.log(--x); //输入 2,x=2var y=3;console.log(y--);//输出 3,x=2; |
| 一元负值符（`-`） | 一元运算符，返回操作数的负值。                               | var x=3; console.log(-x); //输入 -3                          |
| 一元正值符（+）   | 一元运算符，如果操作数在之前不是数值，试图将其转换为数值。   | `console.log( +'3' ); // 3` `console.log( '3' ); // '3'` `console.log(+true); // 1` |
| 指数运算符（**）  | 计算底数（`base`）的指数（`exponent`）次方，表示为 `base^exponent`。 | `2 ** 3` 返回 `8`。`10 ** -1` 返回 `0.1`。                   |

### [位运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#位运算符)

| Operator                                                     | Usage     | Description                                                  |
| :----------------------------------------------------------- | :-------- | :----------------------------------------------------------- |
| 按位与 [AND](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#bitwise_and) | `a & b`   | 在 a,b 的位表示中，每一个对应的位都为 1 则返回 1，否则返回 0. |
| 按位或 [OR](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#bitwise_or) | `a | b`   | 在 a,b 的位表示中，每一个对应的位，只要有一个为 1 则返回 1，否则返回 0. |
| 按位异或 [XOR](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#bitwise_xor) | `a ^ b`   | 在 a,b 的位表示中，每一个对应的位，两个不相同则返回 1，相同则返回 0. |
| 按位非 [NOT](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#bitwise_not) | `~ a`     | 反转被操作数的位。                                           |
| 左移 [shift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#left_shift) | `a << b`  | 将 a 的二进制串向左移动 b 位，右边移入 0.                    |
| 算术右移                                                     | `a >> b`  | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位。(译注：算术右移左边空出的位是根据最高位是 0 和 1 来进行填充的) |
| 无符号右移 (左边空出位用 0 填充)                             | `a >>> b` | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位，并把左边空出的位都填充为 0 |

#### 位逻辑运算符

概念上来讲，位逻辑运算符工作流程如下：

- 操作数被转换为 32bit 整數，以位序列（0 和 1 组成）表示。若超過 32bits，則取低位 32bit，如下所示：

```
  Before: 11100110111110100000000000000110000000000001
  After:              10100000000000000110000000000001
```

- 第一个操作数的每一位都与第二个操作数的对应位组对：第一位对应第一位，第二位对应第二位，以此类推。
- 运算符被应用到每一对"位"上，最终的运算结果由每一对“位”的运算结果组合起来。

#### 移位运算符

| 运算符             | 描述                                                         | 示例                                                         |
| :----------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `<<`（左移位）     | 将第一个操作数向左移动指定数量的位。左边移出位被抛弃。左边移出的几位被丢弃。右边多出的空位由 0 补齐。 | `9<<2` 产生 36，因为 1001 移位 2 比特向左变为 100100，它是 36。 |
| `>>`（带符号右移） | 将第一个操作数向右移动指定数量的位。右边移出位被抛弃。左边多出的空位由原值的最左边数字补齐。 | `9>>2` 产生 2，因为 1001 移位 2 位向右变为 10，其是 2。同样，`-9>>2` 产生 -3，由于符号被保留。 |
| `>>>`（补零右移）  | 将第一个操作数向右移动指定数量的位。右边移出位被抛弃。左边多出的空位由 0 补齐。 | `19>>>2`产生 4，因为 10011 移位 2 位向右变为 100，它是 4。对非负数值，补零右移和带符号右移产生相同结果。 |

### [逻辑运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#逻辑运算符)

| 运算符                                                       | 范例             | 描述                                                         |
| :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- |
| [逻辑与](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#logical_and) `(&&`) | `expr1 && expr2` | (逻辑与) 如果 expr1 能被转换为 false，那么返回 expr1；否则，返回`expr2`。因此`，&&`用于布尔值时，当操作数都为 true 时返回 true；否则返回 false. |
| [逻辑或](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#logical_or) (`||`) | `expr1 || expr2` | (逻辑或) 如果 expr1 能被转换为 true，那么返回 expr1；否则，返回`expr2`。因此，\|\| 用于布尔值时，当任何一个操作数为 true 则返回 true；如果操作数都是 false 则返回 false。 |
| [逻辑非](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#logical_not) `(!)` | `!expr`          | (逻辑非) 如果操作数能够转换为 true 则返回 false；否则返回 true。 |

能被转换为`false`的值有`null`, `0`, `NaN`, 空字符串 ("") 和`undefined`。（译者注：也可以称作”falsy“）

#### 短路求值

作为逻辑表达式进行求值是从左到右，它们是为可能的“短路”的出现而使用以下规则进行测试：

- `false` && *anything* // 被短路求值为 false
- `true` || *anything* // 被短路求值为 true

逻辑的规则，保证这些评估是总是正确的。请注意，上述表达式的`anything`部分不会被求值，所以这样做不会产生任何副作用。

### [字符串运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#字符串运算符)

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。简写操作符 `+=` 也可以用来拼接字符串。

### [条件（三元）运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#条件（三元）运算符)

[条件运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)是 JavaScript 中唯一需要三个操作数的运算符。运算的结果根据给定条件在两个值中取其一。语法为：

```javascript
条件 ? 值 1 : 值 2
```

如果`条件`为真，则结果取`值 1`。否则为`值 2`。你能够在任何允许使用标准运算符的地方使用条件运算符。

### [逗号操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#逗号操作符)

[逗号操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)（`,`）对两个操作数进行求值并返回最终操作数的值。它常常用在 `for` 循环中，在每次循环时对多个变量进行更新。

例如，假如 `a` 是一个二维数组，每个维度各有 10 个元素，以下代码利用逗号操作符来同时改变两个变量的值。这段代码的功能是打印出该二维数组的对角线元素的值：

```javascript
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```

### [一元操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#一元操作符)

一元操作符仅对应一个操作数。

#### `delete`

[`delete`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)操作符，删除一个对象的属性或者一个数组中某一个键值。语法如下：

```javascript
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement
```

`objectName`是一个对象名，`property` 是一个已经存在的属性，`index`是数组中的一个已经存在的键值的索引值。

第三行的形式只在[`with`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with)声明的状态下是合法的，从对象中删除一个属性。

你能使用 `delete` 删除各种各样的隐式声明，但是被`var`声明的除外。

如果 `delete` 操作成功，属性或者元素会变成 `undefined`。如果 `delete`可行会返回`true`，如果不成功返回`false`。

##### 删除数组元素

删除数组中的元素时，数组的长度是不变的，例如删除 `a[3]`, `a[4]`，`a[4]` 和 `a[3]` 仍然存在变成了 `undefined`。

`delete` 删除数组中的一个元素，这个元素就不在数组中了。例如，`trees[3]`被删除，`trees[3]` 仍然可寻址并返回 `undefined`。

#### `typeof`

[typeof 操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 可通过下面 2 种方式使用：

```javascript
typeof operand;
typeof (operand);
```

typeof 操作符返回一个表示 operand 类型的字符串值。operand 可为字符串、变量、关键词或对象，其类型将被返回。operand 两侧的括号为可选。

#### `void`

void 运算符运用方法如下：

```javascript
void expression;
void (expression);
```

void 运算符，表明一个运算没有返回值。expression 是 javaScript 表达式，括号中的表达式是一个可选项，当然使用该方式是一种好的形式。

你可以使用 void 运算符指明一个超文本链接。该表达式是有效的，但是并不会在当前文档中进行加载。

### [关系运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#关系运算符)

关系运算符对操作数进行比较，根据比较结果真或假，返回相应的布尔值。

#### `in`

[`in`操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)，如果所指定的**属性**确实存在于所指定的对象中，则会返回`true`，语法如下：

```javascript
propNameOrNumber in objectName;
```

在这里 `propNameOrNumber`可以是一个代表着属性名的字符串或者是一个代表着数组索引的数值表达式，而`objectName`则是一个对象名。

#### `instanceof`

如果所判别的对象确实是所指定的类型，则返回`true`。其语法如下：

```javascript
objectName instanceof objectType;
```

`objectName` 是需要做判别的对象的名称，而`objectType`是假定的对象的类型，例如[`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)或 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array).

当你需要确认一个对象在运行时的类型时，可使用`instanceof`. 例如，需要 catch 异常时，你可以针对抛出异常的类型，来做不同的异常处理。

### [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#运算符优先级)

| Operator type          | Individual operators                     |
| :--------------------- | :--------------------------------------- |
| member                 | `. []`                                   |
| call / create instance | `() new`                                 |
| negation/increment     | `! ~ - + ++ -- typeof void delete`       |
| multiply/divide        | `* / %`                                  |
| addition/subtraction   | `+ -`                                    |
| bitwise shift          | `<< >> >>>`                              |
| relational             | `< <= > >= in instanceof`                |
| equality               | `== != === !==`                          |
| bitwise-and            | `&`                                      |
| bitwise-xor            | `^`                                      |
| bitwise-or             | `|`                                      |
| logical-and            | `&&`                                     |
| logical-or             | `||`                                     |
| conditional            | `?:`                                     |
| assignment             | `= += -= *= /= %= <<= >>= >>>= &= ^= |=` |
| comma                  | `,`                                      |

## [表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#表达式)

表达式是一组代码的集合，它返回一个值。（译注：定义比较不好理解，看下面的举例就很好懂了。）

每一个合法的表达式都能计算成某个值，但从概念上讲，有两种类型的表达式：有副作用的（比如赋值）和单纯计算求值的。

表达式 x=7 是第一类型的一个例子。该表达式使用=运算符将值 7 赋予变量 x。这个表达式自己的值等于 7。

代码 3 + 4 是第二个表达式类型的一个例子。该表达式使用 + 运算符把 3 和 4 加到一起但并没有把结果（7）赋值给一个变量。

JavaScript 有以下表达式类型：

- 算数：得出一个数字，例如 3.14159。（通常使用[算数运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#算术运算符)）
- 字符串：得出一个字符串，例如，"Fred" 或 "234"。（通常使用[字符串运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#字符串运算符)。）
- 逻辑值：得出 true 或者 false。（经常涉及到[逻辑运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#逻辑运算符)。）
- 基本表达式：javascript 中基本的关键字和一般表达式。
- 左值表达式：分配给左值。

### [基本表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#基本表达式)

#### `this`

[`this`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)关键字被用于指代当前的对象，通常，`this`指代的是方法中正在被调用的对象。用法如下：

```javascript
this["propertyName"];
this.propertyName;
```

假设一个用于验证对象`value`属性的`validate`函数，传参有对象，最高值和最低值。

```javascript
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) console.log("Invalid Value!");
}
```

你可以在任何表单元素的`onchange`事件处理中调用`validat`函数，用`this`来指代当前的表单元素，用例如下：

```javascript
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

#### 分组操作符

分组操作符（）控制了表达式中计算的优先级。举例来说，你可以改变先乘除后加减的顺序，转而先计算加法。

### [左值表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#左值表达式)

左值可以作为赋值的目标。

#### `new`

你可以使用[`new` 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)创建一个自定义类型或者是预置类型的对象实例。用法如下：

```javascript
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### super

[super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 关键字可以用来调用一个对象父类的函数，它在用来调用一个[类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)的父类的构造函数时非常有用，比如：

```javascript
super([arguments]); // calls the parent constructor. super.functionOnParent([arguments]);
```