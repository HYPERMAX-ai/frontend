<template>
  <span class="rounded-full border py-[4px] px-[6px] text-[13px] leading-[15px] bg-[var(--color-body-bg2)]">
    <slot>
      {{ percentage }}
    </slot>
  </span>
</template>

<script setup>
const { percentage } = defineProps({
  percentage: String,
});
</script>

<style scoped>
</style>