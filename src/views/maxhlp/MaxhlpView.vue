<template>
  <div
      class="maxhlp flex desktop:grid grid-layout flex-col
      grid-cols-[656fr_464fr] desktop:items-start
      gap-[16px] py-[20px] px-[16px] laptop:px-[24px]

      mx-auto
      tablet:max-w-[550px] laptop:max-w-[900px]
  ">

    <div class="w-full flex flex-col gap-[16px] order-1">
      <maxhype-card/>
      <fag-card class="hidden desktop:block"/>
    </div>
    <div class="w-full flex flex-col gap-[16px] order-0 desktop:order-1">
      <staking-card/>
      <my-unstaking-card/>
    </div>
    <fag-card class="block desktop:hidden order-1"/>

  </div>
</template>
<script setup>
import MaxhypeCard from "@/views/maxhlp/components/MaxhypeCard.vue";
import StakingCard from "@/views/maxhlp/components/StakingCard.vue";
import FagCard from "@/views/maxhlp/components/FagCard.vue";
import MyUnstakingCard from "@/views/maxhlp/components/MyUnstakingCard.vue";
import store from "@/store";
store.commit('setPageName', 'MaxHLP');
</script>
<style scoped>
</style>
