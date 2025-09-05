<template>
  <article class="risk-ratio-selector" :class="{'disabled':disabled}">
    <!-- My LTV -->
    <div class="flex tablet:hidden justify-between w-full ">
      <div class="flex items-center ">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10.6667L12 6H4Z" fill="var(--color-title-text2)"/>
        </svg>
        <span class="font-semibold text-[13px]">My LTV</span>
      </div>
      <div class="flex items-center ">
        <span class="font-semibold text-[13px]">Max LTV</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10.6667L12 6H4Z" fill="var(--color-title-text2)"/>
        </svg>
      </div>
    </div>

    <!-- 눈금 표시 -->
    <div class="slider-ticks hidden tablet:block ">
      <div v-for="tick in ticks" :key="tick" class="slider-tick text-center w-[20px]"
           :style="{ left: tick.left, transform: tick.transform }">
        <span>{{ tick.label }}</span>
        <span class="slider-tick-bar"></span>
      </div>
    </div>

    <!-- Slider Bar -->
    <div class="slider-container">
      <input
          ref="slider"
          type="range"
          class="slider"
          :min="min"
          :max="max"
          :step="step"
          v-model="currentValue"
          @input="updateSliderBackground"
          @touchstart="handleMouseDown"
          @mousedown="handleMouseDown"
          :style="sliderBackground"
      />
    </div>

    <!-- axis -->
    <div class="slider-axis h-[32px] tablet:h-[40px]" >
      <!-- percent axis -->
      <div v-if="showPercentAxis" class="w-full flex justify-between">
        <span class="font-semibold text-[13px] text-[var(--color-title-text2)]">{{min}}%</span>
        <span class="font-semibold text-[13px] text-[var(--color-title-text2)]">{{max}}%</span>
      </div>

      <div v-for="axis in axisTicks" :key="axis" class="slider-axis-ticks hidden tablet:block text-center w-[20px]" :style="{ left: axis.left, transform: axis.transform }">
        <span>{{ axis.label }}</span>
      </div>
      <div v-if="borrowLimit >= 0" class="slider-axis-pointer w-[20px]" :style="{left: borrowLimitStyle.left, transform: borrowLimitStyle.transform}">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12257 15.0003C4.34025 15.0003 3.8609 14.1425 4.27091 13.4762L9.14802 5.55094C9.5385 4.9164 10.4608 4.9164 10.8513 5.55094L15.7284 13.4762C16.1384 14.1425 15.6591 15.0003 14.8768 15.0003H5.12257Z" fill="var(--color-token-chart-minus)"/>
        </svg>
        <span>Borrow Limit</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";

const props = defineProps({
  disabled: { type: Boolean, default: false }, // 비활성화 여부
  min: { type: Number, default: 5 }, // 최소값
  max: { type: Number, default: 80 }, // 최대값
  limitMin: { type: Number, default: 10 }, // 핸들 최소 제한값
  limitMax: { type: Number, default: 75 }, // 핸들 최대 제한값
  step: { type: Number, default: 1 }, // 스텝
  tickValues: { type: Array, default: () => [] }, // 눈금 값
  axisList: { type: Object, default: () => ({}) }, // 슬라이드 레이블
  borrowLimit: { type: Number, default: -1 }, // 대출 제한값
  showPercentAxis: { type: Boolean, default: false }, // 퍼센트 레이블 표시 여부
});

const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});

const currentValue = ref(modelValue.value); // 슬라이더 값
const sliderBackground = ref(""); // 슬라이더 배경 그라데이션
const slider = ref(null); // 슬라이더 DOM
const sliderWidth = ref(300);
const borrowLimitStyle = computed(() => {
  const percent = (props.borrowLimit - props.min) / (props.max - props.min);
  return {
    left: `${percent * sliderWidth.value}px`,
    transform: `translateX(-${20 * percent}px)`,
  }
});
const formattedValue = computed(() => {
  return Math.min(Math.max(currentValue.value, props.limitMin), props.limitMax);
});
// 눈금 계산
const ticks = computed(() => {
  const tickValues = props.tickValues;
  // 슬라이더의 실제 너비를 계산 (동적으로 반영)
  const _sliderWidth = sliderWidth.value; // 기본값 300px


  // 각 눈금의 상대적인 px 위치 계산
  return tickValues.map((value) => {
    const percent = (value - props.min) / (props.max - props.min);
    const left = percent * _sliderWidth;

    return {
      label: value + '%',
      left: `${left}px`, // 보정된 위치
      transform: `translateX(-${percent*100}%)`, // 가운데 정렬
    };
  });
});
// 슬라이더 레이블 계산
const axisTicks = computed(() => {
  const axisList = props.axisList;
  // 슬라이더의 실제 너비를 계산 (동적으로 반영)
  const _sliderWidth = sliderWidth.value; // 기본값 300px

  // 각 레이블의 상대적인 px 위치 계산
  return Object.entries(axisList).map(([value, label]) => {
    const percent = (Number(value) - props.min) / (props.max - props.min);
    const left = percent * _sliderWidth;
    return {
      label,
      left: `${left}px`, // 보정된 위치
      transform: 'translateX(-50%)', // 가운데 정렬
    };
  });
});

