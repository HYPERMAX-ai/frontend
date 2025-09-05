import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from "@/views/dashboard/DashboardView.vue";
import StakingView from "@/views/staking/StakingView.vue";
import MaxhlpView from "@/views/maxhlp/MaxhlpView.vue";
import LendingView from "@/views/lending/LendingView.vue";
import SwapView from "@/views/swap/SwapView.vue";
import PoolView from "@/views/pool/PoolView.vue";
import DeveloperView from "@/views/dev/DeveloperView.vue";
import InvestView from "@/views/invest/InvestView.vue";
import LandingPageView from "@/views/landing-page/LandingPageView.vue";

const routes = [
  { path: '/', name: 'home', redirect: '/invest' },
  { path: '/dashboard', name: 'dashboardView', component: DashboardView, meta: { layout: 'MainLayout' } },
  { path: '/ratesetf', name: 'stakingView', component: StakingView, meta: { layout: 'MainLayout' } },
  { path: '/maxhlp', name: 'maxhlpView', component: MaxhlpView, meta: { layout: 'MainLayout' } },
  { path: '/lending', name: 'lendingView', component: LendingView, meta: { layout: 'MainLayout' } },
  { path: '/swap', name: 'swapView', component: SwapView, meta: { layout: 'MainLayout' } },
  { path: '/pool', name: 'poolView', component: PoolView, meta: { layout: 'MainLayout' } },
  { path: '/invest', name: 'investView', component: InvestView, meta: { layout: 'MainLayout' } },
  { path: '/dev', name: 'developerView', component: DeveloperView, meta: { layout: 'MainLayout' } },
  { path: '/landing-page', name: 'landingPageView', component: LandingPageView, meta: { layout: 'FullPageLayout' } },
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/frontend/' : '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.meta.layout === 'MainLayout') {
      document.querySelector('.main-layout > div').scrollTo(0, 0);

      return { top: 0 }; // 페이지 최상단으로 이동
    }
  },
});

export default router;