<script setup lang="ts">
import demoStr from "./demo.vue?raw";
import { startCompiler } from "~/core";
import Vue2, { ref, reactive, watch, computed } from "vue2";

// 将 demoStr 转换成下面的格式
// new Vue2({
//   render,
//   setup() {
//     const a = ref(1);
//     const handleClick = () => {console.log(123)}
//     return {
//       a,
//       handleClick,
//     };
//   },
// });
const handleClick = () => {
  const result = startCompiler(demoStr).call(undefined, {
    Vue: Vue2,
    ref,
    reactive,
    watch,
    computed,
  });
  console.log(result);
  const { vm, style } = result;
  const app = vm.$mount();
  // document.getElementById("shadow")?.appendChild(vm.$el);
  const div = document.getElementById("shadow")!;
  const shadow = div.attachShadow({ mode: "open" });
  const _style = document.createElement("style");
  _style.textContent = style;
  shadow.appendChild(_style);
  shadow.appendChild(app.$el);
};
</script>

<template>
  <div id="shadow"></div>
  <button @click="handleClick">点击</button>
</template>
