<template>
  <div
      class="invest flex flex-col gap-[16px]
      py-[20px] px-[16px] laptop:px-[24px]

      mx-auto
      tablet:max-w-[550px] laptop:max-w-[900px]
  ">
    <invest-section />
  </div>
</template>

<script setup>
import store from "@/store";
import InvestSection from "@/views/invest/components/InvestSection.vue";
import { onMounted } from "vue";

store.commit('setPageName', 'SmartETF');

// Update page meta tags for SEO
onMounted(() => {
  // Update document title
  document.title = 'SmartETFs - HYPERMAX | Onchain Crypto ETFs on Hyperliquid';
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'SmartETFs package institutional-grade crypto strategies into simple onchain tokens, listed directly on Hyperliquid spot. Access diversified, risk-adjusted returns with a single trade on HYPERMAX.');
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', 'SmartETFs - HYPERMAX | Onchain Crypto ETFs');
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', 'SmartETFs package institutional-grade crypto strategies into simple onchain tokens, listed directly on Hyperliquid spot. Access diversified, risk-adjusted returns with a single trade.');
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', 'https://app.hypermax.ai/invest');
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', 'https://app.hypermax.ai/invest');
  }
});
</script>

<style scoped>

</style>