<template>
  <div class="hamburger-menu relative">
    <button
      @click="toggleMenu"
      class="flex flex-col items-center justify-center w-[24px] h-[24px] group"
    >
      <span
          class="w-[18px] h-[2px] bg-gray-800 rounded transition-transform transform"
          :class="{
          'rotate-45 translate-y-[6px]': isOpen,
        }"
      ></span>
      <span
          class="w-[18px] h-[2px] bg-gray-800 rounded my-1 transition-opacity"
          :class="{
          'opacity-0': isOpen,
        }"
      ></span>
      <span
          class="w-[18px] h-[2px] bg-gray-800 rounded transition-transform transform"
          :class="{
          '-rotate-45 -translate-y-[6px]': isOpen,
        }"
      ></span>
    </button>
  </div>
</template>
<script setup>
import {computed } from "vue";
const props = defineProps({
  open: Boolean,
})
const emit = defineEmits(['click'])
const isOpen = computed({
  get() {
    return props.open;
  },
  set(newValue) {
    emit('click', newValue)
  }
});
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>
<style scoped>
.hamburger-menu {
  span {
    background-color: var(--color-title-text);
  }
}
</style>