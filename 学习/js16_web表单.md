## [什么是 Web 表单？](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form#what_are_web_forms)

**Web 表单**是用户与 Web 站点或应用程序之间交互的主要点之一。 表单允许用户输入数据，这些数据通常发送到 Web 服务器进行处理和存储（请参阅本模块后面的 [发送表单数据](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)），或在客户端用于以某种方式立即更新界面（例如，将另一个项目添加到列表，或者显示或隐藏 UI 功能）。

Web 表单的 HTML 由一个或多个**表单控件**（有时称为**小部件**）以及一些有助于构建整个表单的其他元素组成 — 它们通常称为 **HTML 表单**。 这些控件可以是单行或多行文本字段、下拉框、按钮、复选框或单选按钮，并且大多数是使用 [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素创建的，尽管还有一些其他元素需要了解。

还可以对表单控件进行编程，以强制输入特定格式或值（**表单验证**），并与文本标签配对，向视力正常和视障用户描述其用途。

## [将表单数据发送到 Web 服务器](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form#sending_form_data_to_your_web_server)

最后一部分，也许是最棘手的，是在服务器端处理表单数据。 [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) 元素定义了将数据发送到何处以及如何，这要归功于 [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form#action) 和 [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form#method) 属性。

我们为每个表单控件提供了一个属性。 这些名称在客户端和服务器端都很重要;它们告诉浏览器为每条数据指定哪个名称，在服务器端，它们让服务器按名称处理每条数据。 表单数据将作为名称/值对发送到服务器。`name`

要在表单中命名数据，您需要在每个将收集特定数据的表单小部件上使用该属性。 让我们再次看一下我们的一些表单代码：`name`

# 如何构建 Web 表单

## [feildset 和 legend 元素](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_fieldset_and_legend_elements)

[`feildset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset) 元素是创建具有相同用途的 widget 组的便捷方法，用于样式和语义目的。您可以通过在开始 [`feildset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset) 标签下方包含 [`legend`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend) 元素来标记 [`feildset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset)。[`<图例>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend)的文本内容正式描述了它包含在其中的 [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset) 的用途。

许多辅助技术将使用 [`legend`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend) 元素，就好像它是相应 [`feildset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset) 元素内每个控件的标签的一部分一样。

## [文本输入字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#text_input_fields)

文本[`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 字段是最基本的表单小部件。它们是让用户输入任何类型数据的一种非常方便的方式，我们已经看到了一些简单的例子。

**注意：**HTML 表单文本字段是简单的纯文本输入控件。这意味着您不能使用它们来执行富文本编辑（粗体、斜体等）。您将遇到的所有富文本编辑器都是使用 HTML、CSS 和 JavaScript 创建的自定义小部件。

所有基本文本控件都共享一些常见行为：

- 它们可以标记为[`只读`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#readonly)（用户无法修改输入值，但仍与其余表单数据一起发送）或[`禁用`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#disabled)（输入值无法修改，并且永远不会与其余表单数据一起发送）。
- 他们可以有一个[`占位符`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#placeholder);这是文本输入框内显示的文本，应该用于简要描述该框的用途。
- 它们可以在 [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/size) （框的物理大小） 和 [`maxlength`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/maxlength) （可以输入到框中的最大字符数） 中受到限制。
- 他们可以从拼写检查中受益（使用 [`spellcheck`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck) 属性）。

**注意：**[`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素在 HTML 元素中是唯一的，因为它可以采用多种形式，具体取决于其 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性值。它用于创建大多数类型的表单小部件，包括单行文本字段、时间和日期控件、没有文本输入的控件（如复选框、单选按钮和颜色选取器）以及按钮。

### [单行文本字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#single_line_text_fields)

使用[`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)元素创建单行文本字段，其 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性值设置为 `type="color"`，或者完全省略 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性（ 是默认值）。如果您为 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性指定的值对浏览器未知（例如，如果您指定并且浏览器不支持本机颜色选取器），则此属性的值也是回退值。

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

单行文本字段只有一个 true constraint：如果键入带换行符的文本，则浏览器会在将数据发送到服务器之前删除这些换行符。

下面的屏幕截图显示了处于 default、focused 和 disabled 状态的文本输入。大多数浏览器使用控件周围的焦点环来指示焦点状态，而使用灰色文本或淡化/半不透明控件来指示禁用状态。

![macOS 上 Chrome 中默认、聚焦和禁用状态文本输入的屏幕截图](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls/disabled.png)

本文档中使用的屏幕截图是在 macOS 上的 Chrome 浏览器中拍摄的。这些字段/按钮在不同的浏览器中可能略有不同，但基本的突出显示技术仍然相似。

#### 密码字段

原始输入类型之一是文本字段类型：`password`

```html
<input type="password" id="pwd" name="pwd" />
```

以下屏幕截图显示了 Password input（密码输入）字段，其中每个输入字符都显示为一个点。

![macOS 上 chrome 115 中的密码字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls/password.png)

该值不会向输入的文本添加任何特殊约束，但它确实会隐藏输入到字段中的值（例如，使用点或星号），因此其他人无法轻松读取。

### [隐藏内容](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#hidden_content)

另一个原始文本控件是 input 类型。这用于创建对用户不可见的表单控件，但在提交后仍会与其他表单数据一起发送到服务器 — 例如，您可能希望向服务器提交一个时间戳，说明下订单的时间。由于它是隐藏的，因此用户无法看到或有意编辑该值，因此它永远不会获得焦点，屏幕阅读器也不会注意到它。`hidden`

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

如果创建此类元素，则需要设置其 and 属性。该值可以通过 JavaScript 动态设置。input 类型不应具有关联的标签。

### [复选框](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#checkbox)

使用 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素创建一个复选框，并将 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性设置为 value [复选框](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox)。

```javascript
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

相关的复选框项应使用相同的 [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) 属性。包含 [`checked`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 属性会在页面加载时自动选中复选框。单击复选框或其关联的标签可打开和关闭复选框。

```javascript
<fieldset>
  <legend>Choose all the vegetables you like to eat</legend>
  <ul>
    <li>
      <label for="carrots">Carrots</label>
      <input
        type="checkbox"
        id="carrots"
        name="vegetable"
        value="carrots"
        checked />
    </li>
    <li>
      <label for="peas">Peas</label>
      <input type="checkbox" id="peas" name="vegetable" value="peas" />
    </li>
    <li>
      <label for="cabbage">Cabbage</label>
      <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
    </li>
  </ul>
</fieldset>
```

以下屏幕截图显示了 default、focused 和 disabled 状态下的复选框。默认和禁用状态下的复选框显示为选中状态，而在聚焦状态下，复选框处于未选中状态，其周围有焦点环。

![macOS 上 chrome 115 中的默认、聚焦和禁用复选框](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls/checkboxes.png)

**注意：**任何具有 [`checked`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 属性 on load 的复选框和单选按钮都与 [`:d efault`](https://developer.mozilla.org/en-US/docs/Web/CSS/:default) 伪类匹配，即使它们不再被选中。当前检查的任何都与 [`：checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) 伪类匹配。

由于复选框的开关性质，复选框被视为切换按钮，许多开发人员和设计人员扩展了默认复选框样式，以创建看起来像切换开关的按钮。您可以[在此处查看实际示例](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/)（另请参阅[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)）。

### [单选按钮](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#radio_button)

使用 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素创建一个单选按钮，其 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性设置为`radio`值 ：

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

多个单选按钮可以绑定在一起。如果它们的 [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) 属性值相同，则它们将被视为位于同一组按钮中。

一次只能选中给定组中的一个按钮;这意味着，当其中一个被选中时，所有其他的都将自动被取消选中。

发送表单时，仅发送选中的单选按钮的值。如果未选中任何一个，则整个单选按钮池被视为处于未知状态，并且不会随表单发送任何值。一旦选中了同名按钮组中的单选按钮之一，用户就无法在不重置表单的情况下取消选中所有按钮。

```html
<fieldset>
  <legend>What is your favorite meal?</legend>
  <ul>
    <li>
      <label for="soup">Soup</label>
      <input type="radio" id="soup" name="meal" value="soup" checked />
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry" />
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza" />
    </li>
  </ul>
</fieldset>
```

以下屏幕截图显示了处于选中状态的默认和禁用的单选按钮，以及处于未选中状态的聚焦单选按钮。

![macOS 上 chrome 115 中的默认、聚焦和禁用的单选按钮](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls/radios.png)

## [实际按钮](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)

尽管单选按钮名称如此，但它实际上并不是一个按钮;让我们继续看看实际的按钮！有三种输入类型可生成按钮：

- [`submit`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#submit_2)

  将表单数据发送到服务器。

- [`reset`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#reset_2)

  将所有表单 Widget 重置为其默认值。

- [`button`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#button)

  没有自动效果但可以使用 JavaScript 代码自定义的按钮。

```html
<p>Using &lt;input></p>
<p>
  <input type="submit" value="Submit this form" />
  <input type="reset" value="Reset this form" />
  <input type="button" value="Do Nothing without JavaScript" />
</p>
<p>Using &lt;button></p>
<p>
  <button type="submit">Submit this form</button>
  <button type="reset">Reset this form</button>
  <button type="button">Do Nothing without JavaScript</button>
</p>
```

**注意：**input 类型也呈现为 button。我们稍后也会介绍这一点。`

您可以在下面找到每种按钮类型的示例以及等效类型。

### [提交](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#submit)

```html
<button type="submit">This is a <strong>submit button</strong></button>

<input type="submit" value="This is a submit button" />
```

### [重置](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#reset)

```html
<button type="reset">This is a <strong>reset button</strong></button>

<input type="reset" value="This is a reset button" />
```

### [匿名](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#anonymous)

```html
<button type="button">This is an <strong>anonymous button</strong></button>

<input type="button" value="This is an anonymous button" />
```

以下屏幕截图显示了处于 default、focused 和 disabled 状态的按钮。在聚焦状态下，按钮周围有一个聚焦环，在禁用状态下，按钮灰显。

![macOS 上 chrome 115 中的默认、焦点和禁用按钮状态](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls/buttons.png)

### [“图像”按钮](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#image_button)

**图像按钮**控件的呈现方式与 [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) 元素完全相同，不同之处在于，当用户单击它时，它的行为类似于提交按钮。

图像按钮是使用 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素创建的，其 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性设置为值 。此元素支持与 [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) 元素完全相同的属性集，以及其他表单按钮支持的所有属性。

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

如果使用图像按钮提交表单，则此控件不会提交其值，而是提交单击图像的 X 和 Y 坐标（坐标是相对于图像的，这意味着图像的左上角表示坐标 （0， 0））。坐标以两个键/值对的形式发送：

- X 值键是 [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) 属性的值，后跟字符串 “*.x*”。
- Y 值键是 [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) 属性的值，后跟字符串 “*.y*”。

因此，例如，当您单击坐标 （123， 456） 处的图像并通过该方法提交时，您将看到附加到 URL 的值，如下所示：`get`

```http
http://foo.com?pos.x=123&pos.y=456
```

这是构建 “热图” 的一种非常方便的方法。如何发送和检索这些值 在 [发送表单数据](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) 一文中详细介绍。

## [文件选取器](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#file_picker)

在早期 HTML 中，还有最后一种类型：文件输入类型。表单能够将文件发送到服务器（此特定作也在[发送表单数据](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)一文中详细介绍）。文件选取器 Widget 可用于选择要发送的一个或多个文件。

要创建[文件选取器 Widget](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)，请使用 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素，并将其 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性设置为`file` 。可以使用 [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#accept) 属性来约束接受的文件类型。此外，如果要让用户选择多个文件，可以通过添加 [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#multiple) 属性来实现。

在此示例中，将创建一个请求图形图像文件的文件选取器。在这种情况下，允许用户选择多个文件。

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

在某些移动设备上，文件选取器可以通过向属性添加捕获信息来访问设备的摄像头和麦克风直接捕获的照片、视频和音频，如下所示：`accept`

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

以下屏幕截图显示了未选择文件时处于 default、focus 和 disabled 状态的文件选取器小组件。

![macOS 上 chrome 115 中处于默认、焦点和禁用状态的文件选取器小部件](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls/filepickers.png)

## [常见属性](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#common_attributes)

| 属性名称    | 默认值 | 描述                                                         |
| :---------- | :----- | :----------------------------------------------------------- |
| `autofocus` | 假     | 此 Boolean 属性允许您指定元素在页面加载时应自动具有输入焦点。 文档中只有一个与表单关联的元素可以指定此属性。 |
| `disabled`  | 假     | 此 Boolean 属性指示用户无法与元素交互。 如果未指定此属性，则元素将从包含元素继承其设置，例如 [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset); 如果没有设置了属性的 Containing 元素，则启用该元素。`disabled` |
| `form`      |        | 与小组件关联的元素，如果它未嵌套在该表单中，则使用该元素。 该属性的值必须是同一文档中 [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) 元素的属性。 这允许您将表单控件与它所在的表单相关联，即使它位于不同的表单元素内。`<form>``id` |
| `name`      |        | 元素的名称;这与表单数据一起提交。                            |
| `value`     |        | 元素的初始值。                                               |

## [电子邮件地址字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#email_address_field)

此类型的字段是使用 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性的值设置的：`email`

HTML格式复制到剪贴板玩

```html
<input type="email" id="email" name="email" />
```

使用此[`类型`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type)时，该值必须是电子邮件地址才能有效。任何其他内容都会导致浏览器在提交表单时显示错误。您可以在下面的屏幕截图中看到这一点。

![显示消息“请输入电子邮件地址”的电子邮件输入无效。](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types/email_address_invalid.png)

您可以将 [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/multiple) 属性与 input 类型结合使用，以允许在同一输入中输入多个以逗号分隔的电子邮件地址：`email`

```html
<input type="email" id="email" name="email" multiple />
```

在某些设备上（尤其是智能手机等带有动态键盘的触摸设备）上，可能会显示更适合输入电子邮件地址（包括密钥）的不同虚拟键盘：`@`

![Firefox for Android 电子邮件键盘，默认显示 at 号。](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types/fx-android-email-type-keyboard.jpg)

### [客户端验证](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#client-side_validation)

正如你在上面看到的，与其他较新的类型一起，提供了内置的*客户端*错误验证，由浏览器在数据发送到服务器之前执行。*它是*指导用户准确填写表单的有用帮助，并且可以节省时间：立即知道您的数据不正确非常有用，而不必等待往返服务器。`email``input`

但它*不应被视为*详尽的安全措施！您的应用程序应始终对*服务器端*和客户端上的任何表单提交数据执行安全检查，因为客户端验证太容易关闭，因此恶意用户仍然可以轻松地将不良数据发送到您的服务器。阅读[网站安全](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)以了解*可能*发生的情况;实现服务器端验证在某种程度上超出了本模块的范围，但您应该记住这一点。

请注意，根据默认提供的约束，这是一个有效的电子邮件地址。这是因为默认情况下，输入类型允许 Intranet 电子邮件地址。要实现不同的验证行为，可以使用 [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern) 属性。您还可以自定义错误消息。我们将在后面的 [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) 一文中讨论如何使用这些功能。`a@b``email`

**注意：**如果输入的数据不是电子邮件地址，则 [`：invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) 伪类将匹配，并且 [`validityState.typeMismatch`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/typeMismatch) 属性将返回 。`true`

## [搜索字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field)

搜索字段旨在用于在页面和应用程序上创建搜索框。此类型的字段是使用 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性的值设置的：`search`

```html
<input type="search" id="search" name="search" />
```

字段和字段之间的主要区别在于浏览器如何设置其外观的样式。在某些浏览器中，字段以圆角呈现。在某些浏览器中，会显示一个“（X）”清除图标，单击该图标时将清除字段中的任何值。此清除图标仅在字段具有值时显示，并且除 Safari 外，它仅在聚焦字段时显示。此外，在具有动态键盘的设备上，键盘的 Enter 键可能会显示“**search**”或显示放大镜图标。`text``search``search`

另一个值得注意的功能是，字段的值可以自动保存并重新使用，以便在同一网站的多个页面上提供自动完成功能;这在大多数现代浏览器中往往是自动发生的。`search`

## [Phone number 字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#phone_number_field)

```html
<input type="tel" id="tel" name="tel" />
```

当通过带有动态键盘的触摸设备访问时，大多数设备在遇到数字键盘时都会显示数字小键盘，这意味着只要数字小键盘有用，这种类型就很有用，而不仅仅是用于电话号码。``

-![Firefox for Android 电子邮件键盘，默认显示 & 符号。](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types/fx-android-tel-type-keyboard.jpg)

由于世界各地的电话号码格式多种多样，因此此类字段不会对用户输入的值强制执行任何约束（这意味着它可能包括字母等）。

正如我们之前提到的，[`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern) 属性可用于强制执行约束，您将在 [客户端表单验证](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) 中了解这一点。

## [URL 字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#url_field)

可以使用 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性的值创建用于输入 URL 的特殊类型的字段：`url`

```html
<input type="url" id="url" name="url" />
```

它向字段添加特殊的验证约束。如果未输入协议（例如 ），或者 URL 格式不正确，则浏览器将报告错误。在具有动态键盘的设备上，默认键盘通常会将部分或全部冒号、句点和正斜杠显示为默认键。`http:`

**注意：**仅仅因为 URL 格式正确并不一定意味着它引用了实际存在的位置！

## [数值字段](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#numeric_field)

可以使用 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) [`类型`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type)创建用于输入数字的控件。此控件看起来像一个文本字段，但只允许浮点数，并且通常以微调器的形式提供按钮来增加和减少控件的值。在具有动态键盘的设备上，通常会显示数字键盘。`number`

```html
<input type="number" id="number" name="number" />
```

此示例创建一个数字控件，其有效值限制为介于 和 之间的奇数值。增加和减少按钮将值更改 ，从值开始。

```html
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

此示例创建一个数字控件，其值限制为介于 和 之间（含）之间的任何值，并且其 increase 和 decrease 按钮会将其值更改 。

```html
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

当有效值的范围受到限制（例如，人的年龄或身高）时，input 类型是有意义的。如果范围太大，增量增加没有意义（例如美国邮政编码，范围从 到 ），则类型可能是更好的选择;它提供数字小键盘，同时放弃数字的微调器 UI 功能。`number``00001``99999``tel`

## [滑块控件](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#slider_controls)

选择数字的另一种方法是使用**滑块**。您经常在购物网站等网站上看到这些内容，您希望设置最高房产价格以进行筛选。

在使用方面，滑块不如文本字段准确。因此，它们用于选择其*精确*值不一定重要的数字。

使用 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 创建滑块，其 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性设置为值 。滑块滑块可以通过鼠标或触摸或使用键盘的箭头进行移动。`range`

正确配置滑块很重要。为此，强烈建议您设置 [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/min)、[`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/max) 和 [`step`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/step) 属性，它们分别设置 minimum、maximum 和 increment 值。

```html
<label for="price">Choose a maximum house price: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="1000"
  value="250000" />
<output class="price-output" for="price"></output>
```

此示例创建一个 Slider，其值可能介于 和 之间，该 Slider 一次递增/递减 1000。我们使用 attribute 为其指定了默认值 。`50000``500000``250000``value`

滑块的一个问题是它们不提供任何关于当前值是什么的视觉反馈。这就是为什么我们包含一个 [`output`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output) 元素来包含当前值。您可以在任何元素中显示输入值或计算的输出，但很特殊 — 例如 — 它可以采用一个属性，允许您将其与输出值来自的一个或多个元素相关联。``

要实际显示当前值并在其更改时更新它，您必须使用 JavaScript，这可以通过几个语句来完成：

```javascript
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});
```

在这里，我们将对 input 和 the 的引用存储在两个变量中。然后我们立即将 [`的 textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) 设置为输入的当前值。最后，设置事件侦听器以确保每当移动范围滑块时，'s 都会更新为新值。`range``output``output``value``output``textContent`

## [日期和时间选取器](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)

通常，为了在收集日期和时间值时获得良好的用户体验，提供日历选择 UI 非常重要。这些选项使用户能够选择日期，而无需上下文切换到本机日历应用程序，也无需以难以解析的不同格式输入日期。上个千年的最后一分钟可以用以下不同的方式表示：、 、 或 。`1999/12/31``23:59``12/31/99T11:59PM`

HTML 日期控件可用于处理这种特定类型的数据，提供日历小部件并使数据统一。

使用 [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) 元素和 [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#type) 属性的适当值创建日期和时间控件，具体取决于您是希望收集日期和/或时间。下面是一个实时示例：

让我们简要地看一下不同的可用类型。请注意，这些类型的使用非常复杂，尤其是考虑到浏览器支持（见下文）;要了解完整的详细信息，请点击以下链接，访问每种类型的参考页面，包括详细示例。

### [`date`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date)

(年、月和日，没有时间）。

```html
<input type="date" name="date" id="date" />
```

### [`datetime-local`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#datetime-local)

[``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local)创建一个小组件来显示和选择没有特定时区信息的时间日期。

HTML格式复制到剪贴板玩

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

### [`month`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#month)

```html
<input type="month" name="month" id="month" />
```

### [`time`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#time)

```html
<input type="time" name="time" id="time" />
```

### [`week`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#week)

```html
<input type="week" name="week" id="week" />
```

### [Constraining date/time values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#constraining_datetime_values)

All date and time controls can be constrained using the [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/min) and [`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/max) attributes, with further constraining possible via the [`step`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/step) attribute (whose value varies according to input type).

```html
<label for="myDate">When are you available this summer?</label><br />
<input
  type="date"
  name="myDate"
  min="2025-06-01"
  max="2025-08-31"
  step="7"
  id="myDate" />
```

## [颜色选取器控件](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#color_picker_control)

颜色总是有点难以处理。有多种表示方式：RGB 值（十进制或十六进制）、HSL 值、关键字等。

```html
<input type="color" name="color" id="color" />
```

单击颜色控件通常会显示作系统的默认颜色选取功能，供您选择。返回的值始终为小写的 6 值十六进制颜色。