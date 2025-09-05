<template>
  <wmx-modal container-class="lending-market-supply-modal pt-[16px] pb-0 px-0" v-model="modelValue">
    <template #title>
      <wmx-title class="px-[24px]" :show-refresh="false">{{ selectSupply === 0 ? 'Supply' : 'Withdraw' }}</wmx-title>
    </template>
    <template #default>
      <div class="flex flex-col gap-[24px] w-full tablet:w-[608px] px-[24px] pb-[24px]">
        <wmx-select-bar :items="['Supply', 'Withdraw']" v-model="selectSupply" />

        <transaction-setting
            title="You’re Supply"
            :coinName="fromToken.coinName"
            :coinIcon="fromToken.coinIcon"
            :amount="fromToken.amount"
            :balance="fromToken.balance"
            @focus="(focus) => {focusInput = focus}"
            @update:amount="fromToken.amount = $event"

            class="border rounded-[8px] bg-[#11182780]"
            :class="[focusInput && 'bg-[var(--color-ebony)]']"
        />

        <receipt-panel class="h-[131px] flex flex-col justify-end">
          <receipt-panel-item v-if="selectSupply === 0" label="Supply APY" value="12%" class="!font-bold" />
          <receipt-panel-item label="Current Supply" value="234.1212 > 234.1212"/>
          <receipt-panel-item label="LTV">
            <div class="flex items-center my-[-6px]">
              <span class="rounded-full bg-[var(--color-body-bg2)] px-[8px] py-[4px] font-bold text-[var(--color-active-bg)]">25%</span>
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.4693 4L5.5293 4.94L8.58263 8L5.5293 11.06L6.4693 12L10.4693 8L6.4693 4Z" fill="white"/>
                </svg>
              </span>
              <span class="rounded-full bg-[var(--color-body-bg2)] px-[8px] py-[4px] font-bold text-[var(--color-btn-active2-bg)]">70%</span>
            </div>
          </receipt-panel-item>
          <receipt-panel-item label="Borrow Limit" value="$500 > $300" />
        </receipt-panel>

        <button class="w-full btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold">
          {{ selectSupply === 0 ? 'Supply' : 'Withdraw' }}
        </button>
      </div>
    </template>
  </wmx-modal>
</template>

<script setup>
import {ref} from "vue";
import WmxModal from "@/components/wmx-modal/WmxModal.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxSelectBar from "@/components/wmx-select/WmxSelectBar.vue";
import TransactionSetting from "@/components/TransactionSetting.vue";
import ReceiptPanel from "@/components/receipt-panel/ReceiptPanel.vue";
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";

const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});

const selectSupply = ref(0);
const fromToken = ref({
  coinName: "WEMIX$",
  coinIcon: require('@/assets/dummy/avatar-002_32x32.png'),
  amount: 654321098,
  balance: "123567890",
});
const focusInput = ref(false);
</script>


<style >
.lending-market-supply-modal {

  .wmx-modal-top {
    padding: 0 0;

    .btn-close {
      margin-right: 16px;
    }
  }

  .wmx-modal-main {
    padding-top: 64px;
  }
}
</style>