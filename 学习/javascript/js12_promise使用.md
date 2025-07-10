## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#描述)

一个 **`Promise`** 是一个代理，它代表一个在创建 promise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：**异步方法不会立即返回最终值，而是返回一个 *promise*，以便在将来的某个时间点提供该值**。

一个 `Promise` 必然处于以下几种状态之一：

- ***待定（pending）*：初始状态，既没有被兑现，也没有被拒绝。**
- ***已兑现（fulfilled）*：意味着操作成功完成。**
- ***已拒绝（rejected）*：意味着操作失败。**

一个待定的 Promise *最终状态*可以是*已兑现*并返回一个值，或者是*已拒绝*并返回一个原因（错误）。当其中任意一种情况发生时，通过 Promise 的 `then` 方法串联的处理程序将被调用。如果绑定相应处理程序时 Promise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。

如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已*敲定（settled）*。

![流程图展示了 Promise 状态在 pending、fulfilled 和 rejected 之间如何通过 then() 和 catch() 处理程序进行转换。一个待定的 Promise 可以变成已兑现或已拒绝的状态。如果 Promise 已经兑现，则会执行“on fulfillment”处理程序（即 then() 方法的第一个参数），并继续执行进一步的异步操作。如果 Promise 被拒绝，则会执行错误处理程序，可以将其作为 then() 方法的第二个参数或 catch() 方法的唯一参数来传递。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

你还会听到使用***已解决*（resolved）**这个术语来描述 Promise——这意味着该 Promise 已经敲定（settled），或为了匹配另一个 Promise 的最终状态而被“锁定（lock-in）”，进一步解决或拒绝它都没有影响。原始 Promise 提案中的 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 文档包含了更多关于 Promise 术语的细节。在口语中，“已解决”的 Promise 通常等价于“已兑现”的 Promise，但是正如“States and fates”所示，已解决的 Promise 也可以是待定或拒绝的。

### [Promise 的链式调用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_的链式调用)

[`Promise.prototype.then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)、[`Promise.prototype.catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 和 [`Promise.prototype.finally()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) 方法用于将进一步的操作与已敲定的 Promise 相关联。由于这些方法返回 Promise，因此它们可以被链式调用。

`.then()` 方法最多接受两个参数；第一个参数是 Promise 兑现时的回调函数，第二个参数是 Promise 拒绝时的回调函数。每个 `.then()` 返回一个新生成的 Promise 对象，这个对象可被用于链式调用。

**备注：** 如果你想要一个可以操作的示例，你可以使用下面的模板来创建任何返回 Promise 的函数：

```javascript
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
```

```javascript
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`得到最终结果：${finalResult}`);
  })
  .catch(failureCallback);
```

**备注：** 箭头函数表达式可以有[隐式返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#函数体)；所以，`() => x` 是 `() => { return x; }` 的简写。

`doSomethingElse` 和 `doThirdThing` 可以返回任何值——如果它们返回的是 Promise，那么会首先等待这个 Promise 的敲定，然后下一个回调函数会接收到它的兑现值，而不是 Promise 本身。在 `then` 回调中始终返回 Promise 是非常重要的，即使 Promise 总是兑现为 `undefined`。如果上一个处理器启动了一个 Promise 但并没有返回它，那么就没有办法再追踪它的敲定状态了，这个 Promise 就是“漂浮”的。

### then() 方法

`then()` 方法用于指定 Promise 状态变为 fulfilled 或 rejected 时的回调函数。

## 实例

```javascript
myPromise.then(
 (result) => {
  *// 处理成功情况*
  console.log('成功:', result);
 },
 (error) => {
  *// 处理失败情况*
  console.error('失败:', error);
 }
);
```



### catch() 方法

`catch()` 方法专门用于处理 Promise 被拒绝的情况。

## 实例

```javascript
myPromise
 .then((result) => {
  console.log('成功:', result);
 })
 .**catch**((error) => {
  console.error('失败:', error);
 });
```



### finally() 方法

`finally()` 方法无论 Promise 最终状态如何都会执行。

## 实例

```javascript
myPromise
 .then((result) => {
  console.log('成功:', result);
 })
 .**catch**((error) => {
  console.error('失败:', error);
 })
 .**finally**(() => {
  console.log('操作完成');
 });
```

## Promise 的链式调用

Promise 的一个强大特性是可以链式调用多个异步操作。

```javascript
doFirstThing()
 .then((result) => doSecondThing(result))
 .then((newResult) => doThirdThing(newResult))
 .then((finalResult) => {
  console.log('最终结果:', finalResult);
 })
 .**catch**((error) => {
  console.error('链中某处出错:', error);
 });
```

------

## Promise 的静态方法

### Promise.all()

等待所有 Promise 完成，或任意一个 Promise 失败。

```javascript
Promise.all([promise1, promise2, promise3])
 .then((results) => {
  *// results 是一个包含所有 Promise 结果的数组*
  console.log(results);
 })
 .**catch**((error) => {
  *// 任一 Promise 失败就会进入这里*
  console.error(error);
 });
```

### Promise.race()

返回最先完成（无论成功或失败）的 Promise 的结果。



```javascript
Promise.race([promise1, promise2, promise3])
 .then((result) => {
  *// 使用最先完成的 Promise 的结果*
  console.log(result);
 })
 .**catch**((error) => {
  *// 如果最先完成的 Promise 是失败的*
  console.error(error);
 });
```



### Promise.resolve() 和 Promise.reject()

快速创建已解决或已拒绝的 Promise。

```js
const resolvedPromise = Promise.resolve('立即解决的值');
const rejectedPromise = Promise.reject('立即拒绝的原因');
```

