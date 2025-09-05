<template>
  <wmx-card-layout>
    <div class="staking-card flex flex-col gap-[16px]">
      <h5 class="flex justify-between font-bold text-[16px]">
        Staking
      </h5>
      <div class="flex items-center">
        <span class="flex-1 text-[14px]">Total Staked</span>
        <div class="flex text-right gap-[8px] items-center">
          <span class="text-[16px] leading-[24px] text-white tablet:text-initial">{{ totalStaked.value }}</span>
          <span class="hidden tablet:block font-bold text-[12px] leading-[16px] text-[var(--color-token-chart-plus)]">({{ totalStaked.valueChange }})</span>
        </div>
      </div>
      <div class="flex items-center">
        <span class="flex-1 text-[14px]">APY</span>
        <div class="flex text-right gap-[8px] items-center">
          <span class="text-[16px] leading-[24px] text-white tablet:text-initial">{{ apy.value }}</span>
          <span class="hidden tablet:block font-bold text-[12px] leading-[16px] text-[var(--color-token-chart-plus)]">({{ apy.valueChange }})</span>
        </div>
      </div>
    </div>
  </wmx-card-layout>
</template>

<script setup>
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
defineProps({
  totalStaked: {
    type: Object,
    default: () => ({ value: "$0", valueChange: "+0%" }),
  },
  apy: {
    type: Object,
    default: () => ({ value: "0%", valueChange: "+0%" }),
  },
});
</script>

<style scoped>

</style>