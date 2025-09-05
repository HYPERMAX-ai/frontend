<template>
  <div
      class="staking flex flex-col
      gap-[16px] py-[20px] px-[16px] laptop:px-[24px]

      mx-auto
      tablet:max-w-[550px] laptop:max-w-[900px]
  ">

    <div class="w-full flex flex-col gap-[16px]">
      <maxhype-card/>
      <fag-card/>
    </div>

  </div>
</template>
<script setup>
import MaxhypeCard from "@/views/staking/components/MaxhypeCard.vue";
import FagCard from "@/views/staking/components/FagCard.vue";
import store from "@/store";
import { onMounted } from "vue";

store.commit('setPageName', 'Rates ETF');

// Update page meta tags for SEO
onMounted(() => {
  // Update document title
  document.title = 'Funding Rate ETF - HYPERMAX | Delta-Neutral Crypto ETF on Hyperliquid';
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Funding Rate ETF captures perpetual funding yields through a delta-neutral strategy, offering stable onchain income similar to a bond ETF. Trade on Hyperliquid with HYPERMAX.');
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', 'Funding Rate ETF - HYPERMAX | Delta-Neutral Crypto ETF');
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', 'Funding Rate ETF captures perpetual funding yields through a delta-neutral strategy, offering stable onchain income similar to a bond ETF.');
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', 'https://app.hypermax.ai/ratesetf');
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', 'https://app.hypermax.ai/ratesetf');
  }
});
</script>
<style scoped>
</style>
