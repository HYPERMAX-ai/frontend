<template>
  <div class="developer-view flex flex-col overflow-hidden p-[32px]">

    <router-link to="/invest" class="btn-radius border">Move : Invest</router-link>

    <div class="mx-auto max-w-[640px] mt-[32px] ">
      <h1 class="mb-[16px]">Developer View</h1>

      <div class="w-full flex flex-wrap gap-[16px] mb-[16px]">
        <button class="btn-radius border" @click="openAlert = true">Normal Alert</button>
        <button class="btn-radius border" @click="openStoppedAlert = true">Stopped Alert</button>
        <button class="btn-radius border" @click="openProceedingAlert = true">Proceeding Alert</button>
      </div>

      <div class="w-full flex flex-wrap gap-[16px] mb-[16px]">
        <button class="btn-radius border" @click="openApproveConfirm1 = true">Approve Confirm1</button>
        <button class="btn-radius border" @click="openApproveConfirm2 = true">Approve Confirm2</button>
      </div>

      <div class="mt-[16px] p-[32px] bg-[var(--color-icon-path)]-dark rounded-[16px]">
        approvalList1 : {{approvalList1.map((item) => item.approval)}}<br>
        approvalList2 : {{approvalList2.map((item) => item.approval)}}
      </div>

    </div>
  </div>

  <!-- alert -->
  <wmx-alert v-model="openAlert" title="Alert Title" content="Alert Content"/>
  <stopped-alert v-model="openStoppedAlert" />
  <proceeding-alert v-model="openProceedingAlert" />
  <approve-confirm v-model="openApproveConfirm1" :approvalList="approvalList1" @ok="onClickOk"/>
  <approve-confirm v-model="openApproveConfirm2" :approvalList="approvalList2" @ok="onClickOk"/>
</template>
<script setup>
import {ref} from "vue";
import store from "@/store";
import WmxAlert from "@/components/wmx-modal/WmxAlert.vue";
import StoppedAlert from "@/views/modal/alert/StoppedAlert.vue";
import ProceedingAlert from "@/views/modal/alert/ProceedingAlert.vue";
import ApproveConfirm from "@/views/modal/alert/ApproveConfirm.vue";
const openAlert = ref(false);
const openStoppedAlert = ref(false);
const openProceedingAlert = ref(false);
const openApproveConfirm1 = ref(false);
const openApproveConfirm2 = ref(false);
store.commit('setPageName', 'Dev');
const approvalList1 = ref([
  {
    icon: require("@/assets/icons/ic_protocol.png"),
    approval: false,
  },
]);
const approvalList2 = ref([
  {
    icon: require("@/assets/icons/ic_protocol.png"),
    approval: false,
  },
  {
    icon: require("@/assets/icons/ic_protocol_2.png"),
    approval: false,
  },
]);

const onClickOk = () => {
  console.log("onClickOk");
}

</script>
<style scoped>

</style>