<template>
  <div class="wmx-select-bar relative">
    <!-- 버튼 컨테이너 -->
    <div
        :class="containerClass"
        class="wmx-select-bar-container flex rounded-full relative border ">
      <!-- 선택 애니메이션 배경 -->
      <div
          :class="barClass"
          class="absolute transition-all duration-300 ease-in-out rounded-full"
          :style="activeStyle"
      ></div>

      <!-- 버튼 -->
      <button
          v-for="(item, index) in items"
          :key="`wmx-select-bar-${uid}-${item}`"
          :class="[
            'flex-1 p-[8px] text-center text-[16px] font-semibold relative z-10',
            modelValue === index ? activeColor : '',
          ]"
          @click="onClickItem(index)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const { items, options } = defineProps({
  items: Array,
  options: Object,
});
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});
const uid = Math.random().toString(36).substr(2, 9);
const containerClass = computed(() => {
  return {
    [options?.container?.bg]: options?.container?.bg,
    [options?.container?.text]: options?.container?.text,
    'bg-[var(--color-wmx-select-bar-bg)]': !options?.container?.bg,
    'text-[var(--color-wmx-select-bar-text)]': !options?.container?.text,
  }
});
const barClass = computed(() => {
  return {
    [options?.handle?.bg]: options?.handle?.bg,
    'bg-[var(--color-wmx-select-bar-active-bg)]': !options?.handle?.bg,
  }
});
const activeColor = computed(() => {
  return {
    [options?.handle?.text]: options?.handle?.text,
    'text-[var(--color-wmx-select-bar-active-text)]': !options?.handle?.text,
  }
});

// 애니메이션 스타일 계산
const activeStyle = computed(() => {
  const width = 100 / items.length; // 버튼 너비를 계산
  return {
    width: `calc(${width}% - 1px)`,
    transform: `translateX(1px) translateX(${100 * modelValue.value}%)`,
  };
});

const onClickItem = (index) => {
  modelValue.value = index;
};
</script>
<style scoped>
.wmx-select-bar {
  position: relative;
  overflow: hidden;
}

.wmx-select-bar .absolute {
  top: 1px;
  bottom: 1px;
}
</style>