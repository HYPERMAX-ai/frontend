<template>
  <div class="modal-top">
    <div class="left">
      <slot name="left">
        <div class="flex gap-[2px]">
          <img :src="avatar1" alt="avatar1" class="w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px]" />
          <img :src="avatar2" alt="avatar2" class="w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px]"/>
        </div>
        <span class="text-[14px] tablet:text-[16px] font-semibold" >{{ title }}</span>
        <wmx-percentage-tag class="text-[14px] font-bold">{{ percentage }}</wmx-percentage-tag>
      </slot>
    </div>
    <div v-if="showRange" class="right font-medium text-[13px] text-[var(--color-icon-path)] whitespace-nowrap">
      <div :class="{'success': isWithinRange, 'warning': !isWithinRange}">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V7ZM11 11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
        </svg>
      </div>
      <span v-if="isWithinRange">In Range</span>
      <span v-else>Out of Range</span>
    </div>
  </div>
</template>
<script setup>
import WmxPercentageTag from "@/components/wmx-label/WmxPercentageTag.vue";

defineProps({
  title: String,
  avatar1: String,
  avatar2: String,
  percentage: String,
  isWithinRange: Boolean,
  showRange: Boolean,
});
</script>
<style scoped>
.modal-top {
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .right {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .success {
    svg { fill: rgba(0, 177, 113, 1); }
    .percentage { background: rgba(0, 177, 113, 1); }
  }
  .warning {
    svg { fill: rgba(255, 62, 20, 1); }
    .percentage { background: rgba(255, 62, 20, 1); }
  }
}
</style>