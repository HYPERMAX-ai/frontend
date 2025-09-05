<template>
  <div class="maxhype-card flex flex-col gap-[20px]">
    <div class="flex justify-between items-center">
      <wmx-title :show-refresh="false">Rates ETF</wmx-title>
      <button class="btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold px-[16px] py-[8px] text-[14px]">
        Trade
      </button>
    </div>

    <wmx-card-layout type="border">
      <!-- Description -->
      <div class="mb-[24px] tablet:mb-[32px]">
        <div class="flex flex-col gap-[4px] mb-[8px]">
          <span class="font-semibold text-[var(--color-title-text2)] text-[12px]">Description</span>
        </div>
        <p class="text-[14px] tablet:text-[16px] font-medium text-[var(--color-body-text)] leading-relaxed">
          Funding Rate ETF captures perpetual funding yields through a delta-neutral strategy, offering stable onchain income similar to a bond ETF.
        </p>
      </div>

      <!-- info -->
      <div class="flex flex-wrap justify-between gap-[16px]">
        <div class="flex flex-col gap-[4px]">
          <span class="font-semibold text-[var(--color-title-text2)] text-[12px]">Total Shares</span>
          <span class="font-bold text-[16px] whitespace-nowrap">123,456,789 HYPE</span>
        </div>
        <div class="flex flex-col gap-[4px]">
          <span class="font-semibold text-[var(--color-title-text2)] text-[12px]">AUM </span>
          <span class="font-bold text-[16px] ">$123,456,789</span>
        </div>
        <div class="flex flex-col gap-[4px]">
          <span class="font-semibold text-[var(--color-title-text2)] text-[12px]">APY </span>
          <span class="font-bold text-[16px] ">13.58%</span>
        </div>
      </div>

      <!-- graph -->
      <div class="flex flex-col gap-[16px] tablet:gap-[24px] mt-[24px] tablet:mt-[32px] bg-[var(--color-body-bg)] rounded-[12px] ">
        <wmx-select-bar :items="['Performance', 'Total Staked']" v-model="graphType"/>
        <div v-if="graphType === 0" class="flex flex-wrap justify-between">
          <div class="order-1">
            <p class="font-bold text-[26px] text-white">15.38%</p>
            <p class="font-medium text-[12px]">since 2024-11-04</p>
          </div>
          <div class="order-1">
            <p class="font-medium text-[12px]">Days in Operation</p>
            <p class="font-bold text-[16px] text-white">100d</p>
          </div>
        </div>
        <div v-if="graphType === 1" class="flex flex-wrap justify-between">
          <div class="order-1">
            <p class="font-bold text-[26px] text-white">123,456,789 HYPE</p>
            <p class="font-medium text-[12px]">
              <span class="font-normal text-[var(--color-token-chart-plus)]">+8.63% (24h)</span>
              Past 1W</p>
          </div>
          <div class="order-1">
            <p class="font-medium text-[12px]">Users</p>
            <p class="font-bold text-[16px] text-white">1,000</p>
          </div>
        </div>

        <wmx-date-unit-selector
            v-model="dateUnit"
            class="w-full"/>

        <div class="w-full">
          <v-chart ref="chartInstance" :option="chartOption" class="w-full h-[154px] tablet:h-[360px] desktop:h-[254px]" ></v-chart>
        </div>
      </div>
    </wmx-card-layout>
  </div>
