<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import "./assets/stylesheets/variables.css";
import "./assets/stylesheets/global.css";
import MainLayout from "@/layout/MainLayout.vue";
import FullPageLayout from "@/layout/FullPageLayout.vue";

export default {
  name: 'App',
  components: {
    MainLayout,
    FullPageLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'MainLayout'; // meta.layout 가 없으면 MainLayout 을 사용
    }
  }
}
</script>

<style scoped>

</style>

<style>
html {
  touch-action: manipulation;/* 기본 확대/축소 제어 비활성화 */
}
#app {
  font-family: 'Pretendard Variable', 'Space Grotesk', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* color */
html, body, #app {
  background-color: var(--color-body-bg);
  color: var(--color-body-text);
}
</style>
