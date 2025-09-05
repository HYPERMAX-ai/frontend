<template>
  <section>
    <div class="grid w-full gap-[8px] tablet:gap-[16px]">
      <!-- title -->
      <wmx-title class="px-[8px]" :refresh="refresh" @refresh="onClickRefresh">My Position</wmx-title>

      <!-- overview-panel -->
      <my-position-overview-panel></my-position-overview-panel>

      <!-- my supply -->
      <my-positions-supply></my-positions-supply>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import MyPositionsSupply from "@/views/pool/components/MyPositionsSupply.vue";
import MyPositionOverviewPanel from "@/views/pool/components/article/MyPositionOverviewPanel.vue";
const refresh = ref();
const onClickRefresh = () => {
  refresh.value = !refresh.value;
}
</script>

<style scoped>

</style>