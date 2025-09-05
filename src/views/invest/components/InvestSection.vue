<template>
  <div class="flex flex-col">
    <wmx-title :show-refresh="false">SmartETF</wmx-title>

    <wmx-card-layout class="mt-[24px] !p-0">
      <div class="flex flex-col tablet:flex-row px-[16px] py-[24px] gap-y-[24px] gap-x-[32px] items-start">
        <img src="@/assets/images/img_chart.png" alt="img_chart" class="w-[106px] h-[106px] my-auto"/>
        <pre class="flex-1 my-auto whitespace-pre-wrap font-semibold text-[16px]">
SmartETFs package institutional-grade crypto strategies into simple onchain tokens, listed directly on Hyperliquid spot. They give investors easy, trustless access to diversified, risk-adjusted returns with a single trade.</pre>
      </div>
    </wmx-card-layout>

    <!-- Investment Cards Section -->
    <div class="mt-[24px]">
      <div class="grid gap-[16px] grid-cols-1 laptop:grid-cols-3">
        <invest-card
          v-for="(smartETF, index) in smartETFs"
          :key="`smartETF-${index}`"
          :title="smartETF.title"
          :content="smartETF.content"
          :axis-data="smartETF.axisData"
          :series-data="smartETF.seriesData"
          :TVL="smartETF.TVL"
          :ROI="smartETF.ROI"
          :MDD="smartETF.MDD"
          @click="onClickInvest(index)"
          @changeDateUnit="(dateUnit) => onChangeDateUnit(index, dateUnit)"
          class="col-span-1 hover:!border-[var(--color-icon-path)] hover:!translate-x-[2px] hover:!translate-y-[2px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import InvestCard from "@/views/invest/components/InvestCard.vue";
import router from "@/routers";

const smartETFs = [
  {
    title: "Rates ETF",
    content: "Rates ETF captures perpetual funding yields through a delta-neutral strategy, offering stable onchain income similar to a bond ETF.",
    axisData: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'],
    seriesData: Array.from({ length: 12 }, () => Math.random() * 100 + 100),
    TVL: '300M',
    ROI: '16.15%',
    MDD: '-0.87%',
  },
  {
    title: "BTCDOM",
    content: "xDOM is a SmartETF designed to outperform Bitcoin with lower volatility by dynamically balancing BTC against the altcoin market.",
    axisData: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'],
    seriesData: Array.from({ length: 12 }, () => Math.random() * 100 + 100),
    TVL: '100M',
    ROI: '43.68%',
    MDD: '-9.34%',
  },
  {
    title: "HYPE DOM",
    content: "HYPEdom is a SmartETF that applies the xDOM methodology to HYPE, dynamically hedging against altcoins to deliver superior risk-adjusted exposure to Hyperliquid's native token.",
    axisData: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01'],
    seriesData: Array.from({ length: 12 }, () => Math.random() * 100 + 100),
    TVL: '300M',
    ROI: '23.58%',
    MDD: '-5.39%',
  }
];

const onClickInvest = (index) => {
  if (index === 0) {
    // Rates ETF - link to ratesetf page
    router.push({ path: '/ratesetf' });
  }
}

const onChangeDateUnit = (index, dateUnit) => {
  console.log('onChangeDateUnit', index, dateUnit);
}
</script>


<style scoped>

</style>