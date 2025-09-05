<template>
  <div class="grid gap-[16px] tablet:gap-[24px]">
    <modal-top
        title="WEMIX/WEMIX$"
        :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
        :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
        percentage="0.25%"
    />
    <wmx-select-bar :items="['WEMIX', 'WEMIX$']" v-model="currencyType"/>

    <set-price-range />

    <deposit-amounts
        :transaction1="transaction1"
        :transaction2="transaction2"
        @update:transaction1="transaction1 = $event"
        @update:transaction2="transaction2 = $event"
    />

    <receipt-panel>
      <receipt-panel-item label="Exchange Rate" value="1 WEMIX = 1.1212 WEMIX$"/>
      <receipt-panel-item label="Range">
        <div class="flex items-center text-[14px] font-medium">
          <span class="w-[12px] h-[12px] mr-[4px] rounded-full bg-[var(--color-plus)]"/>
          <span>In Range (-50% ~ +50%)</span>
        </div>
      </receipt-panel-item>
      <receipt-panel-item label="Share of Pool">
        <span class="font-bold">0.12%</span></receipt-panel-item>
      <receipt-panel-item label="Expected APR" value="123.12%"/>

      <receipt-panel-line />
      <receipt-panel-item-slipage />
    </receipt-panel>

    <button class="w-full btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold">Mint</button>

  </div>
</template>
<script setup>
import {ref} from "vue";
import ModalTop from "@/components/ModalTop.vue";
import WmxSelectBar from "@/components/wmx-select/WmxSelectBar.vue";
import SetPriceRange from "@/components/SetPriceRange.vue";
import DepositAmounts from "@/components/DepositAmounts.vue";
import ReceiptPanel from "@/components/receipt-panel/ReceiptPanel.vue";
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";
import ReceiptPanelLine from "@/components/receipt-panel/ReceiptPanelLine.vue";
import ReceiptPanelItemSlipage from "@/components/receipt-panel/ReceiptPanelItemSlipage.vue";
const currencyType = ref(0)
const transaction1 = ref({
  title: 'You Pay',
  coinName: 'WEMIX$',
  coinIcon: require('@/assets/dummy/avatar-004_32x32.png'),
  amount: '654,321,098',
  balance: '123567890'
})
const transaction2 = ref({
  title: 'You’re Recieve',
  coinName: 'StWEMIX',
  coinIcon: require('@/assets/dummy/avatar-008_32x32.png'),
  amount: '654,321,098',
  balance: '123567890'
})
</script>

<style scoped>

</style>