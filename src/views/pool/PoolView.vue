<template>
  <div class="grid
    px-[16px] tablet:px-[16px] laptop:px-[24px]
    pt-[16px] tablet:pt-[24px] laptop:pt-[32px]
    pb-[20px]
    gap-[36px] tablet:gap-[32px]

    mx-auto
    tablet:max-w-[550px] laptop:max-w-[900px]
  ">
    <!-- My Position -->
    <my-position-section />

    <!-- Pool -->
    <pool-section />

  </div>
</template>
<script setup>
import MyPositionSection from "@/views/pool/components/MyPositionSection.vue";
import PoolSection from "@/views/pool/components/PoolSection.vue";
import store from "@/store";
store.commit('setPageName', 'Pool');
</script>
<style scoped>

</style>