<script setup>
import { ref } from "vue";

const name = ref("名字");
</script>

<template>
  <div class="demo">模板{{ name }}</div>
</template>

<style>
.demo {
  color: #f00;
}
</style>
