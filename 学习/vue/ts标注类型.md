## [TS为组件的 props 标注类型](https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props)

### [使用 `<script setup>`](https://cn.vuejs.org/guide/typescript/composition-api.html#using-script-setup)

当使用 `<script setup>` 时，`defineProps()` 宏函数支持从它的参数中推导类型：

```vue
<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

props.foo // string
props.bar // number | undefined
</script>
```

这被称之为“运行时声明”，因为传递给 `defineProps()` 的参数会作为运行时的 `props` 选项使用。

然而，通过泛型参数来定义 props 的类型通常更直接：

```vue
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

这被称之为“基于类型的声明”。编译器会尽可能地尝试根据类型参数推导出等价的运行时选项。在这种场景下，我们第二个例子中编译出的运行时选项和第一个是完全一致的。

基于类型的声明或者运行时声明可以择一使用，但是不能同时使用。

我们也可以将 props 的类型移入一个单独的接口中：

```vue
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
</script>
```

这同样适用于 `Props` 从另一个源文件中导入的情况。该功能要求 TypeScript 作为 Vue 的一个 peer dependency。

```vue
<script setup lang="ts">
import type { Props } from './foo'

const props = defineProps<Props>()
</script>
```

#### [语法限制](https://cn.vuejs.org/guide/typescript/composition-api.html#syntax-limitations)

在 3.2 及以下版本中，`defineProps()` 的泛型类型参数仅限于类型字面量或对本地接口的引用。

这个限制在 3.3 中得到了解决。最新版本的 Vue 支持在类型参数位置引用导入和有限的复杂类型。但是，由于类型到运行时转换仍然基于 AST，一些需要实际类型分析的复杂类型，例如条件类型，还未支持。你可以使用条件类型来指定单个 prop 的类型，但不能用于整个 props 对象的类型。

### [Props 解构默认值](https://cn.vuejs.org/guide/typescript/composition-api.html#props-default-values)

当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。可以通过使用[响应式 Props 解构](https://cn.vuejs.org/guide/components/props.html#reactive-props-destructure)解决这个问题。 ：

```ts
interface Props {
  msg?: string
  labels?: string[]
}

const { msg = 'hello', labels = ['one', 'two'] } = defineProps<Props>()
```

在 3.4 及更低版本，响应式 Props 解构不会被默认启用。另一种选择是使用 `withDefaults` 编译器宏：

```ts
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

这将被编译为等效的运行时 props `default` 选项。此外，`withDefaults` 帮助程序为默认值提供类型检查，并确保返回的 props 类型删除了已声明默认值的属性的可选标志。

INFO

请注意，在使用 `withDefaults` 时，默认值的可变引用类型 (如数组或对象) 应该在函数中进行包装，以避免意外修改和外部副作用。这样可以确保每个组件实例都会获得自己默认值的副本。当使用解构时，这**不**是必要的。

## [为组件的 emits 标注类型](https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-emits)

在 `<script setup>` 中，`emit` 函数的类型标注也可以通过运行时声明或是类型声明进行：

```vue
<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])

// 基于选项
const emit = defineEmits({
  change: (id: number) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
  },
  update: (value: string) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
  }
})

// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 3.3+: 可选的、更简洁的语法
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>
```

类型参数可以是以下的一种：

1. 一个可调用的函数类型，但是写作一个包含[调用签名](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures)的类型字面量。它将被用作返回的 `emit` 函数的类型。
2. 一个类型字面量，其中键是事件名称，值是数组或元组类型，表示事件的附加接受参数。上面的示例使用了具名元组，因此每个参数都可以有一个显式的名称。

我们可以看到，基于类型的声明使我们可以对所触发事件的类型进行更细粒度的控制。

若没有使用 `<script setup>`，`defineComponent()` 也可以根据 `emits` 选项推导暴露在 setup 上下文中的 `emit` 函数的类型：

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['change'],
  setup(props, { emit }) {
    emit('change') // <-- 类型检查 / 自动补全
  }
})
```

