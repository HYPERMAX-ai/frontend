<template>
  <div class="grid gap-[16px] tablet:gap-[24px]">
    <!--

    Information

    -->
    <modal-top
        title="WEMIX/WEMIX$"
        :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
        :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
        percentage="0.25%"

        showRange
        isWithinRange
    />

    <wmx-select-bar :items="['WEMIX', 'WEMIX$']" v-model="currencyType"/>

    <receipt-panel class="border rounded-[8px] px-[16px] py-[8px]">
      <receipt-panel-item label="Total Liquidity" value="$1,000"/>
      <receipt-panel-item label="Share of Pool" value="0.01%"/>
      <receipt-panel-item label="Asset Ratio">
        <div class="grid tablet:flex items-center justify-items-end text-[14px] gap-[2px] font-medium">
          <div class="flex">
            <span>1.234 WEMIX</span>
            <wmx-percentage-tag fill percentage="25%" class="ml-[4px]"/>
          </div>
          <div class="flex">
            <span class="mx-[4px]"> + </span>
            <div>
              <span>10.234 WEMIX$</span>
              <wmx-percentage-tag fill percentage="25%" class="ml-[4px]"/>
            </div>
          </div>
        </div>
      </receipt-panel-item>
      <receipt-panel-item label="Reward" value="0.234 WEMIX + 0.234 WEMIX$"/>
      <receipt-panel-item label="APR" value="10%"/>
      <receipt-panel-item label="Price Range" value=" ~ ">
        <div class="grid tablet:flex items-center justify-items-end text-[14px] gap-[2px] font-medium">
          <div class="flex">
            <span>1.234 WEMIX</span>
            <span class="mx-[4px]"> ~ </span>
          </div>
          <span>2.2345 WEMIX$</span>
        </div>
      </receipt-panel-item>
    </receipt-panel>


    <!--

    Manage

    -->
    <wmx-title>Manage</wmx-title>
    <wmx-select-bar :items="['Deposit', 'Withdraw', 'Claim']" v-model="transactionType "/>

    <div>
      <div v-if="transactionType === 0" class="flex flex-col gap-[16] tablet:gap-[24px]">
        <deposit-amounts
            title=""
            :transaction1="transaction1"
            :transaction2="transaction2"
        />

        <receipt-panel>
          <receipt-panel-item label="Exchange Rate" value="1 WEMIX = 1.1212 WEMIX$"/>
          <receipt-panel-item-price-impact from="0.01%" to="0.02%"/>
          <receipt-panel-item label="Expected APR" value="123.12%"/>
          <receipt-panel-line />
          <receipt-panel-item-slipage />
        </receipt-panel>
      </div>

      <div v-else-if="transactionType === 1" class="flex flex-col gap-[16px] tablet:gap-[24px]">
        <div class="border rounded-[8px] bg-[var(--color-deposit-amounts-bg)]">
          <transaction-setting
              title="Withdraw"
              :coinName="withdrawTransaction.coinName"
              :coinIcon="withdrawTransaction.coinIcon"
              :amount="withdrawTransaction.amount"
              :balance="withdrawTransaction.balance"

              @focus="(focus) => {focusWithdraw = focus}"
              @update:amount="withdrawTransaction.amount = $event"
              :class="[focusWithdraw && 'bg-[var(--color-ebony-clay)]']"
          />
        </div>

        <receipt-panel>
          <receipt-panel-item label="Exchange Rate" value="1 WEMIX = 1.1212 WEMIX$"/>
          <receipt-panel-item-price-impact from="0.01%" to="0.02%"/>
          <receipt-panel-line />
          <receipt-panel-item-slipage />
        </receipt-panel>
      </div>

      <div v-else-if="transactionType === 2" class="flex flex-col gap-[16px] tablet:gap-[24px]">
        <deposit-amounts
            title=""
            simple
            :transaction1="transaction1"
            :transaction2="transaction2"
        />
        <receipt-panel-item label="Exchange Rate" value="1 WEMIX = 1.1212 WEMIX$"/>
      </div>

    </div>

    <button class="w-full btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold">Deposit</button>

  </div>
</template>

<script setup>
import {ref} from "vue";
import ModalTop from "@/components/ModalTop.vue";
import WmxSelectBar from "@/components/wmx-select/WmxSelectBar.vue";
import ReceiptPanel from "@/components/receipt-panel/ReceiptPanel.vue";
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";
import WmxPercentageTag from "@/components/wmx-label/WmxPercentageTag.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import DepositAmounts from "@/components/DepositAmounts.vue";
import TransactionSetting from "@/components/TransactionSetting.vue";
import ReceiptPanelLine from "@/components/receipt-panel/ReceiptPanelLine.vue";
import ReceiptPanelItemPriceImpact from "@/components/receipt-panel/ReceiptPanelItemPriceImpact.vue";
import ReceiptPanelItemSlipage from "@/components/receipt-panel/ReceiptPanelItemSlipage.vue";
const currencyType = ref(0)
const transactionType  = ref(0)
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
const withdrawTransaction = ref({
  coinName: 'WEMIX$',
  coinIcon: require('@/assets/dummy/avatar-004_32x32.png'),
  amount: '654,321,098',
  balance: '123567890'
})

const focusWithdraw = ref(false);
</script>

<style scoped>

</style>