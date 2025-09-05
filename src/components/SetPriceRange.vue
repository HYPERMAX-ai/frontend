<template>
  <div class="flex flex-col gap-[8px]">
    <!-- header -->
    <div class="flex flex-wrap items-center">
      <span class="text-[16px] font-semibold">Set Price Range</span>
      <wmx-percent-selector class="ml-auto"/>
    </div>

    <!-- body -->
    <div class="hidden tablet:grid grid-cols-2 gap-[8px] ">
      <value-stepper title="Min Price" :step="0.5"/>
      <value-stepper title="Max Price" :step="0.5"/>
    </div>
    <div class="flex tablet:hidden flex-col py-[8px] px-[16px] border rounded-[8px] bg-[var(--color-value-stepper-bg)]">
      <p class="flex py-[8px] text-[13px] font-medium">
        <span>Min Price</span>
        <span class="ml-auto">1 WEMIX = 1.1212 WEMIX/WEMIX$</span>
      </p>
      <p class="flex py-[8px] text-[13px] font-medium">
        <span>Max Price</span>
        <span class="ml-auto">1 WEMIX = 1.1212 WEMIX/WEMIX$</span>
      </p>
    </div>
  </div>
</template>
<script setup>
import WmxPercentSelector from "@/components/wmx-select/WmxPercentSelector.vue";
import ValueStepper from "@/components/ValueStepper.vue";

</script>

<style scoped>

</style>