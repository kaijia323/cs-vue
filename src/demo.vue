<script setup>
import { ref } from "vue";

const name = ref("名字");
const handleClick = () => {
  name.value = "油麦菜";
  console.log(handleClick);
};
</script>

<template>
  <div class="demo">
    <span>模板{{ name }}</span>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<style>
.demo {
  color: #f00;
}
</style>
