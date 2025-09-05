<template>
  <div>
    <wmx-title class="mb-[20px]">Staking</wmx-title>
    <wmx-card-layout class="!p-0 tablet:p-0">
      <div class="staking-card flex flex-col">

        <article class="flex flex-col gap-[8px] tablet:gap-[16px] px-[16px] py-[16px] tablet:py-[20px] border-bottom">
          <wmx-select-bar
              :items="['Staking', 'Unstaking']"
              :options="{
              container: {
                bg: 'bg-[var(--color-body-bg)]'}
            }"
              v-model="selected"
          />
          <div v-if="selected === 0" class="flex justify-end items-center">
            <span class="mr-[16px] font-medium text-[13px] text-white">Swap for 2.12% Cheaper</span>
            <button class="btn-radius flex items-center bg-[var(--color-body-text)] text-[var(--color-body-bg2)] shadow-0224">
              <span class="font-semibold text-[14px]">Go to Swap</span>
              <span class="w-[16px] h-[16px] ml-[8px]">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99935 3.16699L7.05935 4.10699L10.7793 7.83366H2.66602V9.16699H10.7793L7.05935 12.8937L7.99935 13.8337L13.3327 8.50033L7.99935 3.16699Z" fill="var(--color-body-bg2)"/>
              </svg>
            </span>
            </button>
          </div>
        </article>

        <article class="border-bottom ">
          <transaction-setting
              key="input"
              title="Input"
              :sub-title="fromToken.subTitle"
              :coinName="fromToken.coinName"
              :coinIcon="fromToken.coinIcon"
              :amount="fromToken.amount"
              :balance="fromToken.balance"
              @focus="(focus) => {focusInput = focus}"
              @update:amount="fromToken.amount = $event"

              class="pb-[8px]"
              :class="[focusInput && 'bg-[var(--color-body-bg2)]']"
          />
          <div v-if="selected === 0" class="h-0 relative grid items-center">
            <line class="absolute top-1/2 left-0 right-0 h-[1px] transform bg-[var(--color-border)]"/>
            <button class="btn-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[6px] bg-[var(--color-active-bg)]">
              <img src="@/assets/icons/ic_arrow_down.svg" alt="ic_arrow_transfer" class="w-[24px] h-[24px]"/>
            </button>
          </div>
          <div v-if="selected === 0"
               class="border-bottom pt-[8px] pb-0 tablet:pb-[16px]"
               :class="[focusOutput && 'bg-[var(--color-body-bg2)]']"
          >
            <div class="grid p-[16px] pt-[8px] tablet:pt-[16px] gap-[16px]">
              <div class="flex flex-wrap items-center">
                <span class="text-[14px] tablet:text-[16px] font-semibold">Output</span>
              </div>
              <div class="grid gap-[4px]">
                <p class="flex flex-nowrap font-bold">
                <span class="flex gap-[4px]">
                  <wmx-icon-label
                      class="text-[18px]"
                      :label="toToken.coinName"
                      :subLabel="toToken.subTitle"
                      :src="toToken.coinIcon"/>
                </span>
                  <span class="ml-auto" >
                  <wmx-input
                      type="number"
                      useComma
                      readonly
                      v-model="toToken.amount"
                      @focusin="focusOutput = true"
                      @focusout="focusOutput = false"
                      class="wmx-input-to text-right my-auto"
                  />
                </span>
                </p>
              </div>
            </div>
          </div>
        </article>

        <article class="px-[16px] py-[16px] tablet:py-[20px]">
          <receipt-panel v-if="selected === 0" >
            <receipt-panel-item label="Exchange Rate" value="1 HYPE = 1.1212 HYPE$" class="my-[-4px]"/>
            <receipt-panel-item label="Expected APR" value="1.1212 WEMIX$"/>
          </receipt-panel>
          <receipt-panel v-if="selected === 1">
            <receipt-panel-item label="Exchange Rate" value="1 HYPE = 1.1212 HYPE$"/>
            <receipt-panel-item label="Expected APR" value="1.1212 WEMIX$"/>
            <receipt-panel-item label="Receive Amount" value="100.1234 WEMIX"/>
            <receipt-panel-item label="Withdrawable" value="After about 7 days (2024-10-01)"/>
          </receipt-panel>

          <div class="flex flex-col mt-[16px] tablet:mt-[24px] gap-[8px]">
            <button class="w-full btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold">Stake</button>
          </div>
        </article>

      </div>
    </wmx-card-layout>
  </div>
</template>
<script setup>

import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxSelectBar from "@/components/wmx-select/WmxSelectBar.vue";
import TransactionSetting from "@/components/TransactionSetting.vue";
import {ref} from "vue";
import WmxIconLabel from "@/components/wmx-label/WmxIconLabel.vue";
import ReceiptPanel from "@/components/receipt-panel/ReceiptPanel.vue";
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";
import WmxInput from "@/components/wmx-input/WmxInput.vue";

const selected = ref(0);
const fromToken = ref({
  coinName: "HYPE",
  subTitle: "HYPE",
  coinIcon: require('@/assets/dummy/avatar-004_32x32.png'),
  amount: 654321098,
  balance: "123567890"
});

const toToken = ref({
  coinName: "maxHYPE",
  subTitle: "MAX Staked HYPE",
  coinIcon: require('@/assets/dummy/avatar-004_32x32.png'),
  amount: "0.0",
});

const focusInput = ref(false);
const focusOutput = ref(false);

</script>

<style scoped>
.wmx-input-to::v-deep(input) {
  background-color: transparent;
  border: none;
  font-size: 27px;
  color: var(--color-active-bg);
  padding: 0;
}
</style>