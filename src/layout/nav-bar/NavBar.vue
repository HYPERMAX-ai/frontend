<template>
  <nav
      class="top-bar flex flex-col min-w-[360px] w-full laptop:min-h-0 max-h-full text-black top-0 z-10"
      :class="{'min-h-svh' : openMenu, 'fixed' : openMenu}"
  >
    <article class="flex justify-between items-center z-10">

      <div class="flex items-center gap-[10px] pl-[20px]">
        <hamburger-menu
            class="flex laptop:hidden justify-center items-center"
            :open="openMenu"
            @click="onClickClose"/>
        <span class="hidden laptop:block font-bold text-[24px]">{{ pageName }}</span>
        <!-- logo -->
        <router-link to="/dashboard">
          <div class="flex laptop:hidden laptop:h-[32px]">
            <img :src="require('@/assets/logo.svg')" class="min-h-[14px] max-h-[14px]" alt="logo"/>
          </div>
        </router-link>
      </div>

      <!-- toolbox -->

      <div class="tool-box flex h-[56px] laptop:h-[64px] pr-[16px] laptop:pr-[24px] gap-[10px] items-center">
        <my-wallet :open="openMyWallet" @click="openMyWallet = !openMyWallet"/>
      </div>
    </article>

    <!-- menu: mobile -->
    <div class="menu-mobile grid laptop:hidden items-center border-top overflow-y-auto" :class="{'hidden': !openMenu}">
      <nav-bar-item to="/invest" title="SmartETFs" icon="invest" :active="checkActive('invest')" @close="onClickClose"/>
      <nav-bar-item to="/ratesetf" title="Rates ETF" icon="staking" :active="checkActive('ratesetf')" @close="onClickClose"/>
    </div>
  </nav>
</template>

<script setup>
import {computed, ref} from "vue";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import MyWallet from "@/layout/nav-bar/toolbox/MyWallet.vue";
import HamburgerMenu from "@/layout/nav-bar/toolbox/HamburgerMenu.vue";
import NavBarItem from "@/layout/nav-bar/NavBarItem.vue";
const store = useStore();
const router = useRouter();
const openMyWallet = ref(false);

const openMenu = computed(() => {
  return store.state.ui.isHamburgerMenuOpen;
})
const pageName = computed(() => {
  return store.state.ui.pageName;
})

const checkActive = (path) => {
  return router.currentRoute.value.path.includes(path);
}
const onClickClose = () => {
  store.dispatch('toggleHamburgerMenu');
}
</script>

<style scoped>
.top-bar {
  background-color: var(--color-side-gnb-bg);
  color: var(--color-title-text);
  border-bottom: 1px solid var(--color-border);

  .menu-mobile {
    background-color: var(--color-black-peral);
  }
}
</style>