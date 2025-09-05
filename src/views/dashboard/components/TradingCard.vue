<template>
  <wmx-card-layout>
    <div class="staking-card flex flex-col gap-[16px]">
      <h5 class="flex justify-between font-bold text-[16px]">
        Trading
      </h5>
      <div class="flex items-center">
        <span class="flex-1 text-[14px]">Volume</span>
        <div class="flex items-center gap-[8px] text-right">
          <span class="text-[16px] leading-[24px] text-white tablet:text-initial">{{ volume.value }}</span>
          <span class="hidden tablet:block font-bold text-[12px] leading-[16px] text-[var(--color-token-chart-plus)]">({{ volume.valueChange }})</span>
        </div>
      </div>
      <div class="flex items-center">
        <span class="flex-1 text-[14px]">Fees</span>
        <div class="flex items-center gap-[8px] text-right">
          <span class="text-[16px] leading-[24px] text-white tablet:text-initial">{{ fees.value }}</span>
          <span class="hidden tablet:block font-bold text-[12px] leading-[16px] text-[var(--color-token-chart-plus)]">({{ fees.valueChange }})</span>
        </div>
      </div>
    </div>
  </wmx-card-layout>
</template>

<script setup>
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
defineProps({
  volume: {
    type: Object,
    default: () => ({ value: "$0", valueChange: "+0%" }),
  },
  fees: {
    type: Object,
    default: () => ({ value: "0%", valueChange: "+0%" }),
  },
});
</script>

<style scoped>

</style>