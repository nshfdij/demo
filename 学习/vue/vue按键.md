Vue 提供了多种键盘修饰符：

```vue
<!-- 常用按键 -->
<input @keyup.enter="onEnter" />      <!-- 回车键 -->
<input @keyup.esc="onEscape" />       <!-- ESC键 -->
<input @keyup.space="onSpace" />      <!-- 空格键 -->
<input @keyup.tab="onTab" />          <!-- Tab键 -->
<input @keyup.delete="onDelete" />    <!-- Delete键 -->

<!-- 方向键 -->
<input @keyup.up="onUp" />            <!-- 上箭头 -->
<input @keyup.down="onDown" />        <!-- 下箭头 -->
<input @keyup.left="onLeft" />        <!-- 左箭头 -->
<input @keyup.right="onRight" />      <!-- 右箭头 -->

<!-- 数字键 -->
<input @keyup.1="onOne" />            <!-- 数字1 -->

<!-- 字母键 -->
<input @keyup.a="onA" />              <!-- 字母A -->

<!-- 功能键 -->
<input @keyup.f1="onF1" />            <!-- F1键 */
```

## 组合修饰符

可以与其他修饰符组合使用：



```vue
<!-- 同时按下 Ctrl + Enter -->
<input @keyup.ctrl.enter="onCtrlEnter" />

<!-- 同时按下 Shift + Enter -->
<input @keyup.shift.enter="onShiftEnter" />

<!-- 阻止默认行为 -->
<input @keyup.enter.prevent="onEnter" />

<!-- 阻止事件冒泡 -->
<input @keyup.enter.stop="onEnter" />
```

## 事件对象

```vue
<template>
  <input @keyup.enter="handleEnter" />
</template>

<script>
function handleEnter(event) {
  console.log('按键码:', event.keyCode);     // 13
  console.log('按键名:', event.key);        // "Enter"
  console.log('输入值:', event.target.value);
  
  // 阻止默认行为（如表单提交）
  event.preventDefault();
}
</script>
```

## 自定义键码

对于特殊按键，也可以使用键码：



```vue
<!-- 使用键码 13（Enter键） -->
<input @keyup.13="onEnter" />

<!-- 使用键码 27（ESC键） -->
<input @keyup.27="onEscape" />

<!-- 自定义键码别名 -->
<script>
// 在 Vue 应用配置中
app.config.keyCodes.f1 = 112;
</script>
<input @keyup.f1="onF1" />
```

## 实际应用示例

```vue
<template>
  <input 
    type="text" 
    id="new-todo"
    @keyup.enter="handleAddTodo"
    class="new-todo"
    autofocus
    autocomplete="off"
    placeholder="what needs to be done?"
  />
</template>

<script>
function handleAddTodo(e: KeyboardEvent) {
  const target = e.target as HTMLInputElement;
  const value = target.value.trim();
  
  if (value) {
    // 添加新的待办事项
    addTodo(value);
    // 清空输入框，准备下一次输入
    target.value = '';
  }
}
</script>
```