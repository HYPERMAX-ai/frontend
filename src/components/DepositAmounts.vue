<template>
  <div class="deposit-amounts flex flex-col gap-[8px] bg-">
    <!-- header -->
    <div v-if="title" class="flex flex-wrap items-center">
      <span class="text-[16px] font-semibold">{{ title }}</span>
    </div>

    <!-- body -->
    <article class="border rounded">
      <transaction-setting
          :title="transaction1.title"
          :coinName="transaction1.coinName"
          :coinIcon="transaction1.coinIcon"
          :amount="transaction1.amount"
          :balance="transaction1.balance"
          :simple="simple"
          :percent="75"

          @focus="(focus) => {focusInput = focus}"
          @update:amount="fromToken.amount = $event"
          :class="[focusInput && 'bg-[var(--color-ebony-clay)]']"
      />
      <div class="h-0 relative grid items-center">
        <line class="absolute top-1/2 left-0 right-0 h-[1px] transform bg-[var(--color-border)]"/>
        <button class="btn-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[6px] bg-[var(--color-active-bg)]">
          <img src="@/assets/icons/ic_add.svg" alt="ic_add" class="w-[24px] h-[24px]"/>
        </button>
      </div>
      <transaction-setting
          :title="transaction2.title"
          :coinName="transaction2.coinName"
          :coinIcon="transaction2.coinIcon"
          :amount="transaction2.amount"
          :balance="transaction2.balance"
          :simple="simple"
          :percent="100"

          @focus="(focus) => {focusOutput = focus}"
          @update:amount="toToken.amount = $event"
          :class="[focusOutput && 'bg-[var(--color-ebony-clay)]']"
      />
    </article>
  </div>
</template>

<script setup>
import TransactionSetting from "@/components/TransactionSetting.vue";
import {ref} from "vue";
const { title, transaction1, transaction2 } = defineProps({
  title: {
    type: String,
    default: "Deposit Amounts"
  },
  simple: Boolean,
})
const fromToken = defineModel('transaction1', {
  prop: {
    type: Object,
    default: () => {
      return {
        title: "You Pay",
        coinName: "WEMIX$",
        coinIcon: require('@/assets/dummy/avatar-004_32x32.png'),
        amount: 654321098,
        balance: "123567890"
      }
    }
  },
  event: "update:transaction1",
});
const toToken = defineModel('transaction2', {
  prop: {
    type: Object,
    default: () => {
      return {
        title: "You’re Recieve",
        coinName: "StWEMIX",
        coinIcon: require('@/assets/dummy/avatar-008_32x32.png'),
        amount: 654321098,
        balance: "123567890"
      }
    }
  },
  event: "update:transaction2",
});

const focusInput = ref(false);
const focusOutput = ref(false);
</script>
<style>
:root {
  --color-deposit-amounts-bg: var(--color-ebony);
  --color-deposit-amounts-text: var(--color-river-bed);
}
</style>
<style scoped>
.deposit-amounts {

  article {
    background-color: var(--color-value-stepper-bg);
  }

}

</style>