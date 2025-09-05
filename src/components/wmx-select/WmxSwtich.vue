<template>
  <button
      :class="[modelValue ? 'text-white' : 'text-[var(--color-title-text2)]']"
      class="wmx-switch"
      @click="modelValue = !modelValue"
  >
    <slot v-if="!right"></slot>
    <span class="wmx-switch-bar w-[56px] h-[28px] p-[1px] inline-flex border rounded-full"
          :class="modelValue ? 'bg-[var(--color-btn-active-bg)]' : 'bg-[var(--color-side-menu-active-bg)]'">
      <span
          :class="[
              modelValue ? 'bg-white' : 'bg-[var(--color-river-bed)]',
              modelValue ? 'translate-x-[28px]' : 'translate-x-0',
          ]"
          class="wmx-switch-handle transform "
          style="box-shadow: var(--box-shadow-0224)"
      />
    </span>
    <slot v-if="right"></slot>
  </button>
</template>
<script setup>
defineProps({
  right: {
    type: Boolean,
    default: false
  }
})
const modelValue = defineModel({
  prop: 'modelValue',
  event: 'update:modelValue'
})
</script>

<style scoped>
.wmx-switch {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.wmx-switch-handle {
  border-radius: 9999%;
  width: 24px;
  height: 24px;

  transition: transform 0.2s ease;
}
</style>