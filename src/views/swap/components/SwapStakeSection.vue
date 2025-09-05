<template>
  <section class="border rounded-[8px] bg-[var(--color-body-bg3)]">
    <article class="rounded-t border-bottom ">
      <transaction-setting
          title="Input"
          key="input"
          :coinName="fromToken.coinName"
          :coinIcon="fromToken.coinIcon"
          :amount="fromToken.amount"
          :balance="fromToken.balance"
          @focus="(focus) => {focusInput = focus}"
          @update:amount="fromToken.amount = $event"

          class="transaction-setting"
          :class="[focusInput && 'rounded-t-[16px] bg-[var(--color-body-bg2)]']"
      >
        <template #token>
          <div
              class="btn-action my-auto flex items-center p-[6px] rounded-full bg-[var(--color-side-menu-active-bg)] cursor-pointer box-border
              hover:!translate-x-[2px] hover:!translate-y-[2px] hover:bg-[var(--color-icon-path)] "
              @click="onClickStake('from')"
          >
            <wmx-icon-label class="text-[15px] tablet:text-[17px] text-[var(--color-body-text)]" :label="fromToken.coinName" :subLabel="fromToken.subTitle" :src="fromToken.coinIcon"/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.70492L16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492Z" fill="#9097A6"/>
            </svg>
          </div>
        </template>
      </transaction-setting>

      <div class="relative grid items-center">
        <line class="absolute top-1/2 left-0 right-0 h-[1px] transform bg-[var(--color-border)]"/>
        <button class="btn-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[6px] bg-[var(--color-active-bg)]"
                @click="onClickTransactionChange">
          <img src="@/assets/icons/ic_arrow_transfer.svg" alt="ic_arrow_transfer" class="w-[24px] h-[24px]"/>
        </button>
      </div>
      <transaction-setting
          title="Output"
          key="output"
          hiddenPercentSelector
          :coinName="toToken.coinName"
          :coinIcon="toToken.coinIcon"
          :amount="toToken.amount"
          :balance="toToken.balance"
          @focus="(focus) => {focusOutput = focus}"
          @update:amount="toToken.amount = $event"

          class="transaction-setting"
          :class="[focusOutput && 'rounded-t-[16px] bg-[var(--color-body-bg2)]']"
      >
        <template #token>
          <div
              class="btn-action my-auto flex items-center p-[6px] rounded-full bg-[var(--color-side-menu-active-bg)] cursor-pointer box-border
              hover:!translate-x-[2px] hover:!translate-y-[2px] hover:bg-[var(--color-icon-path)] "
              @click="onClickStake('to')"
          >
            <wmx-icon-label class="text-[15px] tablet:text-[17px] text-[var(--color-body-text)]" :label="toToken.coinName" :subLabel="toToken.subTitle" :src="toToken.coinIcon"/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.70492L16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492Z" fill="#9097A6"/>
            </svg>
          </div>
        </template>
      </transaction-setting>
    </article>

    <div class="pt-[8px] pb-[16px] px-[16px]">
      <receipt-panel>
        <receipt-panel-item label="Exchange Rate" value="1 WEMIX = 1.1212 WEMIX$" class="!py-[4px]"/>
        <receipt-panel-item label="Minimum Received" value="1200.002 WEMIX$" class="!py-[4px]"/>

        <receipt-panel-line />
        <receipt-panel-item-slipage class="!py-[4px]"/>

        <receipt-panel-line />

        <receipt-panel-item label="Fee" value="1.1212 WEMIX$" class="!py-[4px]"/>
        <receipt-panel-item label="Routes" class="!py-[4px]">
          <div class="flex gap-[4px] items-center font-bold">
            <wmx-percentage-tag class="!bg-[var(--color-side-menu-active-bg)]">25%</wmx-percentage-tag>
            <span class="flex">
                <img :src="require('@/assets/dummy/avatar-007_32x32.png')" alt="avatar-007" class="w-[24px] h-[24px] border rounded-full"/>
                <img :src="require('@/assets/dummy/avatar-008_32x32.png')" alt="avatar-008" class="w-[24px] h-[24px] border rounded-full"/>
              </span>
            <span class="font-bold">0.25%</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.585 5.5L6.795 2.705L7.5 2L11.5 6L7.5 10L6.795 9.295L9.585 6.5L0.5 6.5V5.5L9.585 5.5Z" fill="white"/>
            </svg>
            <span class="flex">
                <img :src="require('@/assets/dummy/avatar-007_32x32.png')" alt="avatar-007" class="w-[24px] h-[24px] border rounded-full"/>
                <img :src="require('@/assets/dummy/avatar-010_32x32.png')" alt="avatar-010" class="w-[24px] h-[24px] border rounded-full"/>
              </span>
            <span class="font-bold">0.25%</span>
          </div>
        </receipt-panel-item>
        <receipt-panel-item label="" class="!py-[4px]">
          <div class="flex gap-[4px] items-center font-bold">
            <wmx-percentage-tag class="!bg-[var(--color-side-menu-active-bg)]">25%</wmx-percentage-tag>
            <span class="flex">
                <img :src="require('@/assets/dummy/avatar-004_32x32.png')" alt="avatar-004" class="w-[24px] h-[24px] border rounded-full"/>
                <img :src="require('@/assets/dummy/avatar-006_32x32.png')" alt="avatar-006" class="w-[24px] h-[24px] border rounded-full"/>
              </span>
            <span class="font-bold">0.25%</span>
          </div>
        </receipt-panel-item>
      </receipt-panel>
      <div class="pt-[8px]">
        <button class="w-full btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold">Swap</button>
      </div>
    </div>
  </section>

  <!-- modal -->
  <select-a-token-modal v-model="isStakeModalOpen"/>
</template>

<script setup>
import {ref} from "vue";
import TransactionSetting from "@/components/TransactionSetting.vue";
import SelectATokenModal from "@/views/modal/SelectATokenModal.vue";
import ReceiptPanel from "@/components/receipt-panel/ReceiptPanel.vue";
import ReceiptPanelItem from "@/components/receipt-panel/ReceiptPanelItem.vue";
import ReceiptPanelLine from "@/components/receipt-panel/ReceiptPanelLine.vue";
import ReceiptPanelItemSlipage from "@/components/receipt-panel/ReceiptPanelItemSlipage.vue";
import WmxPercentageTag from "@/components/wmx-label/WmxPercentageTag.vue";
import WmxIconLabel from "@/components/wmx-label/WmxIconLabel.vue";

const fromToken = ref({
  coinName: "WEMIX$",
  coinIcon: require('@/assets/dummy/avatar-004_32x32.png'),
  amount: 654321098,
  balance: "123567890"
});
const toToken = ref({
  coinName: "StWEMIX",
  coinIcon: require('@/assets/dummy/avatar-008_32x32.png'),
  amount: 54321098,
  balance: "23567890"
});
const focusInput = ref(false);
const focusOutput = ref(false);

const onClickTransactionChange = () => {
  [fromToken.value, toToken.value] = [toToken.value, fromToken.value];
};

const isPopupTarget = ref('');
const isStakeModalOpen = ref(false);
const onClickStake = (fromTo) => {
  isPopupTarget.value = fromTo
  isStakeModalOpen.value = true;
};
</script>
<style scoped>
.transaction-setting::v-deep(.transaction-setting-container) {
  padding: 8px 16px;
  gap: 8px;
}
</style>