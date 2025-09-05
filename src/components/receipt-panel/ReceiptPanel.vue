<template>
  <article class="receipt-panel font-medium text-[14px]">
    <slot></slot>
  </article>
</template>

<script setup>

</script>

<style>
.receipt-panel {
  line {
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    padding:0;
    margin:0;
  }
  line::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
  }
}
</style>