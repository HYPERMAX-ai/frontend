<template>
  <router-link :to="to"
               class="nav-bar-item flex p-[16px] gap-[8px] items-center border-bottom"
               :class="{'active':active}"
               @click="onClickClose"
  >
    <!-- dashboard -->
    <div v-if="icon === 'dashboard'" class="mobile-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.667 2.5H12.5003C12.0401 2.5 11.667 2.8731 11.667 3.33333V5.83333C11.667 6.29357 12.0401 6.66667 12.5003 6.66667H16.667C17.1272 6.66667 17.5003 6.29357 17.5003 5.83333V3.33333C17.5003 2.8731 17.1272 2.5 16.667 2.5Z" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.667 10H12.5003C12.0401 10 11.667 10.3731 11.667 10.8333V16.6667C11.667 17.1269 12.0401 17.5 12.5003 17.5H16.667C17.1272 17.5 17.5003 17.1269 17.5003 16.6667V10.8333C17.5003 10.3731 17.1272 10 16.667 10Z" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 13.3335H3.33333C2.8731 13.3335 2.5 13.7066 2.5 14.1668V16.6668C2.5 17.1271 2.8731 17.5002 3.33333 17.5002H7.5C7.96024 17.5002 8.33333 17.1271 8.33333 16.6668V14.1668C8.33333 13.7066 7.96024 13.3335 7.5 13.3335Z" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- staking -->
    <div v-if="icon === 'staking'" class="mobile-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66699 11.6665C9.42842 11.6665 11.667 9.42793 11.667 6.6665C11.667 3.90508 9.42842 1.6665 6.66699 1.6665C3.90557 1.6665 1.66699 3.90508 1.66699 6.6665C1.66699 9.42793 3.90557 11.6665 6.66699 11.6665Z" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.0745 8.6416C15.8623 8.93529 16.5633 9.42288 17.1127 10.0593C17.6621 10.6957 18.0421 11.4603 18.2177 12.2825C18.3932 13.1047 18.3586 13.9579 18.1171 14.7631C17.8755 15.5684 17.4348 16.2998 16.8357 16.8896C16.2366 17.4794 15.4985 17.9087 14.6895 18.1376C13.8806 18.3666 13.027 18.3879 12.2076 18.1995C11.3883 18.0111 10.6296 17.6192 10.0019 17.0599C9.37416 16.5007 8.89757 15.7922 8.61621 14.9999" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- invest -->
    <div v-if="icon === 'invest'" class="mobile-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 16.8372V8.50391" stroke="var(--color-side-menu-text)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 16.8372V3.50391" stroke="var(--color-side-menu-text)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 16.8359V11.8359" stroke="var(--color-side-menu-text)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- lending -->
    <div v-if="icon === 'lending'" class="mobile-icon">
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 5.25V3C14.25 2.80109 14.171 2.61032 14.0303 2.46967C13.8897 2.32902 13.6989 2.25 13.5 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75C2.25 4.14782 2.40804 4.52936 2.68934 4.81066C2.97064 5.09196 3.35218 5.25 3.75 5.25H15C15.1989 5.25 15.3897 5.32902 15.5303 5.46967C15.671 5.61032 15.75 5.80109 15.75 6V9M15.75 9H13.5C13.1022 9 12.7206 9.15804 12.4393 9.43934C12.158 9.72064 12 10.1022 12 10.5C12 10.8978 12.158 11.2794 12.4393 11.5607C12.7206 11.842 13.1022 12 13.5 12H15.75C15.9489 12 16.1397 11.921 16.2803 11.7803C16.421 11.6397 16.5 11.4489 16.5 11.25V9.75C16.5 9.55109 16.421 9.36032 16.2803 9.21967C16.1397 9.07902 15.9489 9 15.75 9Z" stroke="var(--color-side-menu-text)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H15C15.1989 15.75 15.3897 15.671 15.5303 15.5303C15.671 15.3897 15.75 15.1989 15.75 15V12" stroke="var(--color-side-menu-text)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- swap -->
    <div v-if="icon === 'swap'" class="mobile-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.333 2.5L16.6663 5.83333L13.333 9.16667" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6663 5.83334H3.33301" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66634 17.5L3.33301 14.1667L6.66634 10.8333" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33301 14.1667H16.6663" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- pool -->
    <div v-if="icon === 'pool'" class="mobile-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83333 13.5832C7.66667 13.5832 9.16667 12.0582 9.16667 10.2082C9.16667 9.2415 8.69167 8.32484 7.74167 7.54984C6.79167 6.77484 6.075 5.62484 5.83333 4.4165C5.59167 5.62484 4.88333 6.78317 3.925 7.54984C2.96667 8.3165 2.5 9.24984 2.5 10.2082C2.5 12.0582 4 13.5832 5.83333 13.5832Z" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4669 5.49993C11.04 4.58421 11.4463 3.57414 11.6669 2.5166C12.0835 4.59993 13.3335 6.59994 15.0002 7.93327C16.6669 9.2666 17.5002 10.8499 17.5002 12.5166C17.505 13.6685 17.1676 14.7959 16.5309 15.7558C15.8941 16.7158 14.9867 17.4651 13.9236 17.9087C12.8606 18.3523 11.6897 18.4703 10.5595 18.2477C9.4293 18.0251 8.39064 17.4719 7.5752 16.6583" stroke="var(--color-side-menu-text)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    {{ title }}

    <span class="ml-auto flex w-[24px] h-[24px] justify-center items-center">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="var(--color-title-text2)" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"/>
      </svg>
    </span>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  active: Boolean,
  to: String,
  icon: String,
})
const emit = defineEmits(['close'])
const onClickClose = () => {
  emit('close')
}
</script>

<style scoped>
.nav-bar-item {
  background-color: var(--color-body-bg2);
  &.active {
    color: var(--color-active-bg);
    span > svg {
      fill: var(--color-active-bg);
    }
    div > svg > path {
      stroke: var(--color-active-bg);
    }
  }
}
</style>