## [缓冲](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#缓冲)

有两种类型的缓冲：[`ArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 和 [`SharedArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)。它们都是内存块的低级表示。它们名字中都含有“array”，但是它们与数组并没有太多关系——你不能直接读写它们。相反，缓冲是通用的对象，它们只包含原始数据。为了访问缓冲所表示的内存，你需要使用视图。

缓冲支持以下操作：

- *分配*：创建一个新的缓冲时，会分配一个新的内存块，并且初始化为 `0`。
- *复制*：使用 [`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice) 方法，你可以高效地复制缓冲中的一部分数据，而不需要创建视图来手动复制每一个字节。
- *转移*：使用 [`transfer()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer) 和 [`transferToFixedLength()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength) 方法，可以将内存块的所有权转移给一个新的缓冲对象。若你想要在不同的执行上下文间转移数据，又不想复制，这些方法就很有用。转移后，原始缓冲将不再可用。`SharedArrayBuffer` 不能被转移（因为缓冲已经被所有执行上下文共享）。
- *调整大小*：使用 [`resize()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize) 方法，可以调整内存块的大小（只要不超过预设的 [`maxByteLength`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength) 限制）。`SharedArrayBuffer` 只能[增长](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)，不能缩小。

`ArrayBuffer` 与 `SharedArrayBuffer` 之间的区别是，前者在同一时刻只能所属于单个执行上下文。如果你将 `ArrayBuffer` 传递给另一个执行上下文，它会被*转移*，原始的 `ArrayBuffer` 将不再可用。这确保了同一时刻只有一个执行上下文可以访问内存。`SharedArrayBuffer` 在传递给另一个执行上下文时不会被转移，因此可以被多个执行上下文同时访问。当多个线程同时访问同一内存块时，可能会出现竞争条件，这时候 [`Atomics`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics) 方法就很有用了。

## [视图](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#视图)

目前主要有两种视图：类型化数组视图和 [`DataView`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)。类型化数组提供了[实用方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#实例方法)，可以方便地转换二进制数据。`DataView` 更底层，可以精确控制数据的访问方式。使用这两种视图读写数据的方式是非常不同的。

两种视图都会使 [`ArrayBuffer.isView()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView) 返回 `true`。它们都有以下属性：

- [`buffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#buffer)

  视图所引用的底层缓冲。

- [`byteOffset`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#byteoffset)

  视图相对于缓冲起始位置的偏移量（以字节为单位）。

- [`byteLength`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#bytelength)

  视图的长度（以字节为单位）。

两者的构造函数都接受上述三个分离的参数。类型化数组构造函数还接受 `length` 作为元素数量，而不是字节长度。