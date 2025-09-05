<template>
  <receipt-panel-item label="Price Impact">
    <span class="flex items-center font-bold">
      {{ from }}
      <img v-if="from && to"
           :src="require('@/assets/icons/ic_chevron_right_16x16.svg')" alt="ic_chevron_right_16x16" class="w-[16px] h-[16px]">
      {{ to }}
    </span>
  </receipt-panel-item>
</template>
<script setup>
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";
defineProps({
  from: String,
  to: String
});
</script>

<style scoped>

</style>