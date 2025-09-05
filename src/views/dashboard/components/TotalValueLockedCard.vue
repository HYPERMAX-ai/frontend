<template>
  <wmx-card-layout type="border">
    <div class="total-value-locked-card w-full flex flex-col gap-[24px]">
      <div class="flex">
        <div class="flex-1">
          <p class="font-semibold text-[16px]">Total Value Locked</p>
          <p class="font-semibold text-[32px] text-white">$4,512,039</p>
          <p class="font-bold text-[14px] text-[var(--color-token-chart-minus)]">+2.5% (24h)</p>
        </div>
        <div>
          <wmx-date-unit-selector :drop-down="isMobile"/>
        </div>
      </div>

      <!-- buttons -->
      <div class="hidden tablet:flex gap-[16px]">
        <div class="flex-1 p-[16px] rounded-[8px] bg-[var(--color-border)]">
          <p class="text-[14px]">Stake</p>
          <p class="font-semibold text-[20px] text-white">$13.1M</p>
        </div>
        <div class="flex-1 p-[16px] rounded-[8px] bg-[var(--color-border)]">
          <p class="text-[14px]">LP</p>
          <p class="font-semibold text-[20px] text-white">$15.3M</p>
        </div>
        <div class="flex-1 p-[16px] rounded-[8px] bg-[var(--color-border)]">
          <p class="text-[14px]">Lending</p>
          <p class="font-semibold text-[20px] text-white">$12.9M</p>
        </div>
      </div>

      <!-- chart -->
      <div class="w-full">
        <v-chart ref="chartInstance" :option="chartOption" class="w-full h-[120px] laptop:h-[297px]" ></v-chart>
      </div>
    </div>
  </wmx-card-layout>
</template>

<script setup>
import {computed, inject, onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { TooltipComponent} from 'echarts/components';
import VChart from 'vue-echarts';
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxDateUnitSelector from "@/components/wmx-select/WmxDateUnitSelector.vue";
import { position } from '@/assets/script/echart-dev';
// ECharts 구성 요소 등록
use([CanvasRenderer, LineChart, TooltipComponent]);
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
const chartOption = reactive({
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
      return `
        <div class="grid p-[16px] gap-[8px] min-w-[210px] text-white font-semibold text-[14px] ">
          <p class="mb-[6px]">2024.06.28</p>
          <p class="flex items-center">
            <span class="inline-block w-[12px] h-[12px] rounded-full bg-[var(--color-token-chart-minus)]"> </span>
            <span class="ml-[4px] font-medium">Stake</span>
            <span class="ml-auto">${param.value}</span>
          </p>
          <p class="flex items-center">
            <span class="inline-block w-[12px] h-[12px] rounded-full bg-[#00B171]"> </span>
            <span class="ml-[4px] font-medium">LP</span>
            <span class="ml-auto">${param.value}</span>
          </p>
          <p class="flex items-center">
            <span class="inline-block w-[12px] h-[12px] rounded-full bg-[#3B82F6]"> </span>
            <span class="ml-[4px] font-medium">LENDING</span>
            <span class="ml-auto">${param.value}</span>
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
  yAxis: {
    type: 'value',
    min: 50,
    interval: 40,
    position: 'right',
    splitLine: {
      show: false, // y축 가로 구분선(그리드 라인) 숨기기
    },
  },
  series: [
    {
      name: 'Series 1',
      type: 'line',
      data: Array.from({ length: 48 }, () => parseFloat((Math.random() * 100 + 100).toFixed(2))),
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#FF3E14'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#FF3E1444' }, // 시작 색상
            { offset: 1, color: '#FF3E1400' }, // 끝 색상
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