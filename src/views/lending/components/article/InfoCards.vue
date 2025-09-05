<template>
  <article class="info-cards">
    <slot></slot>
  </article>
</template>

<script setup>

</script>

<style scoped>
.info-cards {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  &::v-deep(.info-card) {
    flex-grow: 1;
    padding: 12px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-body-bg2);

    .label {
      font-weight: 600;
      color: var(--color-river-bed);
      margin-bottom: 8px;
      font-size: 12px;
    }

    .value {
      font-weight: 700;
      color: var(--color-body-text);
      font-size: 18px;
    }
  }
}
@screen laptop {
  .info-cards {
    &::v-deep(.info-card) {
      .label {
        font-size: 16px;
      }
      .value {
        font-size: 24px;
      }
    }
  }
}
@screen tablet {
  .info-cards {
    display: flex;
    &::v-deep(.info-card) {
      padding: 20px;
    }
  }
}
</style>