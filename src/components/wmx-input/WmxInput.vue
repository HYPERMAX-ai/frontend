<template>
  <div class="wmx-input"
       :class="{'left-icon': useLeftIcon, 'right-icon': useRightIcon}"
       @focusin="setFocus(true)"
       @focusout="setFocus(false)"
  >
    <input
        class="w-full border focus:outline-none rounded focus:searching"
        :class="rounded8 ? 'rounded-[8px]' : 'rounded'"
        :placeholder="placeholder"
        :value="formattedModelValue"
        :maxlength="maxLength"
        :readonly="readonly"
        @input="onInput"
    />

    <button ref="leftIconContainer" class="left max-w-[24px] max-h-[24px]" @click="onClick('left')">
      <slot name="left" :focus="focus"></slot>
    </button>
    <button ref="rightIconContainer" class="right max-w-[24px] max-h-[24px]" @click="onClick('right')">
      <slot name="right" :focus="focus"></slot>
    </button>

  </div>
</template>

<script setup>
import {ref, computed, onMounted, watch} from "vue";
import {comma} from "@/assets/script/dev";
const emit = defineEmits(['click-left', 'click-right', 'focus'])
const props = defineProps({
  placeholder: String,
  type: String, // <input> 태그의 type 속성
  max: Number, // type 이 number 일 때 최대값
  min: Number, // type 이 number 일 때 최소값
  maxLength: Number, // 최대 입력할 수 있는 최대 글자수
  rounded8: Boolean, // input 태그의 border-radius 속성
  decimalPlaces: Number, // type 이 number 일 때 소수점 자리수
  readonly: Boolean, // input 태그의 readonly 속성
  useComma: Boolean, // 숫자에 콤마 사용 여부
})
const placeholder = computed(() => props.placeholder)
// 표시용 포맷된 값
const formattedModelValue = computed(() => {
  if (type.value === "number") {
    if (modelValue.value) {
      return props.useComma ? modelValue.value.toLocaleString('en-US', { maximumFractionDigits: props.decimalPlaces || 15 }) : modelValue.value;
    }
    return 0;
  }

  return modelValue.value || '';
});
const type = computed(() => props.type)
const max = computed(() => props.max)
const min = computed(() => props.min)

const modelValue = defineModel({
  type: [String, Number],
  default: '',
})


watch(() => modelValue.value, () => {
  updateIcon();
})

// <input> 포커스 여부, 왼쪽/오른쪽 slot 사용시 포커스 여부를 전달
const focus = ref(false)
// 왼쪽 아이콘 사용 여부
const useLeftIcon = ref(false)
// 오른쪽 아이콘 사용 여부
const useRightIcon = ref(false)
// 왼쪽, 오른쪽 아이콘 slot container
const leftIconContainer = ref(null);
const rightIconContainer = ref(null);
onMounted(() => {
  updateIcon();
})
const updateIcon = () => {
  let element = leftIconContainer.value.children[0]
  if (element) {
    useLeftIcon.value = true;
  } else {
    leftIconContainer.value.style.display = 'hidden';
  }
  element = rightIconContainer.value.children[0]
  if (element) {
    useRightIcon.value = true;
  } else {
    rightIconContainer.value.style.display = 'hidden';
  }
}

const onInput = (event) => {
  let value = event.target.value;

  if (type.value === "number") {
    // 숫자만 남기고 저장
    value = value.replace(/[^0-9.]/g, '');
    event.target.value = value;

    // 숫자로 변환 (min, max 비교를 위해)
    const decimal = value.split('.');
    // 소수점 이하 자리수 제한
    if (decimal.length === 2 && decimal[1].length > (props.decimalPlaces || 15)) {
      decimal[1] = decimal[1].slice(0, props.decimalPlaces || 15)
    }

    const isLastCharDot = value.slice(-1) === '.' && value.split('.').length === 2;
    value = parseFloat(value);
    if (isNaN(value)) {
      value = min.value || 0;
    }

    // 숫자가 아니면 빈 값으로 처리
    if (min.value && value < min.value) {
      value = min.value;
    }
    // max 값 검사
    if (max.value && value > max.value) {
      value = max.value;
    }

    value = isLastCharDot ? `${value}.` : value;
    if (props.useComma) {
      value = decimal.length === 2 ? `${comma(decimal[0])}.${decimal[1]}` : value || 0;
    } else {
      value = decimal.length === 2 ? `${decimal[0]}.${decimal[1]}` : value || 0;
    }

  }

  event.target.value = value;
  modelValue.value = value;
}
const onClick = (direction) => {
  emit(`click-${direction}`);
}
const setFocus = (value) => {
  focus.value = value;
  emit('focus', value);
}
</script>

<!-- wmx-input -->
<style>
.wmx-input {
  position: relative;

  input {
    margin: 0;
    padding: 11px 8px;
    font-size: 14px;
    line-height: 16.71px;
    color: var(--color-body-text);
    background-color: var(--color-side-menu-active-bg);
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
      fill: var(--color-icon-path);
    }
  }
  .left { left: 8px; }
  .right { right: 8px; }

  &.left-icon { input { padding-left: 36px; } }
  &.right-icon { input { padding-right: 36px; } }
  &.text-left { input { text-align: left; } }
  &.text-center { input { text-align: center; } }
  &.text-right { input { text-align: right; } }
  &.font-semibold { input { font-weight: 600; } }
  &.dark { input { background-color: var(--color-side-menu-active-bg) } }
  &.small { input { padding-top: 6px; padding-bottom: 6px; } }

  /* appearance-none:  Chrome, Safari, Edge */
  & input::-webkit-inner-spin-button,
  & input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* appearance-none: Firefox */
  & input[type='number'] {
    -moz-appearance: textfield;
  }

  /* active */
  & button.right:active svg {
    transform: translateY(2px);
  }

}
</style>