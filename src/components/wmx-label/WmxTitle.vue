<template>
  <wmx-label class="wmx-title text-[18px] tablet:text-[24px]" >
    <div :class="{'reversal': reversal}" class="flex items-center gap-[12px] ">
      <slot></slot>
      <button v-if="showRefresh" class="btn-icon btn-action w-[30px] h-[30px] tablet:w-[34px] tablet:h-[34px]" @click="onClickRefresh">
        <img v-if="reversal" src="@/assets/icons/ic_refresh_reversal.png" :class="{'animate-rotate':refresh}" alt="refresh icon" />
        <img v-else src="@/assets/icons/ic_refresh.png" :class="{'animate-rotate':refresh}" alt="refresh icon" />
      </button>
    </div>
  </wmx-label>
</template>

<script setup>
import WmxLabel from "@/components/wmx-label/WmxLabel.vue";
import {toRefs} from "vue";
const props = defineProps({
  refresh: Boolean,
  reversal: Boolean, // 버튼의 색상 / 아이콘의 색상 반전여부
  showRefresh: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(["refresh"]);
const { refresh } = toRefs(props);

const onClickRefresh = () => {
  emit("refresh")
}
</script>

<style scoped>
.reversal {
  .btn-icon {
    background-color: var(--color-btn-active-bg);
  }
}
.wmx-title > div {
  color: var(--color-title-text);
  font-weight: 700;
  display: flex;
}
</style>