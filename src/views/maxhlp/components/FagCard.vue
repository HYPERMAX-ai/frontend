<template>
  <wmx-card-layout class="p-[24px]">
    <div class="fag-card flex flex-col">
      <wmx-title :showRefresh="false" class="px-[8px] py-[4px]">FAG</wmx-title>

      <div class="mt-[32px] grid gap-[8px]">
        <accordion-view v-for="fag in fagList" :key="fag.title"
                        :title="fag.title"
                        :content="fag.content"
                        :open="fag.open || false"
        />
      </div>
    </div>
  </wmx-card-layout>
</template>
<script setup>
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import AccordionView from "@/components/AccordionView.vue";
const fagList = [
  {
    title: "What is maxHYPE?",
    content: "Lido is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
    open: true
  },
  {
    title: "How does liquid staking work?",
    content: "Lido is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
  },
  {
    title: "What are the risks?",
    content: "Lido is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
  }
]
</script>

<style scoped>

</style>