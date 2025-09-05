<template>
  <wmx-modal container-class="pool-min-modal pt-[16px] pb-0 px-0" v-model="modelValue">
    <template #title>
      <wmx-title class="px-[24px]">Mint</wmx-title>
    </template>
    <template #default>
      <div class="pool-min-modal-container w-full tablet:w-[560px] pt-[4px] pb-[16px] px-[16px] tablet:pb-[24px] tablet:px-[24px] ">

        <pool-mint-section />

      </div>
    </template>
  </wmx-modal>
</template>

<script setup>
import WmxModal from "@/components/wmx-modal/WmxModal.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import PoolMintSection from "@/views/modal/components/PoolMintSection.vue";

const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});
</script>
<style >
.pool-min-modal {

  .wmx-modal-top {
    padding: 0 0 16px;

    .btn-close {
      margin-right: 16px;
    }
  }
}
</style>