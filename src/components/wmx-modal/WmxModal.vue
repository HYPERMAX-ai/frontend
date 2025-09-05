<template>
  <teleport to="body">
    <div v-if="modelValue"
         class="wmx-modal fixed top-0 left-0 pl-0 laptop:pl-[256px] right-0 bottom-0 inset-0 z-50 flex items-end tablet:items-center justify-center"
         @click.self="closeModal">

      <div
          :class="['wmx-modal-container flex flex-col p-[8px]', containerClass]"
          class="
            w-full tablet:w-auto max-w-[100%] min-w-[360px] max-h-svh tablet:max-h-[calc(100svh-56px)]
            rounded-t-[16px] tablet:rounded-[16px] mt-auto tablet:my-auto border"
          :style="{ transform: `translateY(${translateY}px)` }"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
      >
        <div class="relative overflow-hidden">
          <!-- Top -->
          <div class="wmx-modal-top flex items-center py-[10px] absolute top-0 left-0 right-0 z-50">
            <slot name="title">
              <span class="px-[8px] font-bold text-[24px]">{{ title }}</span>
            </slot>

            <!-- Close Button -->
            <button class="btn-close flex ml-auto w-[40px] h-[40px] " @click="closeModal">
              <img :src="require('@/assets/icons/ic_close.svg')" alt="ic_close" class="m-auto"/>
            </button>
          </div>

          <div class="wmx-modal-main pt-[60px] ">
            <!-- SubTop-->
            <slot name="subTop"></slot>
            <!-- Content -->
            <div
                class="wmx-modal-content overflow-y-auto overflow-x-hidden"
                @click.stop
                @touchstart.stop
                @touchmove.stop
                @touchend.stop
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import {inject, ref, watch} from "vue";
const $viewport = inject('viewport');

const { title, containerClass } = defineProps({
  title: String,
  containerClass: {
    type: String,
    default: '',
  },
});
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});

// 스크롤 관련 변수
const translateY = ref(0); // 모달 이동 거리
const startY = ref(0); // 터치 시작 위치
const isClosing = ref(false); // 닫히는 중인지 상태 관리

// modal 을 띄우면 body 의 스크롤을 막기 위해 overflow: hidden 으로 변경
watch(() => modelValue.value, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
})

// Close modal
const closeModal = () => {
  if (isClosing.value) return; // 이미 닫히는 중이면 중복 실행 방지
  isClosing.value = true;
  translateY.value = window.innerHeight; // 화면 아래로 이동

  modelValue.value = false; // 모달 비활성화
  translateY.value = 0; // 위치 초기화
  isClosing.value = false; // 상태 초기화
};

// Touch event handlers
const onTouchStart = (e) => {
  if ($viewport.hasTarget('tablet')) return; // 모바일 화면에서만 동작

  startY.value = e.touches[0].clientY; // 터치 시작 위치 저장
};
const onTouchMove = (e) => {
  if ($viewport.hasTarget('tablet')) return; // 모바일 화면에서만 동작

  const currentY = e.touches[0].clientY;
  const delta = currentY - startY.value;

  // 아래로 드래그 시에만 translateY 변경
  if (delta > 0) {
    translateY.value = delta;
  }
};

const onTouchEnd = () => {
  if ($viewport.hasTarget('tablet')) return; // 모바일 화면에서만 동작

  if (translateY.value > 150) {
    // 드래그가 150px 이상이면 모달 닫기
    closeModal();
  } else {
    // 드래그가 부족하면 모달 복원
    translateY.value = 0;
  }
};
</script>

<style scoped>
.wmx-modal {
  font-family: 'Pretendard Variable', Avenir, Helvetica, Arial, sans-serif;
  background: var(--color-modal-dim);

  .wmx-modal-container {
    background: var(--color-modal-bg);
    box-shadow: 0 24px 24px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.1);

    .wmx-modal-top {
      background-color: var(--color-modal-bg);
    }

    .wmx-modal-content {
      /* 56px : nav 높이 */
      /* 72px : title 높이 (padding 포함) */
      max-height: calc(100svh - 56px - 78px);
    }
  }

  .btn-close:active {
    transform: translate(2px, 2px);
  }
}

</style>