<template>
  <div class="wmx-search relative" :wmx-uid="uid">
    <wmx-input
        class="w-full"
        placeholder="Search"
        v-model="modelValue"
        @click-right="onClickClose"
        @focus="onInputFocus"
    >
      <template #left>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16667 14.1667C11.9281 14.1667 14.1667 11.9281 14.1667 9.16667C14.1667 6.40524 11.9281 4.16667 9.16667 4.16667C6.40524 4.16667 4.16667 6.40524 4.16667 9.16667C4.16667 11.9281 6.40524 14.1667 9.16667 14.1667ZM14.3286 13.3858C15.2691 12.2366 15.8333 10.7675 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C10.7675 15.8333 12.2366 15.2691 13.3858 14.3286L13.6953 14.6381L13.5774 14.7559L16.9108 18.0893L18.0893 16.9108L14.7559 13.5774L14.6381 13.6953L14.3286 13.3858Z" fill="var(--color-icon-path)"/>
        </svg>
      </template>
      <template #right>
        <svg v-if="modelValue" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM8.99999 7.86865L12 10.8687L15 7.86865L16.1314 9.00002L13.1314 12L16.1314 15L15 16.1314L12 13.1314L8.99999 16.1314L7.86862 15L10.8686 12L7.86862 9.00002L8.99999 7.86865Z" fill="var(--color-icon-path)"/>
        </svg>
      </template>
    </wmx-input>

    <!-- tooltip -->
    <div v-if="focus" class="search-results" @mousedown.stop :wmx-uid="uid">
      <slot name="results"></slot>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import WmxInput from "@/components/wmx-input/WmxInput.vue";

const uid = Math.random().toString(36).substr(2, 9);
const modelValue = defineModel({
  type: String,
  default: "",
});

const focus = ref(false);

const onClickClose = () => {
  modelValue.value = "";
  focus.value = false;
};

// Input 에서 포커스를 받을 때
const onInputFocus = () => {
  focus.value = true;
};

// 다른 곳을 클릭하면 툴팁을 닫는 함수
const onClickOutside = (event) => {
  const wmxTooltipElement = event.target.closest('.wmx-search');
  const tooltipElement = event.target.closest('.search-results');
  let wmxUid = wmxTooltipElement && wmxTooltipElement.getAttribute('wmx-uid');
  wmxUid = wmxUid || tooltipElement && tooltipElement.getAttribute('wmx-uid');

  if (wmxUid !== uid) {
    focus.value = false;
  } else {
    focus.value = true;
  }
};

// 마운트 시, 문서 클릭 이벤트 리스너 추가
onMounted(() => {
  document.addEventListener('click', onClickOutside);
});

// 컴포넌트가 unmount 될 때, 이벤트 리스너 제거
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<style scoped>
/* 검색 결과 리스트 스타일 */
.search-results {
  position: absolute;
  z-index: 1;
  top: 44px; /* input 바로 아래에 위치하도록 설정 */
  right: 0;
  margin: 0;
  width: auto;
  max-height: 300px;
  background-color: var(--color-ebony);
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 24px 24px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.3);
}
</style>