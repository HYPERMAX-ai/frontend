<template>
  <section class="pool-section">
    <div class="grid w-full gap-[8px] tablet:gap-[16px]">
      <!-- title -->
      <wmx-title class="px-[8px]" :refresh="refresh" @refresh="onClickRefresh">Pool</wmx-title>

      <!-- supply -->
      <pool-supply></pool-supply>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import PoolSupply from "@/views/pool/components/PoolSupply.vue";
const refresh = ref();
const onClickRefresh = () => {
  refresh.value = !refresh.value;
}
</script>

<style scoped>

</style>