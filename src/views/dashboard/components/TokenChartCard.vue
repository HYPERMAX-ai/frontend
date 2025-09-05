<template>
  <wmx-card-layout >
    <div
        class="token-chart m-[-8px] tablet:mx-[-8px]
        flex tablet:flex-col gap-[8px] items-center tablet:items-stretch">
      <div class="flex tablet:hidden w-[32px] h-[32px] min-w-[32px] min-h-[32px]">
        <img :src="icon" alt="icon" class="w-full h-full"/>
      </div>
      <div class="flex flex-col flex-1 tablet:gap-[8px]">
        <div class="flex items-center gap-[8px]">
          <img :src="icon" alt="icon" class="hidden tablet:block w-[32px] h-[32px]"/>
          <span class="font-bold text-[14px]">{{ name }}</span>

          <span class="ml-auto hidden laptop:block">
            <wmx-date-unit-selector drop-down v-model="dateUnit"/>
          </span>
        </div>
        <span class="font-bold text-[24px] text-white">{{ price }}</span>
        <span class="font-bold text-[14px] text-[var(--color-token-chart-plus)]">{{ priceChange }}</span>
      </div>
      <div class="grid flex-1 gap-y-[8px]">
        <v-chart ref="chartInstance" :option="chartOption" class="w-full h-[80px] tablet:h-[47px] order-2 tablet:order-1" ></v-chart>
        <span class="block laptop:hidden ml-auto tablet:ml-0 order-1">
          <wmx-date-unit-selector drop-down v-model="dateUnit"/>
        </span>
      </div>
    </div>
  </wmx-card-layout>

</template>
<script setup>
import { onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent, ToolboxComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxDateUnitSelector from "@/components/wmx-select/WmxDateUnitSelector.vue";
// ECharts 구성 요소 등록
use([CanvasRenderer, LineChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, ToolboxComponent]);
defineProps({
  name: String,
  icon: String,
  price: String,
  priceChange: String,
})
const dateUnit = ref('day');
const chartInstance = ref(null);  // 차트 인스턴스
// Large Area 차트 옵션
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
    data: Array.from({ length: 48 }, (_, i) => {
      const hours = Math.floor(i / 4) + 8; // 08:00부터 시작, 15분 단위로 증가
      const minutes = (i % 4) * 15; // 15분 단위
      return `${hours}:${minutes === 0 ? '00' : minutes}`;  // 24시간 형식
    }),
    axisLabel: {
      interval: Math.floor(48/5),
    },
  },
  yAxis: {
    show: false,
    type: 'value',
    min: 50,
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
      data: Array.from({ length: 48 }, () => Math.random() * 100 + 100),
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


onMounted(() => {
  window.addEventListener('resize', () => {
    if (chartInstance.value) {
      chartInstance.value.resize();  // 화면 크기 변경 시 차트 크기 재조정
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    if (chartInstance.value) {
      chartInstance.value.resize();  // 화면 크기 변경 시 차트 크기 재조정
    }
  });
});
</script>
<style scoped>

</style>