<template>
  <article class="flex items-center font-medium text-[14px] py-[6px]">
    <span class="font-medium text-[13px] text-[var(--color-icon-path)] whitespace-nowrap">{{ label }}</span>
    <div class="ml-auto flex items-center justify-end text-right ">
      <slot>{{ value }}</slot>
    </div>
  </article>
</template>
<script setup>
const { label } = defineProps({
  label: String,
  value: String
});
</script>

<style scoped>

</style>