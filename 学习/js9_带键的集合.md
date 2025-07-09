## [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#map)

### [Map 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#map_对象)

[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 对象就是一个简单的键/值对映射集合，可以按照数据插入时的顺序遍历所有的元素。

`Map` 对象是键值对的集合。`Map` 中的一个键**只能出现一次**；它在 `Map` 的集合中是独一无二的。`Map` 对象按键值对迭代——一个 [`for...of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环在每次迭代后会返回一个形式为 `[key, value]` 的数组。迭代按*插入顺序*进行，即键值对按 [`set()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/set) 方法首次插入到集合中的顺序（也就是说，当调用 `set()` 时，map 中没有具有相同值的键）进行迭代。

### [Object 和 Map 的比较](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#object_和_map_的比较)

一般地，[object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 会被用于将字符串类型映射到值。`Object` 允许设置键值对、根据键获取值、删除键、检测某个键是否存在。不过，`Map` 对象还有一些优点，可以更好地应用于映射关系表示中。

- `Object` 的键均为[字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)或 [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 类型，在 `Map` 里键可以是任意类型。
- 必须手动计算 `Object` 的大小，但是可以很容易地获取 `Map` 的大小（`size`）。
- `Map` 的遍历遵循元素的插入顺序。
- `Object` 有原型，所以映射中有一些缺省的键。（可以用 `map = Object.create(null)` 回避）。

这三条提示可以帮你决定用 `Map` 还是 `Object`：

- 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用 `Map`。
- 如果需要将原始值存储为键，则使用 `Map`，因为 `Object` 将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
- 如果存在需要对个别元素进行操作的逻辑，使用 `Object`。

### [WeakMap 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_对象)

[`WeakMap`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) 是键/值对的集合，其键必须是对象或[非注册符号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，其值为任意 [JavaScript 类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Data_structures)，并且不会对其键创建强引用。也就是说，一个对象作为键出现在 `WeakMap` 中并不会阻止该对象被垃圾回收。一旦作为键的对象被收集，其在任何 `WeakMap` 中的相应值也会被垃圾收集，只要它们没有在其他地方被强引用。唯一可用作 `WeakMap` 键的原始类型类型是 symbol，更具体地说，是[非注册 symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，因为非注册 symbol 保证是唯一的，并且不能被重新创建。

`WeakMap` API 与 `Map` API 基本相同。不过，`WeakMap` 不允许观察其键的有效性，这也是它不允许枚举的原因。因此，没有任何方法可以获取 `WeakMap` 中的键的列表。如果有的话，该列表将取决于垃圾回收的状态，从而引入非确定性。

但因为 `WeakMap` 不允许观察其键的生命周期，所以其**键是不可枚举的**。没有方法可以获得键的列表。如果有的话，该列表将会依赖于垃圾回收的状态，这引入了不确定性。如果你想要可以获得键的列表，你应该使用 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)。

使用 `WeakMap` 来解决这些问题：

```javascript
const buttons = document.querySelectorAll(".button");
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener("click", () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log("所有按钮被都被点击了！");
    }
  });
});
```

这段代码里，只有能访问 `clicked` 的代码才能知道每个按钮的点击状态，而外部代码就不能修改这些状态。此外，如果任何按钮从 DOM 中删除，那么相应的元数据将自动进行垃圾回收。

## [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#set)

### [Set 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#set_对象)

[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 对象是一组唯一值的集合，可以按照添加顺序来遍历。`Set` 中的值只能出现一次；它在集合 `Set` 中是唯一的。

### [数组和 Set 之间的转换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#数组和_set_之间的转换)

可以使用 [`Array.from`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 或[展开语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)来完成集合到数组的转换。同样，`Set` 的构造函数接受数组作为参数，可以完成从 `Array` 到 `Set` 的转换。

**备注：** `Set` 对象存储*唯一值*，所以数组转换为 Set 时，任何重复值将会被删除！

```javascript
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### [WeakSet 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#weakset_对象)

[`WeakSet`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) 对象是可收集垃圾值的集合，包括对象和[非注册 symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)。`WeakSet` 中的值只能出现一次。它在 `WeakSet` 的集合中是唯一的。

与 [`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 对象的主要区别有：

- 与 `Set` 相反，`WeakSet` 是**对象或 symbol 的集合**，而不是任何类型的任意值的集合。
- `WeakSet` 的*弱*是指集合中的对象是弱引用的。如果 `WeakSet` 中存储的一个对象不存在其他的引用，那么它就会被垃圾回收。这也意味着集合中不再存储当前对象。
- `WeakSet` 不可枚举。

`WeakSet` 对象的用例有限。它们不会泄露内存，因此可以安全地使用 DOM 元素作为键，并将其标记用于跟踪等目的。