<template>
  <wmx-alert
      v-model="modelValue"
      title="Confirm Transaction"
      content="Please approve the requested action."
      :bottomSheet="!hasTablet"
  >
    <template #body>
      <div v-for="(approval, index) in approvalList" :key="index"
           class="items flex justify-between items-center p-[8px]">
        <button>
          <img :src="approval.icon" alt="ic_protocol" class="h-[48px]">
        </button>
        <div v-if="approval.approval"
             class="flex items-center mr-[20px] text-[var(--color-active-bg)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.79508 15.8749L4.62508 11.7049L3.20508 13.1149L8.79508 18.7049L20.7951 6.70492L19.3851 5.29492L8.79508 15.8749Z" fill="var(--color-active-bg)"/>
          </svg>
          <span class="ml-[4px]">Approved</span>
        </div>
        <button v-else
                class="btn-radius btn-action bg-[var(--color-active-bg)] text-[var(--color-body-bg)] font-semibold text-[14px]"
                @click="approval.approval = true">
          Approve
        </button>
      </div>

      <button
          :class="{'active': allApprove}"
          class="btn-ok btn-radius btn-action w-full mt-[32px] py-[14px] font-semibold text-[16px]"
          @click="onClickOk">Confirm</button>
    </template>
  </wmx-alert>
</template>

<script setup>
import WmxAlert from "@/components/wmx-modal/WmxAlert.vue";
import {computed, inject} from "vue";
const { approvalList } = defineProps({
  approvalList: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["ok"]);
const $viewport = inject('viewport');
const hasTablet = computed(() => $viewport.hasTarget('tablet') );
const modelValue = defineModel({
  prop: "modelValue",
  event: "update:modelValue",
});
const allApprove = computed(() => approvalList.every((item) => item.approval));

const onClickOk = () => {
  if (allApprove.value) {
    emit('ok')
    modelValue.value = false;
  }
}
</script>

<style scoped>
.btn-ok {
  background-color: var(--color-side-menu-active-bg);

  &.active {
    background-color: var(--color-active-bg);
    color: var(--color-black-peral);
  }
}

.items {
  border-top: 1px solid var(--color-border);
}
.items:first-child {
  border-top: none;
}
</style>