watch(
    () => modelValue,
    (newValue) => {
      if (newValue < props.limitMin + (props.limitMax - props.limitMin) * 0.1) {
        currentValue.value = props.limitMin + (props.limitMax - props.limitMin) * 0.1;  // 10% 값으로 강제 변경
      }
      updateSliderBackground();
    }
);

// 슬라이더 핸들 이동 시 10% 이하로 가지 않도록 제한
const handleMouseDown = (e) => {
  const slider = e.target;

  slider.addEventListener('input', (event) => {
    let value = event.target.value;

    // 값이 10% 이하로 내려가지 않도록 강제 제한
    if (value < props.limitMin) {
      value = props.limitMin;
    } else if (value > props.limitMax) {
      value = props.limitMax;
    }

    currentValue.value = value;
  });
};

const updateSliderWidth = () => {
  sliderWidth.value = slider.value.offsetWidth;
};

const updateSliderBackground = () => {
  const currentValue = Math.max(props.limitMin, Math.min(props.limitMax, formattedValue.value));
  const min = props.min;
  const max = props.max;
  const percent = ((currentValue - min) / (max - min)) * 100;

  const colors = {
    0: "#385CF2",
    28: "#00D94A",
    52.5: "#FFB800",
    76: "#FF8A00",
    100: "#F61E1E",
  };

  // 색상 포인트 가져오기
  const colorPoints = Object.keys(colors).map(Number).sort((a, b) => a - b);

  // 현재 percent 까지 그라데이션 조합 생성
  let gradientStops = `${colors[0]} ${colorPoints[0]}%`;

  for (let i = 0; i < colorPoints.length - 1; i++) {
    const start = colorPoints[i];
    const end = colorPoints[i + 1];
    const startColor = colors[start];
    const endColor = colors[end];

    // 현재 percent가 이 구간에 있는 경우
   if (percent >= start && percent < end) {
      // 중간값 계산
      const relativePercent = ((percent - start) / (end - start));
      const midColor = getMidColor(startColor, endColor, relativePercent);
      // 해당 구간의 그라데이션 추가
      gradientStops += `, ${midColor} ${percent}%`;
      break;
    } else if (percent >= end) {
      gradientStops += `, ${endColor} ${end}%`;
    }
  }

  // 최종적으로 그라데이션 CSS 구성
  sliderBackground.value = {
    background: `
      linear-gradient(90deg, ${gradientStops}, #4B5563 0%),
      linear-gradient(90deg, transparent 0%, #4B5563 100%)
    `,
  };
};

/**
 * 두 색상의 중간 색상 계산
 * @param color1
 * @param color2
 * @param percent 중간 색상의 위치 (0 ~ 1)
 * @returns {string}
 */
const getMidColor = (color1, color2, percent) => {
  // Hex 색상 값을 RGB로 변환
  function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return [r, g, b];
  }

  // RGB를 Hex로 변환
  function rgbToHex(r, g, b) {
    return `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  }

  // 색상 변환
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // R, G, B 채널별로 중간값 계산 (보간)
  const midR = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * percent);
  const midG = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * percent);
  const midB = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * percent);

  return rgbToHex(midR, midG, midB);
}

onMounted(() => {
  updateSliderWidth(); // 초기 슬라이더 너비 계산
  updateSliderBackground(); // 초기 슬라이더 배경 그라데이션 설정
  window.addEventListener('resize', updateSliderWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSliderWidth);
});
</script>

<style scoped>
.risk-ratio-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.percent-display {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.slider-container {
  width: 100%;
}

.slider {
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-size: 100% 100%;
}

.slider-ticks {
  position: relative;
  width: 100%;
  height: 32px;
}

.slider-tick {
  position: absolute;
  top: 0;
  font-size: 14px;
  white-space: nowrap;
}

.slider-tick-bar {
  width: 1px;
  height: 8px;
  background: var(--color-title-text2);
  display: block;
  margin: auto;
}

.slider-axis {
  position: relative;
  width: 100%;
}

.slider-axis-ticks {
  position: absolute;
  bottom: 0;
  font-size: 14px;
  white-space: nowrap;

  width: auto;
}

.slider-axis-pointer {
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-token-chart-minus);
  white-space: nowrap;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--color-side-menu-active-bg);
  border: 4px solid var(--color-title-text);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--color-title-text);
  border: 2px solid #007bff;
  border-radius: 50%;
  cursor: pointer;
}

.disabled {
  pointer-events: none;
}
</style>
