<template>
  <wmx-modal title="Select a Token" container-class="select-a-token-modal" v-model="modelValue">
    <template #subTop>
      <div class="px-[8px]">
        <wmx-search :placeholder="''"/>
        <header class="flex justify-between items-center py-[12px] px-[8px] text-[var(--color-gray-wemax)] text-[13px]">
          <span class="" >Token</span>
          <span>Balance</span>
        </header>
      </div>
    </template>
    <main class="text-[14px] font-semibold " :class="{'content-area': !hasTablet}">
      <div class="select-a-token-item flex py-[11px] px-[8px] items-center rounded-[8px] hover:bg-[var(--color-side-menu-active-bg)] cursor-pointer">
        <!-- token -->
        <div class="flex gap-[6px] items-center">
              <span class="w-[24px] h-[24px]">
                <img :src="require('@/assets/dummy/avatar-005_32x32.png')" alt="avatar" class="w-full h-full" />
              </span>
          <span>WEMIX/WEMIX$</span>
          <button class="btn-icon btn-action bg-white w-[26px] h-[26px]">
            <img :src="require('@/assets/icons/ic_bookmark_add.svg')" alt="ic_bookmark_add" class="w-[16px] h-[16px]" />
          </button>
        </div>
        <!-- balance -->
        <span class="ml-auto flex items-center">20.2345</span>
      </div>

      <div class="select-a-token-item flex py-[11px] px-[8px] items-center rounded-[8px] hover:bg-[var(--color-side-menu-active-bg)] cursor-pointer">
        <!-- token -->
        <div class="flex gap-[6px] items-center">
              <span class="w-[24px] h-[24px]">
                <img :src="require('@/assets/dummy/avatar-005_32x32.png')" alt="avatar" class="w-full h-full" />
              </span>
          <span>WEMIX/WEMIX$</span>
          <button class="btn-icon btn-action bg-white w-[26px] h-[26px]">
            <img :src="require('@/assets/icons/ic_content_copy.svg')" alt="ic_content_copy" class="w-[16px] h-[16px]" />
          </button>
        </div>
        <!-- balance -->
        <span class="ml-auto flex items-center">20.2345</span>
      </div>

      <div v-for="i in 10" :key="i"
          class="select-a-token-item flex py-[11px] px-[8px] items-center rounded-[8px] hover:bg-[var(--color-side-menu-active-bg)] cursor-pointer">
        <!-- token -->
        <div class="flex gap-[6px] items-center">
              <span class="w-[24px] h-[24px]">
                <img :src="require('@/assets/dummy/avatar-005_32x32.png')" alt="avatar" class="w-full h-full" />
              </span>
          <span>WEMIX/WEMIX$</span>
        </div>
        <!-- balance -->
        <span class="ml-auto flex items-center">20.2345</span>
      </div>
    </main>
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

<style>
.select-a-token-modal {
  .wmx-modal-content {
    max-height: calc(100svh - 218px) !important;
  }
}
</style>