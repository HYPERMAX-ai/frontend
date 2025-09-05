<template>
  <div class="grid gap-[16px] tablet:gap-[32px]
    py-[20px] px-[16px] tablet:px-[24px]

    mx-auto
    tablet:max-w-[550px] laptop:max-w-[900px]
  ">
    <my-position-card />
    <lending-card />
  </div>
</template>
<script setup>
import MyPositionCard from "@/views/lending/components/MyPositionCard.vue";
import LendingCard from "@/views/lending/components/LendingCard.vue";
import store from "@/store";
store.commit('setPageName', 'Lending');
</script>
<style scoped>

</style>