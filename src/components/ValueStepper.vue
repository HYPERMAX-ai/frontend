<template>
  <div class="value-stepper flex flex-col p-[16px] gap-[16px] border rounded-[8px]">
    <span class="text-[14px] font-semibold">{{ title }}</span>
    <div class="value-stepper-body items-center gap-[12px]">
      <button class="btn-icon btn-action shadow-0224 w-[32px] h-[32px]" @click="onClickMinus">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8327 10.8332H4.16602V9.1665H15.8327V10.8332Z" fill="var(--color-body-text)"/>
        </svg>
      </button>

      <wmx-input type="number" class="w-full h-[40px] text-center dark" placeholder="0.0" v-model="modelValue"/>

      <button class="btn-icon btn-action shadow-0224 w-[32px] h-[32px]" @click="onClickPlus">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8327 10.8332H10.8327V15.8332H9.16602V10.8332H4.16602V9.1665H9.16602V4.1665H10.8327V9.1665H15.8327V10.8332Z" fill="var(--color-body-text)"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import WmxInput from "@/components/wmx-input/WmxInput.vue";
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue"
});
const { title, step } = defineProps({
  title: String,
  step: Number,
});

const calculateValue = (value, step, isAdd) => {
  const newValue = isAdd ? value + step : value - step;
  return newValue < 0 ? 0.0 : newValue;
}
const onClickMinus = () => {
  modelValue.value = calculateValue(modelValue.value, step, false);
}

const onClickPlus = () => {
  modelValue.value = calculateValue(modelValue.value, step, true);
}
</script>

<style>
:root {
  --color-value-stepper-bg: var(--color-ebony);
  --color-value-stepper-text: var(--color-river-bed);
}
</style>
<style scoped>
.value-stepper {
  background-color: var(--color-value-stepper-bg);
  .value-stepper-body {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
}
</style>