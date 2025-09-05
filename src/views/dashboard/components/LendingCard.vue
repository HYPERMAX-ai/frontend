<template>
  <wmx-card-layout>
    <div class="staking-card flex flex-col gap-[16px]">
      <h5 class="flex justify-between font-bold text-[16px]">
        Lending
      </h5>
      <div class="flex items-center">
        <span class="flex-1 text-[14px]">Supplied</span>
        <div class="flex items-center gap-[8px] text-right">
          <span class="text-[16px] leading-[24px] text-white tablet:text-initial">{{ supplied.value }}</span>
          <span class="hidden tablet:block font-bold text-[12px] leading-[16px] text-[var(--color-token-chart-plus)]">({{ supplied.valueChange }})</span>
        </div>
      </div>
      <div class="flex items-center">
        <span class="flex-1 text-[14px]">APR(supply)</span>
        <div class="flex items-center gap-[8px] text-right">
          <span class="text-[16px] leading-[24px] text-white tablet:text-initial">{{ apr.value }}</span>
          <span class="hidden tablet:block font-bold text-[12px] leading-[16px] text-[var(--color-token-chart-plus)]">({{ apr.valueChange }})</span>
        </div>
      </div>
    </div>
  </wmx-card-layout>
</template>

<script setup>
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
defineProps({
  supplied: {
    type: Object,
    default: () => ({ value: "$0", valueChange: "+0%" }),
  },
  apr: {
    type: Object,
    default: () => ({ value: "0%", valueChange: "+0%" }),
  },
});
</script>

<style scoped>

</style>