<template>
  <div :wmx-uid="uid"
       @click="hover ? isTooltipVisible = true : toggleTooltip()"
       @mouseenter="hover ? isTooltipVisible = true : ''"
       @mouseleave="hover ? isTooltipVisible = false : ''"
       class="wmx-tooltip"
  >
    <slot></slot>

    <!-- 툴팁 -->
    <div v-show="isTooltipVisible" class="tooltip" :wmx-uid="uid">
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>
<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from "vue";
defineProps({
  hover: {
    type: Boolean,
    default: true
  },
});
const uid = Math.random().toString(36).substr(2, 9);
const isTooltipVisible = ref(false)
// 툴팁 토글 함수
const toggleTooltip = () => {
  isTooltipVisible.value = !isTooltipVisible.value;
};

// 툴팁 위치 조정 함수
const adjustTooltipPosition = () => {
  const tooltipElement = document.querySelector(`.tooltip[wmx-uid="${uid}"]`);
  if (!tooltipElement) return;

  const tooltipRect = tooltipElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let triangleTop = "-7px"; // 기본값
  let triangleBottom = "auto"; // 기본값
  let triangleLeft = "50%"; // 기본값
  let triangleTransform = "translateX(-50%)"; // 기본값

  // 기본 위치 조정
  const padding = 8; // 툴팁과 뷰포트 경계 사이 여백
  let offsetX = 0;
  let offsetY = 10; // 툴팁 기본 여백

  // 오른쪽 경계를 벗어나는 경우
  if (tooltipRect.right > viewportWidth) {
    offsetX = viewportWidth - tooltipRect.right - padding; // 여백
    triangleLeft = `calc(50% - ${offsetX}px)`;
  }

  // 왼쪽 경계를 벗어나는 경우
  if (tooltipRect.left < 0) {
    offsetX = -tooltipRect.left + padding; // 여백

    triangleLeft = `${tooltipRect.width - 20}px`;
  }

  // 아래쪽 경계를 벗어나는 경우
  if (tooltipRect.bottom > viewportHeight) {
    offsetY = -(tooltipRect.height + 30); // 위로 올림
    triangleTop = "auto";
    triangleBottom = "-7px";
    triangleTransform = "translateX(-50%) rotate(180deg)";
  }

  // 툴팁 위치 업데이트
  tooltipElement.style.transform = `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`;

  // 삼각형 위치 업데이트
  tooltipElement.style.setProperty("--triangle-top", triangleTop);
  tooltipElement.style.setProperty("--triangle-bottom", triangleBottom);
  tooltipElement.style.setProperty("--triangle-left", triangleLeft);
  tooltipElement.style.setProperty("--triangle-transform", triangleTransform);
};

// 다른 곳을 클릭하면 툴팁을 닫는 함수
const onClickOutside = (event) => {
  const wmxTooltipElement = event.target.closest('.wmx-tooltip');
  const tooltipElement = event.target.closest('.tooltip');
  let wmxUid = wmxTooltipElement && wmxTooltipElement.getAttribute('wmx-uid');
  wmxUid = wmxUid || tooltipElement && tooltipElement.getAttribute('wmx-uid');

  if (wmxUid !== uid) {
    isTooltipVisible.value = false;
  }
};

// 툴팁이 보이는 경우, 위치 조정
watch(isTooltipVisible, async () => {
  await nextTick(); // DOM 업데이트 이후 실행
  adjustTooltipPosition();
});

// 마운트 시, 문서 클릭 이벤트 리스너 추가
onMounted(() => {
  document.addEventListener('click', onClickOutside);
});

// 컴포넌트가 unmount 될 때, 이벤트 리스너 제거
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<style>
:root {
  --tooltip-bg-color: var(--color-body-bg2);
  --triangle-top: -7px;
  --triangle-bottom: auto;
  --triangle-left: 50%;
  --triangle-transform: translateX(-50%);
}
</style>
<style scoped>
.wmx-tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltip {
    position: absolute;
    z-index: 20;
    left: 50%;
    transform: translate(-50%, 10px); /* 수평 중앙 정렬, 수직 상단 정렬 */
    padding: 20px 16px;
    background-color: var(--tooltip-bg-color);
    border-radius: 8px;
    font-size: 14px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    transition: opacity 0.3s ease;
  }

  /* 툴팁 상단에 말풍선 모양의 삼각형 추가 */
  .tooltip::before {
    content: '';
    position: absolute;
    top: var(--triangle-top); /* 툴팁 상단과 삼각형 사이의 거리 */
    bottom: var(--triangle-bottom);
    left: var(--triangle-left);
    transform: var(--triangle-transform);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--tooltip-bg-color); /* 툴팁과 같은 색 */
  }

  .tooltip-enter-active,
  .tooltip-leave-active {
    transition: opacity 0.3s ease;
  }

  .tooltip-enter, .tooltip-leave-to {
    opacity: 0;
  }
}
</style>