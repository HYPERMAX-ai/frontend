<template>
  <wmx-label class="wmx-icon-label flex items-center">
    <div class="flex  items-center gap-[8px]">
      <span class="w-[40px] h-[40px] rounded-full overflow-hidden">
        <img :src="src" alt="icon" class="w-full h-full"/>
      </span>
      <div class="flex flex-col">
        <span class="leading-[22px]">{{ label }}</span>
        <span v-if="subLabel"
              class="leading-[15px] font-medium text-[var(--color-title-text2)] text-[13px] whitespace-nowrap">{{ subLabel }}</span>
      </div>
    </div>
  </wmx-label>
</template>
<script setup>
import WmxLabel from "@/components/wmx-label/WmxLabel.vue";

const { label, src } = defineProps({
  label: String,
  subLabel: String,
  src: String
});
</script>

<style scoped>

</style>