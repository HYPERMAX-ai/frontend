<template>
  <div
      class="wmx-table-head flex h-[40px] items-center text-[13px]"
      :style="headStyle"
  >
    <button class="flex items-center" @click="onClickHead">
      <slot></slot>
      <span v-if="sortOrder" class="flex w-[16px] h-[16px] justify-center items-center">
        <span class="sort-icon" :class="sortOrder"></span>
      </span>
    </button>
  </div>
</template>
<script setup>
import {computed, getCurrentInstance, ref} from "vue";
const emit = defineEmits(['click']);
const { width, sortKey } = defineProps({
  width: [String, Number] ,
  sortKey: String
})
// 정렬 상태
const sortOrder = ref('');
const onClickHead = () => {
  toggleSortOrder();
  emit('click', sortKey, sortOrder.value)
}
// 정렬 상태 변경 함수
const toggleSortOrder = () => {
  const orderList = ['', 'desc', 'asc'];
  const currentIndex = orderList.indexOf(sortOrder.value);
  sortOrder.value = orderList[(currentIndex + 1) % orderList.length];
};


// 헤더 스타일을 저장할 변수
const instance = getCurrentInstance();
const headStyle = computed(() => {
  // 헤더 스타일 계산 함수
  const calculateHeadStyle = (widthList) => {
    if (widthList.includes('')) {
      return { flex: width ? `0 0 ${width}px` : '1' }; // width가 없으면 고정 폭
    }
    return { flex: width ? `${width} 0 0` : '1' }; // width가 있으면 flex-grow
  };
  const parentComponent = instance?.proxy.$parent;

  // 형제 컴포넌트들의 width 속성 가져오기
  const headerList = parentComponent?.$slots.header?.().filter(item => {
    return typeof(item.type) === 'object'
  });
  const widthList = headerList?.map(item => item.props?.width || '');

  // 계산된 스타일을 적용
  if (widthList) {
    return calculateHeadStyle(widthList);
  }
  return {};
})

</script>

<style scoped>
.wmx-table-head {
  color: var(--color-table-header-text);

  button:active {
    transform: translateY(2px);
  }
}
</style>