<template>
  <div class="progress-circle w-[40px] h-[40px]">
<!--    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--      <circle cx="20" cy="20" r="18" stroke="var(--color-border)" stroke-width="4"/>-->
<!--      <path d="M2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2" stroke="#75FFD3" stroke-width="4" stroke-linecap="round"/>-->
<!--    </svg>-->
    <div class="progress-circle-wrapper">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="var(--color-border)" stroke-width="4" fill="none" />
        <circle class="progress-circle-progress" cx="20" cy="20" r="18"
                stroke="var(--color-active-bg)" stroke-width="4" stroke-linecap="round" fill="none"
                :stroke-dasharray="circumference" :stroke-dashoffset="dashOffset"
        />
      </svg>
    </div>
    <span :class="{'font-small':percent >= 100}">{{ prefix }}{{ percent }}{{ suffix }}</span>
  </div>

</template>

<script setup>
import {computed} from "vue";

const { per } = defineProps({
  per: {
    type: Number,
    default: 0
  },
  prefix: {
    type: String,
    default: ""
  },
  suffix: {
    type: String,
    default: ""
  }
})

// 퍼센트가 100을 넘어가면 100으로 고정
const percent = computed(() => {
  return per > 100 ? 100 : per;
})

const circumference = computed(() => {
  return 2 * Math.PI * 18;
})
const dashOffset = computed(() => {
  return setProgress(percent.value)
})


const setProgress = (percent) => {
  const radius = 18;
  const circumference = radius * 2 * Math.PI;
  return circumference * (1 - percent / 100);
}
</script>
<style>
:root {
  --strokeDashoffset: 339.292;
}
</style>
<style scoped>
.progress-circle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;

  font-size: 11px;
  font-weight: 700;

  .progress-circle-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .progress-circle-progress {
    transition: stroke-dashoffset 0.5s ease;
    transform: rotate(-90deg) scaleY(-1); /* 기준을 12시로 설정 */
    transform-origin: center; /* 중심점을 기준으로 회전 */
  }

  .font-small {
    font-size: 10px;
  }
}
</style>