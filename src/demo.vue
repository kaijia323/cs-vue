<script setup>
import Vue, { ref, watch, computed } from "vue";

const name = ref("名字");
const newName = computed(() => {
  return name.value + "nisda";
});

watch(name, (oldV, v) => {
  console.log(`name变化了: ${oldV} -> ${v}`);
});

const handleClick = () => {
  name.value = "油麦菜";
  console.log("handleClick");
};
</script>

<template>
  <div class="demo">
    <span>模板 {{ name }}</span>
    <span>{{ newName }}</span>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<style>
.demo {
  color: #f00;
}
</style>
