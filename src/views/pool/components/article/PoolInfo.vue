<template>
  <div class="pool-info flex items-center gap-[2px] laptop:gap-[4px] flex-wrap">

    <span
        v-if="avatar1"
        class="order-1"
        :class="[
          small ? 'w-[20px]' : 'w-[24px] h-[24px] laptop:w-[32px] laptop:h-[32px]'
        ]"
        ><img :src="avatar1" alt="avatar-002" class="w-full h-full"/></span>

    <span
        v-if=avatar2
        class="order-1"
        :class="[
          small ? 'w-[20px]' : 'w-[24px] h-[24px] laptop:w-[32px] laptop:h-[32px]'
        ]"
        ><img :src="avatar2" class="w-full h-full"/></span>

    <span
        class="font-bold"
        :class="[
          small ? 'text-[14px]' : 'text-[14px] laptop:text-[16px]',
          titleBottom ? 'order-2 w-full' : 'order-1'
        ]"
        >{{ title }}</span>

    <wmx-percentage-tag
        v-if="percentage"
        class="order-1"
    >{{ percentage }}</wmx-percentage-tag>
  </div>
</template>
<script setup>
import WmxPercentageTag from "@/components/wmx-label/WmxPercentageTag.vue";

const { title, avatar1, avatar2, percentage, small } = defineProps({
  title: String,
  avatar1: String,
  avatar2: String,
  percentage: String,
  small: Boolean,
  titleBottom: Boolean,
})

</script>

<style scoped>

</style>