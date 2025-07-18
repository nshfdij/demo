# 介绍 CSS 布局

CSS 页面布局技术允许我们拾取网页中的元素，并且控制它们相对正常布局流、周边元素、父容器或者主视口/窗口的位置。在这个模块中将涉及更多关于页面[布局技术](https://developer.mozilla.org/zh-CN/docs/Glossary/Layout_mode)的细节：

- 正常布局流
- [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)属性
- 弹性盒子
- 网格
- 浮动
- 定位
- CSS 表格布局
- 多列布局

每种技术都有它们的用途，各有优缺点，相互辅助。通过理解各个布局方法的设计理念，你能够找到构建你想要的网页需要的布局方案。

## [正常布局流](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#正常布局流)

正常布局流（normal flow）是指在不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式。让我们快速地看一个 HTML 的例子：

htmlCopy to Clipboardplay

```html
<p>I love my cat.</p>

<ul>
  <li>Buy cat food</li>
  <li>Exercise</li>
  <li>Cheer up friend</li>
</ul>

<p>The end!</p>
```

注意，HTML 元素完全按照源码中出现的先后次序显示——第一个段落、无序列表、第二个段落。

出现在另一个元素下面的元素被描述为**块**元素，与出现在另一个元素旁边的**内联元素**不同，内联元素就像段落中的单个单词一样。

**备注：** 块元素内容的布局方向被描述为**块方向**。块方向在英语等具有水平**书写模式**(`writing mode`) 的语言中垂直运行。它可以在任何垂直书写模式的语言中水平运行。对应的**内联方向**是内联内容（如句子）的运行方向。

当你使用 css 创建一个布局时，你正在离开**正常布局流**，但是对于页面上的多数元素，**正常布局流**将完全可以创建你所需要的布局。从一个结构良好的 Html 文档开始是非常重要，因为你可以按照默认的方式来搭建页面，而不是自造车轮。

下列布局技术会覆盖默认的布局行为：

- **[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)** 属性 — 标准的 value，比如`block`, `inline` 或者 `inline-block` 元素在正常布局流中的表现形式 (见 [Types of CSS boxes](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model#types_of_css_boxes)). 接着是全新的布局方式，通过设置`display`的值，比如 [CSS Grid](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids) 和 [Flexbox](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox).
- **浮动**——应用 **[`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)** 值，诸如 `left` 能够让块级元素互相并排成一行，而不是一个堆叠在另一个上面。
- **[`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)** 属性 — 允许你精准设置盒子中的盒子的位置，正常布局流中，默认为 `static` ，使用其他值会引起元素不同的布局方式，例如将元素固定到浏览器视口的左上角。
- **表格布局**— 表格的布局方式可以用在非表格内容上，可以使用`display: table`和相关属性在非表元素上使用。
- **多列布局**— 这个 [Multi-column layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_multicol_layout) 属性可以让块按列布局，比如报纸的内容就是一列一列排布的。

## [display 属性](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#display_属性)

在 css 中实现页面布局的主要方法是设定`display`属性的值。此属性允许我们更改默认的显示方式。正常流中的所有内容都有一个`display`的值，用作元素的默认行为方式。例如，英文段落显示在一个段落的下面，这是因为它们的样式是`display:block`。如果在段落中的某个文本周围创建链接，则该链接将与文本的其余部分保持内联，并且不会打断到新行。这是因为[`a`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/a)元素默认为`display:inline`。

除了可以通过将一些内容从`block`转换为`inline`（反之亦然）来更改默认表示形式之外，还有一些更大的布局方法以`display`值开始。但是，在使用这些属性时，通常需要调用其他属性。在讨论布局时，对我们来说最重要的两个值是 `display: flex` 和 `display: grid`。

## [弹性盒子](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#弹性盒子)

Flexbox 是 CSS 弹性盒子布局模块（[Flexible Box Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout) Module）的缩写，它被专门设计出来用于创建横向或是纵向的一维页面布局。要使用 flexbox，你只需要在想要进行 flex 布局的父元素上应用`display: flex` ，所有直接子元素都将会按照 flex 进行布局。我们来看一个例子。

### [设置 display:flex](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#设置_displayflex)

下面这些 HTML 标记描述了一个 class 为`wrapper`的容器元素，它的内部有三个`<div>`元素。它们在我们的英文文档当中，会默认地作为块元素从上到下进行显示。

现在，当我们把`display: flex`添加到它的父元素时，这三个元素就自动按列进行排列。这是由于它们变成了*flex 项 (flex items)*，按照 flex 容器（也就是它们的父元素）的一些 flex 相关的初值进行 flex 布局：它们整整齐齐排成一行，是因为父元素上`flex-direction`的初值是`row`。它们全都被拉伸至和最高的元素高度相同，是因为父元素上`align-items`属性的初值是`stretch`。这就意味着所有的子元素都会被拉伸到它们的 flex 容器的高度，在这个案例里就是所有 flex 项中最高的一项。所有项目都从容器的开始位置进行排列，排列成一行后，在尾部留下一片空白。

```css
.wrapper {
  display: flex;
}htmlCopy to Clipboardplay
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

### [设置 flex 属性](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#设置_flex_属性)

除了上述可以被应用到 flex 容器的属性以外，还有很多属性可以被应用到 flex 项 (flex items) 上面。这些属性可以改变 flex 项在 flex 布局中占用宽/高的方式，允许它们通过伸缩来适应可用空间。

作为一个简单的例子，我们可以在我们的所有子元素上添加[`flex`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 属性，并赋值为`1`，这会使得所有的子元素都伸展并填充容器，而不是在尾部留下空白，如果有更多空间，那么子元素们就会变得更宽，反之，他们就会变得更窄。除此之外，如果你在 HTML 标记中添加了一个新元素，那么它们也会变得更小，来为新元素创造空间——不管怎样，最终它们会调整自己直到占用相同宽度的空间。

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```



## [Grid 布局](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#grid_布局)

Flexbox 用于设计横向或纵向的布局，而 Grid 布局则被设计用于同时在两个维度上把元素按行和列排列整齐。

### [设置 display: grid](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#设置_display_grid)

同 flex 一样，你可以通过指定 display 的值来转到 grid 布局：`display: grid`。下面的例子使用了与 flex 例子类似的 HTML 标记，描述了一个容器和若干子元素。除了使用`display:grid`，我们还分别使用 [`grid-template-rows`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows) 和 [`grid-template-columns`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns) 两个属性定义了一些行和列的轨道。定义了三个`1fr`的列，还有两个`100px`的行之后，无需再在子元素上指定任何规则，它们自动地排列到了我们创建的格子当中。

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
  <div class="box6">Six</div>
</div>
```

### [在网格内放置元素](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#在网格内放置元素)

一旦你拥有了一个 grid，你也可以显式地将元素摆放在里面，而不是依赖于浏览器进行自动排列。在下面的第二个例子里，我们定义了一个和上面一样的 grid，但是这一次我们只有三个子元素。我们利用 [`grid-column`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column) 和 [`grid-row`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row) 两个属性来指定每一个子元素应该从哪一行/列开始，并在哪一行/列结束。这就能够让子元素在多个行/列上展开。

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

**备注：** 这两个例子只是展示了 grid 布局的冰山一角，要深入了解 grid 布局，请参阅我们的文章[Grid Layout](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids)。

这篇指南的其余部分介绍了其他的布局方式，它们与你的页面的主要布局结构关系不大，但是却能够帮助你实现特殊的操作。同时，只要你理解了每一个布局任务的初衷，你就能够马上意识到哪一种布局更适合你的组件。

## [浮动](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#浮动)

把一个元素“浮动”(float) 起来，会改变该元素本身和在正常布局流（normal flow）中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流 (normal flow) 中移除，这时候其他的周围内容就会在这个被设置浮动 ([`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)) 的元素周围环绕。

[`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 属性有四个可能的值：

- `left` — 将元素浮动到左侧。
- `right` — 将元素浮动到右侧。
- `none` — 默认值，不浮动。
- `inherit` — 继承父元素的浮动属性。

在下面这个例子当中，我们把一个`<div>`元素浮动到左侧，并且给了他一个右侧的[`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)，把文字推开。这给了我们文字环绕着这个`<div>`元素的效果，在现代网页设计当中，这是你唯一需要学会的事情。

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

## [定位技术](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#定位技术)

定位 (positioning) 能够让我们把一个元素从它原本在正常布局流 (normal flow) 中应该在的位置移动到另一个位置。定位 (positioning) 并不是一种用来给你做主要页面布局的方式，它更像是让你去管理和微调页面中的一个特殊项的位置。

有一些非常有用的技术在特定的布局下依赖于[`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)属性。同时，理解定位 (positioning) 也能够帮助你理解正常布局流 (normal flow)，理解把一个元素移出正常布局流 (normal flow) 是怎么一回事。

有五种主要的定位类型需要我们了解：

- **静态定位**（Static positioning）是每个元素默认的属性——它表示“将元素放在文档布局流的默认位置——没有什么特殊的地方”。
- **相对定位**（Relative positioning）允许我们相对于元素在正常的文档流中的位置移动它——包括将两个元素叠放在页面上。这对于微调和精准设计（design pinpointing）非常有用。
- **绝对定位**（Absolute positioning）将元素完全从页面的正常布局流（normal layout flow）中移出，类似将它单独放在一个图层中。我们可以将元素相对于页面的 `<html>` 元素边缘固定，或者相对于该元素的*最近被定位祖先元素*（nearest positioned ancestor element）。绝对定位在创建复杂布局效果时非常有用，例如通过标签显示和隐藏的内容面板或者通过按钮控制滑动到屏幕中的信息面板。
- **固定定位**（Fixed positioning）与绝对定位非常类似，但是它是将一个元素相对浏览器视口固定，而不是相对另外一个元素。这在创建类似在整个页面滚动过程中总是处于屏幕的某个位置的导航菜单时非常有用。
- **粘性定位**（Sticky positioning）是一种新的定位方式，它会让元素先保持和 `position: static` 一样的定位，当它的相对视口位置（offset from the viewport）达到某一个预设值时，它就会像 `position: fixed` 一样定位。

### [简单定位示例](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#简单定位示例)

我们将展示一些示例代码来熟悉这些布局技术。这些示例代码都作用在下面这一个相同的 HTML 上：

```html
<h1>Positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">I am a basic block level element.</p>
<p>I am a basic block level element.</p>
```

该 HTML 将使用以下 CSS 默认样式：

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

渲染效果如下：

### [相对定位](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#相对定位)

相对定位 (relative positioning) 让你能够把一个正常布局流 (normal flow) 中的元素从它的默认位置按坐标进行相对移动。比如将一个图标往下调一点，以便放置文字。我们可以通过下面的规则添加相对定位来实现效果：

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

这里我们给中间段落的[`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 一个 `relative`值——这属性本身不做任何事情，所以我们还添加了[`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)和[`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left)属性。这些可以将受影响的元素向下向右移——这可能看起来和你所期待的相反，但你需要把它看成是左边和顶部的元素被“推开”一定距离，这就导致了它的向下向右移动。

添加此代码将给出以下结果：

```css
.positioned {
  position: relative;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

### [绝对定位](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#绝对定位)

绝对定位用于将元素移出正常布局流 (normal flow)，以坐标的形式相对于它的容器定位到 web 页面的任何位置，以创建复杂的布局。有趣的是，它经常被用于与相对定位和浮动的协同工作。

回到我们最初的非定位示例，我们可以添加以下的 CSS 规则来实现绝对定位：

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

这里我们给我们的中间段一个[`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)的 `absolute`值，并且和前面一样加上 [`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top) 和[`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left) 属性。但是，添加此代码将给出以下结果：

```css
.positioned {
  position: absolute;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

这和之前截然不同！定位元素现在已经与页面布局的其余部分完全分离，并位于页面的顶部。其他两段现在靠在一起，好像之前那个中间段落不存在一样。[`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)和[`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left)属性对绝对位置元素的影响不同于相对位置元素。在这一案例当中，他们没有指定元素相对于原始位置的移动程度。相反，在这一案例当中，它们指定元素应该从页面边界的顶部和左边的距离 (确切地说，是 `<html>`元素的距离)。我们也可以修改作为容器的那个元素（在这里是`<html>`元素）.

### [固定定位](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#固定定位)

固定定位 (fixed positioning) 同绝对定位 (absolute positioning) 一样，将元素从文档流 (document flow) 当中移出了。但是，定位的坐标不会应用于"容器"边框来计算元素的位置，而是会应用于视口 (viewport) 边框。利用这一特性，我们可以轻松搞出一个固定位置的菜单，而不受底下的页面滚动的影响。

在这个例子里面，我们在 HTML 加了三段很长的文本来使得页面可滚动，又加了一个带有`position: fixed`的盒子。

```html
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

<p>Paragraph 1.</p>
<p>Paragraph 2.</p>
<p>Paragraph 3.</p>
```

```css
.positioned {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

### [粘性定位](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#粘性定位)

粘性定位 (sticky positioning) 是最后一种我们能够使用的定位方式。它将默认的静态定位 (static positioning) 和固定定位 (fixed positioning) 相混合。当一个元素被指定了`position: sticky`时，它会在正常布局流中滚动，直到它出现在了我们给它设定的相对于容器的位置，这时候它就会停止随滚动移动，就像它被应用了`position: fixed`一样。

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```



## [表格布局](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#表格布局)

HTML 表格对于显示表格数据是很好的，但是很多年前——在浏览器中支持基本的 CSS 之前——web 开发人员过去也常常使用表格来完成整个网页布局——将它们的页眉、页脚、不同的列等等放在不同的表行和列中。这在当时是有效的，但它有很多问题——表布局是不灵活的，繁重的标记，难以调试和语义上的错误（比如，屏幕阅读器用户在导航表布局方面有问题）。

一个[`table`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/table)标签之所以能够像表格那样展示，是由于 css 默认给[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/table)标签设置了一组 table 布局属性。当这些属性被应用于排列非[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/table)元素时，这种用法被称为“使用 CSS 表格”。

下面这个例子展示了一个这样的用法。使用 CSS 表格来进行布局，在现在这个时间点应该被认为是一种传统方法，它通常会被用于兼容一些不支持 Flexbox 和 Grid 的浏览器。

让我们来看一个例子。首先，创建 HTML 表单的一些简单标记。每个输入元素都有一个标签，我们还在一个段落中包含了一个标题。为了进行布局，每个标签/输入对都封装在[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/div)中。

```html
<form>
  <p>First of all, tell us your name and age.</p>
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" id="age" />
  </div>
</form>
```

现在，我们例子中的 CSS。除了使用 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性外，大多数 CSS 都是相当普通的。 [`forml`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/form), [`div`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/div), [`label`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/label)和[`input`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/input)被告知要分别显示表、表行和表单元——基本上，它们会像 HTML 表格标记一样，导致标签和输入在默认情况下排列整齐。我们所要做的就是添加一些大小、边缘等等，让一切看起来都好一点，我们就完成了。

你会注意到标题段落已经给出了 `display: table-caption;`——这使得它看起来就像一个表格 [`caption`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/caption)——同时出于设计需要，我们通过 `caption-side: bottom;` 告诉标题应该展示在表格的底部，即使这个 [`p`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/p) 标记在源码中是在 `<input>` 之前。这就能让你有一点灵活的弹性。

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```



## [多列布局](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#多列布局)

多列布局模组给了我们 一种把内容按列排序的方式，就像文本在报纸上排列那样。由于在 web 内容里让你的用户在一个列上通过上下滚动来阅读两篇相关的文本是一种非常低效的方式，那么把内容排列成多列可能是一种有用的技术。

要把一个块转变成多列容器 (multicol container)，我们可以使用 [`column-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count)属性来告诉浏览器我们需要多少列，也可以使用[`column-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width)来告诉浏览器以至少某个宽度的尽可能多的列来填充容器。

在下面这个例子中，我们从一个 class 为`container`的`<div>`容器元素里边的一块 HTML 开始。

```html
<div class="container">
  <h1>Multi-column layout</h1>

  <p>Paragraph 1.</p>
  <p>Paragraph 2.</p>
</div>
```

我们指定了该容器的`column-width`为 200 像素，这让浏览器创建了尽可能多的 200 像素的列来填充这一容器。接着他们共同使用剩余的空间来伸展自己的宽度。

```css
.container {
  column-width: 200px;
}
```