<script setup lang="ts">
import demoStr from "./demo.vue?raw";
import { startCompiler } from "~/core";
// import Vue2 from "vue2";

const handleClick = () => {
  startCompiler(demoStr);

  // 将 demoStr 转换成下面的格式
  // new Vue2({
  //   render: template.render,
  //   setup() {
  //     const a = ref(1);
  //     const handleClick = () => {console.log(123)}
  //     return {
  //       a,
  //       handleClick,
  //     };
  //   },
  // });
};
</script>

<template>
  <button @click="handleClick">点击</button>
</template>
