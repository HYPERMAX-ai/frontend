<template>
  <wmx-modal title="Symbols" v-model="modelValue">
    <div class="search-symbols-modal w-auto tablet:w-[560px] max-w-full">
      <div class="pb-[8px] px-0 tablet:px-[8px] ">
        <wmx-search :placeholder="''"/>
      </div>

      <section>
        <main class="text-[14px] font-semibold overflow-y-auto" :class="{'content-area': !hasTablet}">
          <slot></slot>
        </main>
      </section>
    </div>
  </wmx-modal>
</template>

<script setup>
import {computed, inject} from "vue";
import WmxSearch from "@/components/wmx-search/WmxSearch.vue";
import WmxModal from "@/components/wmx-modal/WmxModal.vue";

const $viewport = inject('viewport');
const hasTablet = computed(() => $viewport.hasTarget('tablet') );
const modelValue = defineModel({prop: 'modelValue', event: 'update:modelValue'});
</script>

<style scoped>

</style>