<script setup>
import { ref, watch, computed } from "vue";

const options = [
  {
    value: "选项1",
    label: "黄金糕",
  },
  {
    value: "选项2",
    label: "双皮奶",
  },
  {
    value: "选项3",
    label: "蚵仔煎",
  },
  {
    value: "选项4",
    label: "龙须面",
  },
  {
    value: "选项5",
    label: "北京烤鸭",
  },
];
const value = ref("");
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
    <el-button @click="handleClick">难得难得你</el-button>

    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<style>
.demo {
  color: #f00;
}
</style>
