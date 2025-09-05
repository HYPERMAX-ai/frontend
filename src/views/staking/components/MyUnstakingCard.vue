<template>
  <wmx-card-layout class="!p-0 tablet:p-0">
    <div class="my-unstaking-card">
      <wmx-table class="border-0">
        <template #title>
          <div class="flex">
            <span>My Unstaking</span>
            <span class="ml-auto">987.6543</span>
          </div>
        </template>
        <!-- 테이블 헤더 -->
        <template #header>
          <wmx-table-head :width="24">ID</wmx-table-head>
          <wmx-table-head width="">Receive <span class="hidden tablet:block ml-[4px]">Amount</span></wmx-table-head>
          <wmx-table-head :width="126">Claimable Date</wmx-table-head>
          <wmx-table-head :width="58"></wmx-table-head>
        </template>

        <!-- 테이블 바디 -->
        <template #body>
          <wmx-table-item>
            <div>1</div>
            <div>987,654,321</div>
            <div>2024.10.01 20:58</div>
            <div>
              <button class="btn-tag btn-action">Claim</button>
            </div>
          </wmx-table-item>
          <wmx-table-item>
            <div>2</div>
            <div>987,654,321</div>
            <div>2024.10.01 20:58</div>
            <div>
              <button class="btn-tag btn-action">Claim</button>
            </div>
          </wmx-table-item>
          <wmx-table-item>
            <div>3</div>
            <div>987,654,321</div>
            <div>2024.10.01 20:58</div>
            <div>
              <button class="btn-tag btn-action">Claim</button>
            </div>
          </wmx-table-item>
        </template>
      </wmx-table>
    </div>
  </wmx-card-layout>
</template>
<script setup>
import WmxTable from "@/components/wmx-table/WmxTable.vue";
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxTableHead from "@/components/wmx-table/WmxTableHead.vue";
import WmxTableItem from "@/components/wmx-table/WmxTableItem.vue";
</script>

<style scoped>

</style>