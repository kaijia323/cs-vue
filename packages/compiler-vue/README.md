将 Vue 的 sfc 字符串转成 Vue 语法

用法 (Vitejs)

```javascript
// 这样会将Vue组件导入成字符串
import demoStr from "./demo.vue?raw";
import { startCompiler } from "compiler-vue";
import Vue2, { ref, reactive, watch, computed } from "vue2";

// startCompiler接受一个Vue组件sfc的字符串
// demo.vue组件有用到vue的什么api就传过去就行
const result = startCompiler(demoStr).call(undefined, {
  Vue: Vue2,
  ref,
  reactive,
  watch,
  computed,
});

// vm就是Vue实例，style是demo组件的 <style>...</style> 样式
const { vm, style } = result;
const app = vm.$mount();
// 创建一个 shadow
const div = document.getElementById("shadow")!;
const shadow = div.attachShadow({ mode: "open" });
const _style = document.createElement("style");
_style.textContent = style;
shadow.appendChild(_style);
shadow.appendChild(app.$el);
```
