<template>
  <button class=" p-[8px] rounded-full bg-[#EFF5FD] font-semibold text-[#385CF2]">
    <span class="flex overflow-hidden">
      <img :src="require('@/assets/icons/ic_proceeding.png')" alt="ic_proceeding" class="w-[24px] h-[24px] rotate-animation"/>
      <span class="ml-[4px]">Proceeding</span>
    </span>
  </button>
</template>
<script setup>

</script>
<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate-animation {
  animation: rotate 1.5s linear infinite;
}
</style>