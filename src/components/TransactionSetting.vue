<template>
  <div class="transaction-setting">
    <div class="transaction-setting-container grid p-[16px] gap-[16px]">
      <div v-if="!simple" class="flex flex-wrap items-center">
        <span class="text-[14px] tablet:text-[16px] font-semibold">{{ title }}</span>
        <wmx-percent-selector v-if="!hiddenPercentSelector" v-model="modelValue"
                              :color="percentSelector?.color || undefined"
                              :handle-text-color="percentSelector?.handleTextColor || undefined"
                              :handle-color="percentSelector?.handleColor || undefined"
                              class="ml-auto"
        />
      </div>
      <div class="transaction-setting-input-form grid gap-[4px]">
        <p class="flex flex-nowrap gap-[8px] font-bold">
          <span class="flex">
            <slot name="token">
              <div class="flex gap-[4px] my-auto">
                <progress-circle v-if="percent >= 0" :per="percent" suffix="%"/>
                <wmx-icon-label class="text-[17px]" :label="coinName" :subLabel="subTitle" :src="coinIcon"/>
              </div>
            </slot>
          </span>
          <span class="ml-auto flex text-[27px]" style="letter-spacing: -0.5px;">
            <wmx-input
                type="number"
                useComma
                :readonly="readonly"
                v-model="modalAmount"
                @focusin="onFocus(true)"
                @focusout="onFocus(false)"
                class="wmx-input text-right my-auto"
            />
          </span>
        </p>
        <p v-if="!simple" class="flex justify-end gap-[4px] text-[13px] font-medium text-[var(--color-icon-path)]">
          <span>Balance : </span><span>{{ balance }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import WmxPercentSelector from "@/components/wmx-select/WmxPercentSelector.vue";
import WmxIconLabel from "@/components/wmx-label/WmxIconLabel.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import {computed} from "vue";
import WmxInput from "@/components/wmx-input/WmxInput.vue";
const emit = defineEmits(["focus"]);
const { options } = defineProps({
  title: String, // 타이틀
  coinName: String, // 코인 이름
  subTitle: String, // 서브 타이틀
  coinIcon: [String, Object], // 코인 아이콘
  amount: Number, // 금액
  balance: String, // 잔액
  simple: Boolean, // 간단한 디자인 여부
  percent: Number, // 퍼센트
  options: Object, // 옵션
  hiddenPercentSelector: Boolean, // 퍼센트 선택기 표시 여부
  readonly: Boolean, // 읽기 전용 여부 (input 비활성화)
});
const modelValue = defineModel('modelValue', {
  prop: "modelValue",
  event: "update:modelValue"
});
const modalAmount = defineModel('amount', {
  prop: "amount",
  event: "update:amount"
});
const percentSelector = computed(() => {
  return {
    color: options?.percentSelector?.color,
    handleColor: options?.percentSelector?.handleColor,
    handleTextColor: options?.percentSelector?.handleTextColor,
  }
});
const onFocus = (focus) => {
  emit("focus", focus);
};

</script>

<style scoped>
.wmx-input::v-deep(input) {
  background-color: transparent;
  border: none;
  font-size: 25px;
  padding: 0;
}
</style>