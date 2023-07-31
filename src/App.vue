<script setup lang="ts">
import demoStr from "./demo.vue?raw";
import { startCompiler } from "~/core";
import Vue2, { ref, reactive } from "vue2";

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
  const result = startCompiler(demoStr);
  console.log(result);
  const vm = result.call(undefined, { Vue: Vue2, ref, reactive }).$mount();
  console.log(vm.$el);
  document.getElementById("shadow")?.appendChild(vm.$el);
};
</script>

<template>
  <div id="shadow"></div>
  <button @click="handleClick">点击</button>
</template>
