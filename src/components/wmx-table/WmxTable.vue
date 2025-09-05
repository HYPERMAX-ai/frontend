<template>
  <div class="wmx-table border rounded-[8px]">
    <!-- top -->
    <section
        class="wmx-table-top flex
        py-[16px] px-[16px]
        tablet:py-[12px] tablet:px-[16px]
        laptop:py-[18px] laptop:px-[24px]
        justify-between items-center"
    >
      <span class="w-full font-semibold text-[16px]">
        <slot name="title">{{ title }}</slot>
      </span>
      <slot name="top-right">
        <div v-if="useSearch">
          <wmx-search class="hidden tablet:block w-[197px] laptop:w-[464px]">
            <template #results><slot name="search-results"></slot></template>
          </wmx-search>
          <button class="block tablet:hidden" @click="onClickSearchIcon">
            <img src="@/assets/icons/ic_search.svg" alt="ic_search" />
          </button>
        </div>
      </slot>
    </section>

    <!-- center -->
    <section class="wmx-table-center">
      <div>
        <!-- header-->
        <div v-if="useHeader" class="wmx-table-header flex px-[16px] laptop:px-[24px] border-bottom">
          <slot name="header"></slot>
        </div>

        <!-- body -->
        <div>
          <slot name="body"></slot>
        </div>
      </div>
    </section>

    <!-- bottom -->
    <section v-if="usePagination" class="wmx-table-bottom hidden tablet:flex justify-center items-center">
      <wmx-pagination :last-page="5" v-model="currentPage"/>
    </section>
  </div>

</template>

<script setup>
import {ref} from "vue";
import WmxSearch from "@/components/wmx-search/WmxSearch.vue";
import WmxPagination from "@/components/wmx-table/WmxPagination.vue";
defineProps({
  title: String,
  useSearch: Boolean,
  useHeader: {
    type: Boolean,
    default: true
  },
  usePagination: Boolean,
  bgColor: String,
})
const emit = defineEmits(['clickSearch']);
const currentPage = ref(1);

const onClickSearchIcon = () => {
  emit('clickSearch');
}

</script>

<style scoped>
.wmx-table {
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: var(--color-table-text);

  /* padding */
  .wmx-table-bottom { padding: 12px 0; }

  /* border */
  .wmx-table-top { border-bottom: 1px solid var(--color-border); }
  .wmx-table-bottom { border-top: 1px solid var(--color-border); }
}
</style>