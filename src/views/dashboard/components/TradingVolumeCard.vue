<template>
  <wmx-card-layout type="border">
    <div class="trading-volume-card w-full flex flex-col gap-[16px]">
      <div class="flex">
        <div class="flex-1">
          <p class="font-semibold text-[16px]">Trading Volume</p>
          <p class="font-semibold text-[32px] text-white">$2.5M</p>
          <p class="font-bold text-[14px] text-[var(--color-token-chart-plus)]">+8.63% (24h)</p>
        </div>
        <div>
          <wmx-date-unit-selector :drop-down="isMobile"/>
        </div>
      </div>

      <!-- chart -->
      <div>
        <v-chart ref="chartInstance" :option="chartOption" class="w-full h-[120px]" ></v-chart>
      </div>
    </div>
  </wmx-card-layout>
</template>

<script setup>
import {computed, inject, onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxDateUnitSelector from "@/components/wmx-select/WmxDateUnitSelector.vue";
import { position } from '@/assets/script/echart-dev';
// ECharts 구성 요소 등록
use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);
defineProps({
  name: String,
  icon: String,
  price: String,
  priceChange: String,
})
const $viewport = inject('viewport');
const isMobile = computed(() => $viewport.isMobile());
const chartInstance = ref(null);  // 차트 인스턴스

// Large Area 차트 옵션
const startDate = new Date('2021-09-01'); // 시작 날짜
const chartOption = reactive({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'var(--color-body-bg2)', // 배경색
    borderColor: 'var(--color-body-bg2)', // 테두리 색상
    borderWidth: 1, // 테두리 두께
    padding: 10, // 내부 여백
    textStyle: {
      color: 'var(--color-title-text)' // 텍스트 색상
    },
    position: position, // 툴팁 위치
  },
  grid: {
    top: 20,
    right: 40,
    left: 10,
    bottom: 30,
  },
  xAxis: {
    type: 'category',
    data: Array.from({ length: 31 }, (_, i) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i); // 하루씩 증가
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월 (2자리)
      const day = String(currentDate.getDate()).padStart(2, '0'); // 일 (2자리)
      return `${month}-${day}`; // YYYY-MM-DD 형식
    }),
    axisLabel: {
      interval: Math.floor(31/7),
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    interval: 100,
    position: 'right',
    splitLine: {
      show: false, // y축 가로 구분선(그리드 라인) 숨기기
    },
  },
  series: [
    {
      name: 'Series 1',
      type: 'bar',
      data: Array.from({ length: 31 }, () => Math.random() * 400),
      itemStyle: {
        color: '#3B82F6',
        borderRadius: [10, 10, 0, 0],
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