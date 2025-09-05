<template>
  <wmx-alert
      v-model="modelValue"
      title="Confirm Trasaction"
      content="Please, sign order with your wallet.">
    <template #body>
      <div class="flex justify-between items-center p-[8px]">
        <button>
          <img :src="require('@/assets/icons/ic_protocol.png')" alt="ic_protocol" class="h-[48px]">
        </button>
        <stopped-button />
      </div>
    </template>
  </wmx-alert>
</template>

<script setup>
import WmxAlert from "@/components/wmx-modal/WmxAlert.vue";
import StoppedButton from "@/components/buttons/StoppedButton.vue";

const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});
</script>

<style scoped>

</style>