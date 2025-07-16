// 全局变量
let notes = [];
let currentNoteId = null;
let isMarkdownMode = false;

// 初始化应用
function init() {
  //加载笔记
  loadNotes();
  //渲染笔记列表
  renderNoteList();
  if (notes.length === 0) {
    // 如果没有笔记，显示空状态
    showEmptyState();
  }
}

// 从 localStorage 加载笔记
function loadNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notes = JSON.parse(savedNotes);
  }
}

// 保存笔记到 localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// 创建新笔记
function createNote() {
  const newNote = {
    id: Date.now(),
    title: "新笔记",
    content: "",
    isMarkdown: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  notes.unshift(newNote);
  saveNotes();
  renderNoteList();
  selectNote(newNote.id);

  const emptyState = document.getElementById("emptyState");
  if (emptyState) {
    emptyState.style.display = "none";
  }

  // 聚焦到标题输入框
  document.getElementById("titleInput").focus();
  document.getElementById("titleInput").select();
}

// 删除当前笔记
function deleteNote() {
  if (currentNoteId && confirm("确定要删除这个笔记吗？")) {
    notes = notes.filter((note) => note.id !== currentNoteId);
    saveNotes();
    renderNoteList();

    if (notes.length > 0) {
      selectNote(notes[0].id);
    } else {
      showEmptyState();
    }
  }
}

// 选择笔记
function selectNote(noteId) {
  // 保存当前笔记的更改
  if (currentNoteId) {
    saveCurrentNote();
  }

  currentNoteId = noteId;
  const note = notes.find((n) => n.id === noteId);

  if (note) {
    hideEmptyState();

    // 更新界面
    document.getElementById("titleInput").value = note.title;
    document.getElementById("contentInput").value = note.content;

    // 设置格式模式
    isMarkdownMode = note.isMarkdown;
    toggleFormat(isMarkdownMode ? "markdown" : "text");

    // 如果是Markdown模式且有内容，显示预览；否则隐藏预览
    const emptyState = document.getElementById("emptyState");
    if (isMarkdownMode) {
      emptyState.style.display = "none";
    }

    // 更新活跃状态
    updateActiveNote(noteId);

    // 启用删除按钮
    document.getElementById("deleteBtn").disabled = false;
  }
}

// 更新当前笔记
function updateNote() {
  if (currentNoteId) {
    const note = notes.find((n) => n.id === currentNoteId);
    if (note) {
      note.title = document.getElementById("titleInput").value || "无标题";
      note.content = document.getElementById("contentInput").value;
      note.isMarkdown = isMarkdownMode;
      note.updatedAt = new Date().toISOString();

      saveNotes();
      renderNoteList();
      updateActiveNote(currentNoteId);
      const emptyState = document.getElementById("emptyState");
      if (note.content.trim() !== "") {
        emptyState.style.display = "none";
      }
      // 如果是 Markdown 模式，更新预览
      if (isMarkdownMode) {
        updateMarkdownPreview();
      }
    }
  }
}

// 保存当前笔记
function saveCurrentNote() {
  if (currentNoteId) {
    updateNote();
  }
}

// 切换格式模式
function toggleFormat(format) {
  const textBtn = document.querySelector(".format-btn:nth-child(1)");
  const markdownBtn = document.querySelector(".format-btn:nth-child(2)");
  const previewArea = document.getElementById("previewArea");
  const contentInput = document.getElementById("contentInput");

  if (format === "markdown") {
    isMarkdownMode = true;
    textBtn.classList.remove("active");
    markdownBtn.classList.add("active");
    previewArea.style.display = "block";
    contentInput.style.flex = "1";
    updateMarkdownPreview();
  } else {
    isMarkdownMode = false;
    markdownBtn.classList.remove("active");
    textBtn.classList.add("active");
    previewArea.style.display = "none";
    contentInput.style.flex = "1";
  }

  // 更新当前笔记的格式设置
  if (currentNoteId) {
    const note = notes.find((n) => n.id === currentNoteId);
    if (note) {
      note.isMarkdown = isMarkdownMode;
      saveNotes();
    }
  }
}

// 更新 Markdown 预览
function updateMarkdownPreview() {
  const content = document.getElementById("contentInput").value;
  const previewArea = document.getElementById("previewArea");
  previewArea.innerHTML = markdownToHtml(content);
}

// 简单的 Markdown 转 HTML
function markdownToHtml(markdown) {
  let html = markdown;

  // 标题
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gm, "<h1>$1</h1>");

  // 粗体和斜体
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // 代码块
  html = html.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // 引用
  html = html.replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>");

  // 列表
  html = html.replace(/^\* (.*$)/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");
  html = html.replace(/^\d+\. (.*$)/gm, "<li>$1</li>");

  // 链接
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank">$1</a>'
  );

  // 段落
  html = html.replace(/\n\n/g, "</p><p>");
  html = "<p>" + html + "</p>";

  // 清理空段落
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p>(<h[1-6]>)/g, "$1");
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, "$1");
  html = html.replace(/<p>(<blockquote>)/g, "$1");
  html = html.replace(/(<\/blockquote>)<\/p>/g, "$1");
  html = html.replace(/<p>(<ul>)/g, "$1");
  html = html.replace(/(<\/ul>)<\/p>/g, "$1");
  html = html.replace(/<p>(<pre>)/g, "$1");
  html = html.replace(/(<\/pre>)<\/p>/g, "$1");

  return html;
}

