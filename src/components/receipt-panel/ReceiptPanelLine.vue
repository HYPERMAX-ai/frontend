<template>
  <div class="line-container py-[4px]">
    <span :class="{'px-[10px]' : text}">{{ text }}</span>
  </div>
</template>

<script setup>
const { text } = defineProps({
  text: String
});
</script>

<style scoped>
.line-container {
  position: relative;
  text-align: center;
}

.line-container::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--color-border);
  z-index: -1;
}

.line-container span {
  position: relative;
  background-color: white;
}
</style>