<script setup lang="ts">
import demoStr from "./demo.vue?raw";
import { startCompiler } from "~/core";

const handleClick = () => {
  startCompiler(demoStr);
};
</script>

<template>
  <button @click="handleClick">点击</button>
</template>
