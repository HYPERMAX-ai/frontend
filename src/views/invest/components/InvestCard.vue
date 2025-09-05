<template>
  <wmx-card-layout class="!px-[16px] !py-[24px]">
    <div class="flex flex-col h-full">
      <wmx-title :show-refresh="false" class="!text-[16px] !tablet:text-[20px]">{{ title }}</wmx-title>

      <!-- content -->
      <div v-html="content" class="flex-1 mt-[8px] font-normal text-[12px]"/>

      <!-- chart -->
      <div class="mt-[32px] w-full">
        <v-chart ref="chartInstance" :option="chartOption" class="w-full h-[80px] order-2 tablet:order-1" ></v-chart>
      </div>

      <!-- date unit -->
      <wmx-date-unit-selector class="mt-[8px]" v-model="dateUnit"/>

      <!-- info -->
      <ul class="mt-[16px] flex flex-col gap-[16px] border rounded-[8px] text-[14px]
                  py-[16px] px-[16px] laptop:py-[18px] laptop:px-[20px]">
        <li class="flex items-center">
          <span class="w-[48px] font-bold">TVL</span>
          <span class="font-semibold">{{ TVL }}</span>
        </li>
        <li class="flex items-center">
          <span class="w-[48px] font-bold">ROI</span>
          <span class="font-semibold">{{ ROI }}</span>
        </li>
        <li class="flex items-center">
          <span class="w-[48px] font-bold">MDD</span>
          <span class="font-semibold">{{ MDD }}</span>
        </li>
      </ul>

      <!-- button -->
      <div class="pt-[24px]">
        <button
            @click="onClickInvest"
            class="w-full btn-radius bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-semibold"
        >More</button>
      </div>
    </div>
  </wmx-card-layout>
</template>

<script setup>
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import VChart from "vue-echarts";
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {LineChart} from "echarts/charts";
import {GridComponent, TooltipComponent} from "echarts/components";
import {onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import WmxDateUnitSelector from "@/components/wmx-select/WmxDateUnitSelector.vue";
use([GridComponent, CanvasRenderer, LineChart, TooltipComponent]);
const emit = defineEmits(["click", "changeDateUnit"]);
const { axisData, seriesData } = defineProps({
  title: String,
  content: String,
  axisData: Array,
  seriesData: Array,
  TVL: String,
  ROI: String,
  MDD: String,
})
const chartInstance = ref(null);  // 차트
const dateUnit = ref('day');  // 날짜 단위

const onClickInvest = () => {
  emit("click")
}

const chartOption = reactive({
  tooltip: {
    trigger: 'axis',
    show: false,
  },
  grid: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  xAxis: {
    show: false,
    type: 'category',
    data: axisData ? axisData : [],
    axisLabel: {
      interval: axisData ? Math.floor(axisData.length/5) : 50,
    },
  },
  yAxis: {
    show: false,
    type: 'value',
    min: 0,
    interval: 20,
    position: 'right',
    splitLine: {
      show: false, // y축 가로 구분선(그리드 라인) 숨기기
    },
  },
  series: [
    {
      name: 'Series 1',
      type: 'line',
      data: seriesData,
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#00B171'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#DEF9F033' }, // 시작 색상
            { offset: 1, color: '#DEF9F000' }, // 끝 색상
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

watch(() => dateUnit.value, () => {
  emit("changeDateUnit", dateUnit.value);
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