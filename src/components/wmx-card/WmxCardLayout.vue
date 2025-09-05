<template>
  <div
      :class="{[type]:type}"
      class="wmx-card-layout p-[16px] tablet:p-[24px]"
  >
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: "fill",
  },
})
</script>

<style scoped>
.wmx-card-layout {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  &.fill {
    background-color: #11182780;
    border-radius: 8px;
  }
}
</style>