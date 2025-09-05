<template>
  <div class="bg-[var(--color-side-menu-active-bg)] p-[20px] rounded-[8px] " >
    <div class="flex justify-between items-center cursor-pointer" @click="toggle" >
      <h5>{{ title }}</h5>
      <svg :class="{'active':isOpen}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 9.5L12 14.5L17 9.5" stroke="var(--color-body-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div :class="{'active': isOpen}"
         class="accordion-content"
         @transitionstart="onTransitionStart"
         @transitionend="onTransitionEnd"
    >
      <div class="pt-[24px]">{{content}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const {open} = defineProps({
  title: String,
  content: String,
  open: Boolean
});

const isOpen = ref(open);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onTransitionStart = () => {
  if (!isOpen.value) {
    const accordionContent = document.querySelector(".accordion-content");
    accordionContent.style.overflowY = "hidden";
  }
};
const onTransitionEnd = () => {
  if (isOpen.value) {
    const accordionContent = document.querySelector(".accordion-content");
    accordionContent.style.overflowY = "auto";
  }
};
</script>
<style>
:root {
  --accordion-view-max-height: 640px;
}
</style>
<style scoped>
h5 {
  font-weight: 600;
  font-size: 18px;
}
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  &.active {
    max-height: var(--accordion-view-max-height);
    transition: max-height 0.3s ease-in-out;
  }
}
svg {
  transition: transform 0.3s ease-in-out;
  &.active {
    transform: rotate(180deg);
  }
}
</style>