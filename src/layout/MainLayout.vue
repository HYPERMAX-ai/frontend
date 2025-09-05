<template>
  <div class="main-layout flex h-svh min-w-[360px] w-full fixed top-0 left-0">

    <!-- left -->
    <aside class="hidden laptop:block w-[72px] laptop:w-[256px]">
      <side-menu />
    </aside>

    <div class="flex flex-col flex-1 overflow-x-hidden overflow-y-auto relative">
      <!-- header -->
      <!-- z-[10000000] : echart 의 tooltip 보다 z-index 를 높게설정 -->
      <header class="w-full fixed laptop:sticky top-0 left-0 z-[10000000]">
        <nav-bar />
      </header>

      <!-- main -->
      <main class="flex-1 pt-[56px] laptop:pt-0 ">
        <slot></slot>
      </main>

      <!-- footer -->
      <footer>
        <site-footer class="block laptop:hidden"/>
      </footer>
    </div>

  </div>
</template>

<script setup>

import NavBar from "@/layout/nav-bar/NavBar.vue";
import SiteFooter from "@/layout/site-footer/SiteFooter.vue";
import SideMenu from "@/layout/side-menu/SideMenu.vue";
</script>

<style scoped>
</style>