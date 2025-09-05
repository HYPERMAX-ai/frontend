<template>
  <div class="h-full">
    <div class="swap grid
      pt-[16px] tablet:pt-[48px] pb-[20px] px-[16px] laptop:px-[24px]
      w-full gap-[16px]

      mx-auto
      tablet:max-w-[550px] laptop:max-w-[900px]
    ">
      <wmx-title :refresh="refresh" class="px-[8px]" @click="onClickRefresh">Swap</wmx-title>

      <swap-stake-section/>
    </div>
  </div>
</template>

<script setup>
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import SwapStakeSection from "@/views/swap/components/SwapStakeSection.vue";
import store from "@/store";
import {ref} from "vue";
const refresh = ref();
const onClickRefresh = () => {
  refresh.value = !refresh.value;
}
store.commit('setPageName', 'Swap');
</script>
<style scoped>
</style>