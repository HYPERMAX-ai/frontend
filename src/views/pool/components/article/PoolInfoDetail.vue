<template>
  <wmx-tooltip class="ml-[4px]" :class="{'success': isWithinRange, 'warning': !isWithinRange}">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V7ZM11 11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
    </svg>
    <template #tooltip>
      <div class="grid gap-[20px]">
        <div class="flex items-center text-[var(--color-title-text)]">
          <span v-if="avatar1" class="w-[24px] h-[24px]"
            ><img :src="avatar1" alt="avatar-002" class="w-full h-full"/></span>
          <span v-if="avatar2" class="ml-[2px] w-[24px] h-[24px]"
            ><img :src="avatar2" alt="avatar-002" class="w-full h-full"/></span>
          <span class="ml-[4px] text-[14px] font-semibold ">{{ title }}</span>
          <span class="percentage btn-radius ml-[16px] text-[13px] py-[4px] px-[8px] font-medium">{{ percentage }}</span>
        </div>
        <ul>
          <li>
            <div>
              <span class="circle min"></span>
              <span>Min</span>
            </div>
            <span class="value">{{ min }}</span>
          </li>
          <li>
            <div>
              <span class="circle max"></span>
              <span>Max</span>
            </div>
            <span class="value">{{ max }}</span>
          </li>
          <li>
            <div>
              <span class="circle last"></span>
              <span>Last</span>
            </div>
            <span class="value">{{ last }}</span>
          </li>
        </ul>
      </div>
    </template>
  </wmx-tooltip>
</template>

<script setup>
import WmxTooltip from "@/components/wmx-tooltip/WmxTooltip.vue";
const { isWithinRange, title, avatar1, avatar2, percentage, min, max, last } = defineProps({
  isWithinRange: Boolean,
  title: String,
  avatar1: String,
  avatar2: String,
  percentage: String,
  min: [String, Number],
  max: [String, Number],
  last: [String, Number]
})
</script>

<style scoped>
.success {
  svg { fill: rgba(0, 177, 113, 1); }
  .percentage { background: rgba(0, 177, 113, 1); }
}
.warning {
  svg { fill: rgba(255, 62, 20, 1); }
  .percentage { background: rgba(255, 62, 20, 1); }
}
ul {
  display: grid;
  gap: 16px;
}
li {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;

  .circle {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;

    &.min { background: rgba(255, 62, 20, 1); }
    &.max { background: rgba(0, 177, 113, 1); }
    &.last { background: rgba(113, 161, 255, 1); }
  }
  .value { font-weight: 700; }
}
</style>