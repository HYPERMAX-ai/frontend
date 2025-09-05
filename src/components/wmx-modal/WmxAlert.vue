<template>
  <teleport to="body">
    <div v-if="modelValue"
         class="wmx-alert fixed top-0 left-0 right-0 inset-0 z-50 flex items-center justify-center"
         :class="{'bottom-0': bottomSheet, 'top-0': !bottomSheet}">

      <div
          class="wmx-alert-container w-[328px] tablet:w-[400px] p-[16px] tablet:p-[24px]
          bg-[var(--color-body-bg)] rounded-[24px] tablet:rounded-[32px] relative"
          :class="{'bottom-sheet': bottomSheet}">
        <p v-if="useClose" class="flex justify-end mb-[8px]">
          <button class="btn-action m-[-8px] p-[8px]" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="var(--color-body-text)"/>
            </svg>
          </button>
        </p>
        <div class="mb-[16px] tablet:mb-[24px]">
          <slot name="header">
            <h3>{{ title }}</h3>
            <h5 class="mt-[8px]">{{ content }}</h5>
          </slot>
        </div>
        <div>
          <slot name="body"></slot>
        </div>

      </div>

    </div>
  </teleport>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  content: String,
  useClose: {
    type: Boolean,
    default: true,
  },
  bottomSheet: {
    type: Boolean,
    default: false,
  },
});

const title = computed(() => props.title);
const content = computed(() => props.content);
const useClose = computed(() => props.useClose);
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});

const closeModal = () => {
  modelValue.value = false;
};
</script>

<style scoped>
.wmx-alert {
  font-family: 'Pretendard Variable', Avenir, Helvetica, Arial, sans-serif;
  background: var(--color-modal-dim);
  transition: all 0.3s ease;
}

.wmx-alert-container {
  box-shadow: 0 24px 24px -12px #0000004D, 0 0 4px 0 #0000001A;
  transition: all 0.3s ease;
}

h3 {
  font-weight: 700;
  font-size: 20px;
}

h5 {
  font-weight: 400;
  font-size: 14px;
}

/* Bottom sheet style */
.bottom-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  border-radius: 32px 32px 0 0;
}

.wmx-alert-container.bottom-sheet {
  max-height: 60%;
  overflow-y: auto;
}

.wmx-alert .wmx-alert-container {
  border-radius: 24px;
}

.wmx-alert .wmx-alert-container.bottom-sheet {
  border-radius: 32px 32px 0 0;
}

/* Close button */
.btn-action {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.wmx-alert .btn-action svg {
  fill: var(--color-body-text);
}

</style>