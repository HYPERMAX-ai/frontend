<template>
  <wmx-modal container-class="pool-manage-modal pt-[16px] pb-0 px-0" v-model="modelValue">
    <template #title>
      <wmx-title class="px-[24px]" :show-refresh="false">Information</wmx-title>
    </template>
    <template #default>
      <div class="w-full tablet:w-[560px] pt-[4px] pb-[16px] px-[16px] tablet:pb-[24px] tablet:px-[24px] ">

        <pool-manage-section />

      </div>
    </template>
  </wmx-modal>
</template>

<script setup>
import WmxModal from "@/components/wmx-modal/WmxModal.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import PoolManageSection from "@/views/modal/components/PoolManageSection.vue";

const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});
</script>

<style >
.pool-manage-modal {

  .wmx-modal-top {
    padding: 0 0 16px;

    .btn-close {
      margin-right: 16px;
    }
  }
}
</style>