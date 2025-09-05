<template>
  <div class="side-menu flex flex-col h-full">

    <!-- header-->
    <header class="p-[16px]">
      <!-- logo -->
      <router-link to="/dashboard">
        <div class="logo flex tablet:h-[32px]">
          <img :src="require('@/assets/logo.svg')" class="hidden tablet:block max-h-[14px]" alt="logo"/>
          <img :src="require('@/assets/simple-logo.svg')" class="block tablet:hidden max-h-[18px]" alt="logo"/>
        </div>
      </router-link>
    </header>

    <!--menu -->
    <main class="flex-1 px-[16px] pb-[16px]">
      <!-- menu: desktop -->
      <div class="flex flex-col gap-[4px] ">
        <side-menu-item to="/invest" title="SmartETFs" icon="invest" :active="checkActive('invest')"/>
        <side-menu-item to="/ratesetf" title="Rates ETF" icon="staking" :active="checkActive('ratesetf')"/>
      </div>
    </main>

    <!-- footer -->
    <footer>
      <site-footer />
    </footer>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import SideMenuItem from "@/layout/side-menu/SideMenuItem.vue";
import SiteFooter from "@/layout/site-footer/SiteFooter.vue";

const router = useRouter();
const checkActive = (path) => {
  return router.currentRoute.value.path.includes(path);
}
</script>

<style scoped>
.side-menu {
  color: var(--color-title-text);
  background-color: var(--color-side-gnb-bg);
  border-right: 1px solid var(--color-border);
}
</style>