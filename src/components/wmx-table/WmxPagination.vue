<template>
  <div class="wmx-pagination flex justify-center items-center gap-[16px]">
    <button :disabled="currentPage <= 1" @click="onClickPrev" class="p-[8px]" >
      <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2049 7.41L14.7949 6L8.79492 12L14.7949 18L16.2049 16.59L11.6249 12L16.2049 7.41Z"/>
      </svg>
    </button>
    <div class="flex items-center">
      <wmx-input
          class="w-[48px] h-[40px] text-center font-semibold"
          type="number"
          :min="1"
          :max="lastPage"
          v-model="currentPage"
      />
      <span class="mx-[12px] font-medium text-[16px] text-[var(--color-icon-path)]">/</span>
      <span class="font-semibold text-[14px]">{{ lastPage }}</span>
    </div>
    <button :disabled="currentPage >= lastPage" @click="onClickNext" class="p-[8px]">
      <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2049 6L8.79492 7.41L13.3749 12L8.79492 16.59L10.2049 18L16.2049 12L10.2049 6Z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import WmxInput from "@/components/wmx-input/WmxInput.vue";
import {ref, computed} from "vue";
const props = defineProps({
  lastPage: {
    type: Number,
    default: 1,
  },
})

const modelValue = defineModel({
  type: [Number, String],
  default: 1,
})

const lastPage = ref(props.lastPage);
const currentPage = computed({
  get() {
    return modelValue.value;
  },
  set(newValue) {
    modelValue.value = newValue;
  }
})

const onClickPrev = () => {
  currentPage.value -= 1;
}
const onClickNext = () => {
  currentPage.value += 1;
}
</script>

<style scoped>
button {
  svg {
    fill: var(--color-table-text);
  }

  &:disabled {
    svg {
      fill: var(--color-side-menu-active-bg);
    }
  }
}
</style>