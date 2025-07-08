- ## [HTML 布局元素细节](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content/Structuring_documents#html_布局元素细节)

  理解所有 HTML 区段元素具体含义是很有益处的，这一点将随着个人 web 开发经验的逐渐丰富日趋显现。更多细节请查阅 [HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements)。现在，你只需要理解以下主要元素的意义：

  - [main](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/main) 存放每个页面独有的内容。每个页面上只能用一次 `<main>`，且直接位于 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/body) 中。最好不要把它嵌套进其他元素。
  - [body](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/article) 包围的内容即一篇文章，与页面其他部分无关（比如一篇博文）。
  - [article](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/section) 与 `article` 类似，但 `section` 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 [标题](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) 作为开头；也可以把一篇 `article`分成若干部分并分别置于不同的 `section` 中，也可以把一个区段 `section` 分成若干部分并分别置于不同的 `article` 中，取决于上下文。
  - [aside](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/aside) 包含一些间接信息（术语条目、作者简介、相关链接，等等）。
  - [header](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/header) 是简介形式的内容。如果它是 [body](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/body) 的子元素，那么就是网站的全局页眉。如果它是 [article](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/article) 或[section](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/section) 的子元素，那么它是这些部分特有的页眉（此 `<header>` 非彼[标题](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#添加标题)）。
  - [nav](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/nav) 包含页面主导航功能。其中不应包含二级链接等内容。
  - [footer](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/footer) 包含了页面的页脚部分。

### 段落p中一些标签的使用

- [i](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/i) 被用来传达传统上用斜体表达的意义：外国文字、分类名称、技术术语、思想……
- [b](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/b) 被用来传达传统上用粗体表达的意义：关键字、产品名称、引导句……
- [u](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/u) 被用来传达传统上用下划线表达的意义：专有名词、拼写错误……

#### br：换行元素

`<br>` 可在段落中进行换行；`<br>` 是唯一能够生成多个短行结构（例如邮寄地址或诗歌）的元素。

#### hr：主题性中断元素

`<hr>` 元素在文档中生成一条水平分割线，表示文本中主题的变化（例如话题或场景的改变）。一般就是一条水平的直线。





![简单的页面布局示意图，有页眉、页脚、主内容、侧边栏。](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content/Structuring_documents/site-structure.png)



### **绝对 URL**：

指向由其在 Web 上的绝对位置定义的位置，包括[协议](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)和[域名](https://developer.mozilla.org/zh-CN/docs/Glossary/Domain_name)。像下面的例子，如果 `index.html` 页面上传到了 `projects` 这一个目录。并且 `projects` 目录位于 web 服务站点的根目录，web 站点的域名为 `https://www.example.com`，那么这个页面就可以通过 `https://www.example.com/projects/index.html` 访问（或者通过 `https://www.example.com/projects/` 来访问，因为在没有指定特定的 URL 的情况下，大多数 web 服务器会默认访问加载 `index.html` 这类页面）

不管绝对 URL 在哪里使用，它总是指向确定的相同位置。

### **相对 URL**：

指向与你链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接 `https://www.example.com/projects/index.html` 转到相同目录下的一个 PDF 文件，URL 就是文件名（例如 `project-brief.pdf`），没有其他的信息要求。如果 PDF 文件能够在 `projects` 的子目录 `pdfs` 中访问到，相对路径就是 `pdfs/project-brief.pdf`（对应的绝对 URL 是 `https://www.example.com/projects/pdfs/project-brief.pdf`）

一个相对的 URL 将指向不同的位置，这取决于引用的文件的实际位置——例如，如果我们把 `index.html` 文件从 `projects` 目录移动到 Web 站点的根目录（最高级别，而不是任何目录中），里面的 `pdfs/project-brief.pdf` 相对 URL 将会指向 `https://www.example.com/pdfs/project-brief.pdf`，而不是 `https://www.example.com/projects/pdfs/project-brief.pdf`