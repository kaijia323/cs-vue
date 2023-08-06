<script setup lang="ts">
import demoStr from "./demo.vue?raw";
// import { startCompiler } from "~/dist/compiler-vue-esm";
// import { startCompiler } from "compiler-vue";
import { startCompiler } from "~/packages/compiler-vue/index";
import { ref } from "vue";
import { assertHtml } from "./tools";

// 将 demoStr 转换成下面的格式

// import Vue, { ref, watch, computed } from "vue";
// new Vue({
//   el: "#app",
//   template: `<div>sss</div>`,
//   setup() {
//     const a = ref(1);
//     const handleClick = () => {
//       console.log(123);
//     };
//     return {
//       a,
//       handleClick,
//     };
//   },
// }).$mount();

const srcdoc = ref("");

const handleClick = () => {
  const result = startCompiler(demoStr);
  console.log(result);
  srcdoc.value = assertHtml(result.vm, result.style);
};
</script>

<template>
  <button @click="handleClick">点击</button>
  <br />
  <iframe frameborder="0" :srcdoc="srcdoc"></iframe>
</template>

<style>
iframe {
  width: 100%;
  height: 88vh;
}
</style>