// 渲染笔记列表
function renderNoteList() {
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  if (notes.length === 0) {
    noteList.innerHTML =
      '<li class="note-item"><div class="note-title">暂无笔记</div><div class="note-preview">点击"新建笔记"开始创建</div></li>';
    return;
  }

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.className = "note-item";
    li.onclick = () => selectNote(note.id);

    const preview =
      note.content.substring(0, 50) + (note.content.length > 50 ? "..." : "");
    const createdDate = new Date(note.createdAt).toLocaleDateString("zh-CN");
    const updatedDate = new Date(note.updatedAt).toLocaleDateString("zh-CN");

    li.innerHTML = `
                    <div class="note-title">${note.title}</div>
                    <div class="note-preview">${preview}</div>
                    <div class="note-date">
                        创建：${createdDate}
                        ${
                          note.updatedAt !== note.createdAt
                            ? `<br>修改：${updatedDate}`
                            : ""
                        }
                        ${
                          note.isMarkdown
                            ? '<span style="color: #4299e1;">📝 Markdown</span>'
                            : ""
                        }
                    </div>
                `;

    noteList.appendChild(li);
  });
}

// 更新活跃笔记样式
function updateActiveNote(noteId) {
  const noteItems = document.querySelectorAll(".note-item");
  noteItems.forEach((item, index) => {
    if (notes[index] && notes[index].id === noteId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// 搜索笔记
// 搜索笔记
function searchNotes(query) {
  // 获取所有笔记项
  const noteItems = document.querySelectorAll(".note-item");
  // 将搜索关键字转换为小写
  const searchQuery = query.toLowerCase();

  // 遍历所有笔记项
  noteItems.forEach((item, index) => {
    // 如果当前笔记存在
    if (notes[index]) {
      // 获取当前笔记
      const note = notes[index];
      // 检查笔记标题和内容是否包含搜索关键字
      const titleMatch = note.title.toLowerCase().includes(searchQuery);
      const contentMatch = note.content.toLowerCase().includes(searchQuery);

      // 如果标题或内容包含搜索关键字或者搜索关键字为空，则显示笔记项
      if (titleMatch || contentMatch || searchQuery === "") {
        item.style.display = "block";

        // 高亮匹配的文字
        if (searchQuery) {
          // 获取笔记标题和预览元素
          const titleElement = item.querySelector(".note-title");
          const previewElement = item.querySelector(".note-preview");

          // 将匹配的文字高亮显示
          titleElement.innerHTML = highlightText(note.title, searchQuery);
          // 获取笔记内容的前50个字符，如果超过50个字符，则加上省略号
          const preview =
            note.content.substring(0, 50) +
            (note.content.length > 50 ? "..." : "");
          // 将匹配的文字高亮显示
          previewElement.innerHTML = highlightText(preview, searchQuery);
        } else {
          // 恢复原始文本
          const titleElement = item.querySelector(".note-title");
          const previewElement = item.querySelector(".note-preview");

          // 将笔记标题和预览元素恢复为原始文本
          titleElement.textContent = note.title;
          const preview =
            note.content.substring(0, 50) +
            (note.content.length > 50 ? "..." : "");
          previewElement.textContent = preview;
        }
      } else {
        // 否则隐藏笔记项
        item.style.display = "none";
      }
    }
  });
}

// 高亮搜索文本
function highlightText(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<mark style="background: yellow;">$1</mark>');
}

// 导出笔记
function exportNotes() {
  if (notes.length === 0) {
    alert("暂无笔记可导出！");
    return;
  }

  const exportData = {
    exportDate: new Date().toISOString(),
    totalNotes: notes.length,
    notes: notes.map((note) => ({
      title: note.title,
      content: note.content,
      isMarkdown: note.isMarkdown,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    })),
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(dataBlob);
  link.download = `notes_backup_${new Date().toISOString().split("T")[0]}.json`;
  link.click();

  URL.revokeObjectURL(link.href);
}

// 显示空状态
function showEmptyState() {
  document.getElementById("editorContent").style.display = "none";
  document.getElementById("emptyState").style.display = "block";
  document.getElementById("deleteBtn").disabled = true;
  currentNoteId = null;
}

// 隐藏空状态
function hideEmptyState() {
  document.getElementById("editorContent").style.display = "block";
  document.getElementById("emptyState").style.display = "none";
}

// 键盘快捷键
document.addEventListener("keydown", function (e) {
  // Ctrl/Cmd + N: 新建笔记
  if ((e.ctrlKey || e.metaKey) && e.key === "n") {
    e.preventDefault();
    createNote();
  }

  // Ctrl/Cmd + S: 保存笔记
  if ((e.ctrlKey || e.metaKey) && e.key === "s") {
    e.preventDefault();
    saveCurrentNote();

    // 显示保存提示
    const saveIndicator = document.createElement("div");
    saveIndicator.textContent = "已保存";
    saveIndicator.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #48bb78;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    z-index: 1000;
                `;
    document.body.appendChild(saveIndicator);

    setTimeout(() => {
      document.body.removeChild(saveIndicator);
    }, 2000);
  }

  // Delete: 删除笔记
  if (
    e.key === "Delete" &&
    currentNoteId &&
    !document.getElementById("titleInput").matches(":focus") &&
    !document.getElementById("contentInput").matches(":focus")
  ) {
    deleteNote();
  }
});

// 自动保存功能
let autoSaveTimer;
function setupAutoSave() {
  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");

  [titleInput, contentInput].forEach((input) => {
    input.addEventListener("input", () => {
      clearTimeout(autoSaveTimer);
      autoSaveTimer = setTimeout(() => {
        if (currentNoteId) {
          saveCurrentNote();
        }
      }, 1000); // 1秒后自动保存
    });
  });
}

// 页面卸载前保存
window.addEventListener("beforeunload", function () {
  saveCurrentNote();
});

// 导入笔记功能
function importNotes() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const importData = JSON.parse(e.target.result);
          if (importData.notes && Array.isArray(importData.notes)) {
            if (
              confirm(
                `确定要导入 ${importData.totalNotes} 个笔记吗？这将覆盖当前的笔记数据。`
              )
            ) {
              notes = importData.notes.map((note) => ({
                ...note,
                id: Date.now() + Math.random(), // 重新生成ID避免冲突
              }));
              saveNotes();
              renderNoteList();
              if (notes.length > 0) {
                selectNote(notes[0].id);
              }
              alert("笔记导入成功！");
            }
          } else {
            alert("导入文件格式不正确！");
          }
        } catch (error) {
          alert("导入失败：文件格式错误！");
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
}

// 添加导入按钮到控制区域
document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelector(".controls");
  const importBtn = document.createElement("button");
  importBtn.className = "btn btn-primary";
  importBtn.onclick = importNotes;
  importBtn.innerHTML = "导入笔记";
  controls.insertBefore(importBtn, controls.children[2]);
});

// 初始化应用
document.addEventListener("DOMContentLoaded", function () {
  init();
  setupAutoSave();
});
