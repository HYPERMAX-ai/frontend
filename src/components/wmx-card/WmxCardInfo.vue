<template>
  <div class="flex tablet:grid justify-between tablet:justify-center items-center
              px-[16px] py-[12px] tablet:px-[24px] tablet:py-[32px]
              rounded-[8px] tablet:rounded-2xl">
    <span class="text-[16px] font-semibold text-center whitespace-nowrap">{{ title }}</span>
    <div class="flex items-center text-[18px] tablet:text-[27px] font-bold">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import {computed} from 'vue'
const props = defineProps({
  title: String,
})
const title = computed(() => props.title)
</script>

<style scoped>

</style>