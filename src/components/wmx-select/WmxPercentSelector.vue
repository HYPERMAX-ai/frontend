<template>
  <div class="wmx-percent-selector flex items-center">
    <span class="mr-[4px] text-[13px] font-medium" :style="{color}">%</span>
    <div class="flex w-[172px] justify-between font-semibold">
      <button
          v-for="item in [
            {label: '25', value: 0.25},
            {label: '50', value: 0.50},
            {label: '75', value: 0.75},
            {label: '100', value: 1.00},
          ]" :key="`${uid}-${item.label}`"
          :class="{'active': modelValue === item.value}"
          :style="{
            color: modelValue === item.value ? handleTextColor : 'var(--color-wmx-percent-selector-text)',
            backgroundColor: modelValue === item.value ? handleColor : 'var(--color-wmx-percent-selector-bg)',
          }"
          @click="onClick(item.value)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>
<script setup>
const { color } = defineProps({
  color: String,
  handleColor: {
    type: String,
    default: 'var(--color-wmx-percent-selector-active-bg)',
  },
  handleTextColor: {
    type: String,
    default: 'var(--color-wmx-percent-selector-active-text)',
  },
});
const uid = "wmx-percent-selector-" + Math.random().toString(36).substr(2, 9);
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue"
});
modelValue.value = 0.25;

const onClick = (value) => {
  modelValue.value = value;
}
</script>
<style>
:root {
  --color-wmx-percent-selector-active-bg: var(--color-zuccini);
  --color-wmx-percent-selector-active-text: var(--color-riptide-light);
  --color-wmx-percent-selector-bg: var(--color-body-bg);
  --color-wmx-percent-selector-text: var(--color-river-bed);
}
</style>
<style scoped>
.wmx-percent-selector {
  color: var(--color-wmx-percent-selector-text);
}
.wmx-percent-selector > div {
  padding: 2px;
  line-height: 15px;
  color: var(--color-wmx-percent-selector-text);
  background-color: var(--color-wmx-percent-selector-bg);
  border: 1px solid var(--color-border);
  border-radius: 9999px;

  button {
    min-width: 40px;
    padding: 6px;
    border-radius: 9999px;
    font-size: 13px;

    &.active {
      box-shadow: var(--shadow);
    }
  }
}
</style>