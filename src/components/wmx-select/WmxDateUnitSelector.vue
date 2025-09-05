<template>
  <div class="wmx-date-unit-selector flex items-center">
    <div :class="dropDown ? 'hidden' : 'contents'">
      <div class="wmx-date-unit-selector-container flex min-w-[172px] w-full justify-between font-semibold">
        <button
            v-for="item in items" :key="`${uid}-${item.label}`"
            :class="{'active': modelValue === item.value}"
            class="flex-1"
            @click="onClick(item.value)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>

    <div :class="dropDown ? 'block' : 'hidden'" class="relative">
      <button class="flex items-center" @click="show = !show">
        <span class="w-[32px] font-semibold text-white text-[14px]">{{ currentValue.label }}</span>
        <span class="flex w-[20px] h-[20px] justify-center items-center">
          <span class="sort-icon"></span>
        </span>
      </button>
      <transition name="fade-slide" >
        <div v-if="show" class="wmx-date-unit-selector-container mobile flex flex-col absolute w-full font-semibold">
          <button
              v-for="item in items" :key="`${uid}-${item.label}`"
              :class="{'active': modelValue === item.value}"
              @click="onClick(item.value)"
          >
            {{ item.label }}
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import {computed, ref} from "vue";
defineProps({
  dropDown: Boolean,
});
const uid = "wmx-date-unit-selector-" + Math.random().toString(36).substr(2, 9);
const show = ref(false);

// 날짜 단위 종류
const items = [
  { label: "1D", value: "day" },
  { label: "1W", value: "week" },
  { label: "1M", value: "month" },
  { label: "1Y", value: "year" }
];

// 선택된 날짜 단위
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue"
});
modelValue.value = items[0].value;

const currentValue = computed(() => {
  return items.find((item) => item.value === modelValue.value);
});

const onClick = (value) => {
  modelValue.value = value;
  show.value = false;
}

</script>
<style>
:root {
  --color-wmx-date-unit-selector-active-bg: var(--color-black-peral);
  --color-wmx-date-unit-selector-active-text: var(--color-riptide);
  --color-wmx-date-unit-selector-bg: var(--color-body-bg2);
  --color-wmx-date-unit-selector-text: var(--color-table-header-text);
}
</style>
<style scoped>
.wmx-date-unit-selector {
  color: var(--color-wmx-date-unit-selector-text);

  .wmx-date-unit-selector-container {
    padding: 2px;
    line-height: 15px;
    color: var(--color-wmx-date-unit-selector-text);
    background-color: var(--color-wmx-date-unit-selector-bg);
    border-radius: 9999px;

    button {
      min-width: 40px;
      padding: 6px;
      border-radius: 9999px;
      font-size: 13px;

      &.active {
        background: var(--color-wmx-date-unit-selector-active-bg);
        color: var(--color-wmx-date-unit-selector-active-text);
        box-shadow: var(--shadow);
      }
    }

    &.mobile {
      top: 25px;
      right: 0;
      z-index: 10;
      border-radius: 12px;
      button {
        border-radius: 10px;
        padding: 12px;
      }
    }
  }
}

/* 기본 애니메이션 스타일 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>