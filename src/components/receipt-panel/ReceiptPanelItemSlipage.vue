<template>
  <receipt-panel-item label="Slipage" class="items-center" >
    <div class="flex items-center font-bold">
      <wmx-input type="number" v-model="modelValue"
                 :min="0"
                 :max-length="5"
                 placeholder="0.00"
                 class="w-[64px] text-center small" rounded8 />
      <span class="ml-[8px]">%</span>
    </div>
  </receipt-panel-item>
</template>

<script setup>
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";
import WmxInput from "@/components/wmx-input/WmxInput.vue";
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue"
});
</script>


<style scoped>

</style>