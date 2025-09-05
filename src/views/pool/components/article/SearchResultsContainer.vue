<template>
  <article
      class="search-results-container m-0 tablet:my-[8px] tablet:mx-[8px] grid gap-[8px] w-[429px] select-none"
      :style="{height : height >=0 ? height + 'px': 'auto'}"
      @click.stop
  >
    <h5 v-if="title" class="py-[11px] px-[16px] h-full text-[16px] font-semibold">{{ title }}</h5>
    <ul class="list-style-none h-full">
      <slot></slot>
    </ul>
  </article>
</template>
<script setup>
const { height, title } = defineProps({
  title: String,
  height: {
    type: Number,
    default: -1,
  },
})

</script>

<style>
.search-results-container {
  grid-template-rows: auto 1fr;

  .list-style-none {
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0;

    .search-result-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: none;
      border-radius: 8px;
      &:hover {
        background: var(--color-side-menu-active-bg);
      }
    }
  }

  li {
    padding: 12px 8px;
    cursor: pointer;
  }
}


</style>