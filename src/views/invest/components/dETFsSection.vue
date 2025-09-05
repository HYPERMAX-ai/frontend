<template>
  <div>
    <wmx-title :show-refresh="false" class="border-bottom mb-[16px] px-[8px] py-[16px]" >dETFs</wmx-title>

    <div class="grid gap-[16px] grid-cols-1 laptop:grid-cols-3">
      <invest-card
        v-for="(dETF, index) in dETFs"
        :key="`dETF-${index}`"
        :title="dETF.title"
        :content="dETF.content"
        :axis-data="dETF.axisData"
        :series-data="dETF.seriesData"
        :TVL="dETF.TVL"
        :ROI="dETF.ROI"
        :MDD="dETF.MDD"
        @click="onClickInvest(index)"
        @changeDateUnit="(dateUnit) => onChangeDateUnit(index, dateUnit)"
        class="col-span-1 hover:!border-[var(--color-icon-path)] hover:!translate-x-[2px] hover:!translate-y-[2px]"
      />
    </div>
  </div>
</template>

<script setup>
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import InvestCard from "@/views/invest/components/InvestCard.vue";
import router from "@/routers";
const dETFs = [
  {
    title: "maxHLP",
    content: "maxHLP tokenizes Hyperliquidity Provider Vault developed by Hyperliquid Team.",
    axisData: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'],
    seriesData: Array.from({ length: 12 }, () => Math.random() * 100 + 100),
    TVL: '300M',
    ROI: '23.58%',
    MDD: '-5.39%',
  },
  {
    title: "BTC Dynamic Hedge",
    content: "Long BTC and hedge by shorting top 10 altcoins. Aims to achieve better risk-adjusted return than Bitcoin.",
    axisData: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'],
    seriesData: Array.from({ length: 12 }, () => Math.random() * 100 + 100),
    TVL: '300M',
    ROI: '23.58%',
    MDD: '-5.39%',
  },
  {
    title: "BTC Dominance Hedge",
    content: "Long BTC and hedge by shorting top 10 altcoins. Aims to achieve better risk-adjusted return than Bitcoin.",
    axisData: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'],
    seriesData: Array.from({ length: 12 }, () => Math.random() * 100 + 100),
    TVL: '300M',
    ROI: '23.58%',
    MDD: '-5.39%',
  }
];

const onClickInvest = (index) => {
  if (index === 0) {
    router.push({ name: 'maxhlpView' });
  }
}
const onChangeDateUnit = (index, dateUnit) => {
  console.log('onChangeDateUnit', index, dateUnit);
}
</script>


<style scoped>

</style>