</template>
<script setup>
import {onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxSelectBar from "@/components/wmx-select/WmxSelectBar.vue";
import {position} from "@/assets/script/echart-dev";
import VChart from "vue-echarts";
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {LineChart} from "echarts/charts";
import {GridComponent, TooltipComponent} from "echarts/components";
import WmxDateUnitSelector from "@/components/wmx-select/WmxDateUnitSelector.vue";
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
use([GridComponent, CanvasRenderer, LineChart, TooltipComponent]);
const graphType = ref(0);
const dateUnit = ref('day');
const chartInstance = ref(null);  // 차트 인스턴스

// 데이터 세트 정의
const dataSets = [
  Array.from({ length: 48 }, () => parseFloat((Math.random() * 100 + 100).toFixed(2))), // Performance
  Array.from({ length: 48 }, () => parseFloat((Math.random() * 100000000).toFixed(0))) // Total Staked
];
const yAxisSettings = [
  {
    type: 'value',
    min: 50,
    interval: 20,
    position: 'right',
    splitLine: {
      show: false, // y축 가로 구분선(그리드 라인) 숨기기
    },
  },
  {
    type: 'value',
    min: 0,
    interval: 10000000,
    position: 'right',
    splitLine: {
      show: false, // y축 가로 구분선(그리드 라인) 숨기기
    },
  }
];

const chartOption = reactive({
  animationDuration: 300, // 애니메이션 지속 시간
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'var(--color-body-bg2)', // 배경색
    borderColor: 'var(--color-body-bg2)', // 테두리 색상
    borderWidth: 1, // 테두리 두께
    padding: 0, // 내부 여백
    borderRadius: 12,
    textStyle: {
      color: 'var(--color-title-text)' // 텍스트 색상
    },
    position: position,
    formatter: (params) => {
      const param = params[0];
      const comma = (value) => {
        const [integerPart, decimalPart] = value.toString().split(".");
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
      };
      return graphType.value === 0 ? `
        <div class="grid p-[16px] gap-[8px] min-w-[210px] text-white font-semibold text-[14px] ">
          <p class="mb-[6px]">2024.06.28</p>
          <p class="flex items-center">
            <span class="inline-block w-[12px] h-[12px] rounded-full bg-[var(--color-active-bg)]"> </span>
            <span class="ml-[4px] font-medium">Cumulative Returns</span>
            <span class="ml-auto pl-[8px]">${param.value}</span>
          </p>
        </div>
      ` : `
        <div class="grid p-[16px] gap-[8px] min-w-[210px] text-white font-semibold text-[14px] ">
          <p class="mb-[6px]">2024.06.28</p>
          <p class="flex items-center">
            <span class="inline-block w-[12px] h-[12px] rounded-full bg-[var(--color-active-bg)]"> </span>
            <span class="ml-[4px] font-medium">${comma(param.value)} HYPE</span>
          </p>
          <p class="flex items-center">
            <span class="ml-[16px] font-medium">= ${comma(param.value * 33.58)} USD</span>
          </p>
        </div>
      `;
    }
  },
  grid: {
    top: 20,
    right: 40,
    left: 10,
    bottom: 30,
  },
  xAxis: {
    type: 'category',
    data: Array.from({ length: 48 }, (_, i) => {
      const hours = Math.floor(i / 4) + 8; // 08:00부터 시작, 15분 단위로 증가
      const minutes = (i % 4) * 15; // 15분 단위
      return `${hours}:${minutes === 0 ? '00' : minutes}`;  // 24시간 형식
    }),
    axisLabel: {
      interval: Math.floor(48/5),
    },
  },
  yAxis: yAxisSettings[0],
  series: [
    {
      name: 'Series 1',
      type: 'line',
      data: dataSets[0],
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#75FFD3'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#75FFD344' }, // 시작 색상
            { offset: 1, color: '#75FFD300' }, // 끝 색상
          ],
          global: false, // 색상의 방향 설정
        },
      },
      symbol: 'none',
    },
  ],
});

// 브라우저 사이즈 변경시 차트 리사이즈
const resizeHandler = () => {
  if (chartInstance.value) {
    chartInstance.value.resize();
  }
};

// graphType 변경 시 series 데이터 업데이트
watch(graphType, (newVal) => {
  chartOption.series[0].data = dataSets[newVal];
  chartOption.yAxis = yAxisSettings[newVal];

  if (newVal === 1) {
    chartOption.grid.right = 80;
  } else {
    chartOption.grid.right = 40;
  }
});
onMounted(() => {
  window.addEventListener('resize', resizeHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<style scoped>
</style>