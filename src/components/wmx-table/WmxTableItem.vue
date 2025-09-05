<template>
  <div
      class="wmx-table-item min-h-[40px]
      py-[8px] tablet:py-[16px] laptop:py-[20px] px-[12px] tablet:px-[16px] laptop:px-[24px]
      text-[13px] tablet:text-[14px] font-semibold"
  >
    <div class="hidden tablet:grid items-center" :style="headStyle">
      <slot name="default"></slot>
    </div>
    <div class="block tablet:hidden">
      <slot name="mobile" :headStyle="headStyle">
        <div class="grid items-center" :style="headStyle">
          <slot name="default"></slot>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup>
import {computed, getCurrentInstance} from "vue";
const instance = getCurrentInstance();
const headStyle = computed(() => {
  // 헤더 스타일 계산 함수
  const calculateHeadStyle = (widthList) => {
    // 빈 값이 있을 경우 1fr로 변환
    if (widthList.includes('')) {
      widthList = widthList.map(width => width ? `${width}px` : '1fr');
    }
    // 빈 값이 없을 경우 fr로 변환
    else {
      widthList = widthList.map(width => `${width}fr`);
    }
    return { gridTemplateColumns: widthList.join(' ') };
  };
  // 부모 컴포넌트에서 전달되는 슬롯을 직접 참조하여 형제 컴포넌트 정보 얻기
  const parentComponent = instance?.proxy.$parent;

  // Header 컴포넌트들의 width 속성 가져오기
  const headerList = parentComponent?.$slots.header?.().filter(item => {
    return typeof(item.type) === 'object'
  });
  const widthList = headerList?.map(item => item.props?.width || '');
  return calculateHeadStyle(widthList);
});
</script>

<style scoped>
.wmx-table-item {
  border-bottom: 1px solid var(--color-border);
}
.wmx-table-item:last-child {
  border-bottom: none;
}
</style>