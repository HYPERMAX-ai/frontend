<template>
  <div class="grid w-full ">
    <!-- title -->
    <div class="flex items-center">
      <wmx-title :refresh="refresh" @refresh="onClickRefresh" class="px-[8px]">Lending</wmx-title>
    </div>

    <div class="mt-[16px] desktop:mt-[32px] grid grid-cols-1 gap-[16px] items-start">
      <!-- Market Supply -->
      <wmx-table title="Market Supply" class="bg-[#11182780]" :useHeader="hasTablet">
        <template #top-right>
          <span class="font-bold text-[18px]">$208,000</span>
        </template>

        <!-- 테이블 헤더 -->
        <template #header>
          <wmx-table-head width="" >Asset</wmx-table-head>
          <wmx-table-head :width="92">Balance</wmx-table-head>
          <wmx-table-head :width="92">Total Supply</wmx-table-head>
          <wmx-table-head :width="128">Supply APY</wmx-table-head>
        </template>

        <!-- 테이블 바디 -->
        <template #body>
          <wmx-table-item>
            <div class="flex items-center">
              <pool-info
                  title="WEMIX"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
              />
            </div>
            <div>5,240.000</div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button
                  class="ml-[10px] py-[8px] px-[12px]
                    btn-radius bg-[var(--color-btn-active-bg)]
                    font-medium text-[var(--color-body-bg)] text-[13px]"
                  @click="onClickOpenSupplyModal('item1')">Supply</button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <button
                      class="ml-[10px] py-[8px] px-[12px]
                        btn-radius bg-[var(--color-btn-active-bg)]
                        font-medium text-[var(--color-body-bg)] text-[13px]"
                      @click="onClickOpenSupplyModal('item1')"
                  >Supply</button>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Balance</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Total Supply</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Supply APY</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
          <wmx-table-item>
            <div class="flex items-center">
              <pool-info
                  title="Kakao Games"
                  :avatar1="require('@/assets/dummy/avatar-005_32x32.png')"
              />
            </div>
            <div>5,240.000</div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button
                  class="ml-[10px] py-[8px] px-[12px]
                    btn-radius bg-[var(--color-btn-active-bg)]
                    font-medium text-[var(--color-body-bg)] text-[13px]"
                  @click="onClickOpenSupplyModal('item2')"
              >Supply</button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <button
                      class="ml-[10px] py-[8px] px-[12px]
                        btn-radius bg-[var(--color-btn-active-bg)]
                        font-medium text-[var(--color-body-bg)] text-[13px]"
                      @click="onClickOpenSupplyModal('item2')">Supply</button>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Balance</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Total Supply</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Supply APY</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
          <wmx-table-item>
            <div class="flex items-center">
              <pool-info
                  title="WEMIX"
                  :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
              />
            </div>
            <div>5,240.000</div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button
                  class="ml-[10px] py-[8px] px-[12px]
                    btn-radius bg-[var(--color-btn-active-bg)]
                    font-medium text-[var(--color-body-bg)] text-[13px]"
                  @click="onClickOpenSupplyModal('item3')">Supply</button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <button
                      class="ml-[10px] py-[8px] px-[12px]
                        btn-radius bg-[var(--color-btn-active-bg)]
                        font-medium text-[var(--color-body-bg)] text-[13px]"
                      @click="onClickOpenSupplyModal('item3')">Supply</button>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Balance</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Total Supply</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Supply APY</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
        </template>
      </wmx-table>

      <!-- Market Borrow -->
      <wmx-table title="Market Borrow" class="bg-[#11182780]" :useHeader="hasTablet">
        <template #top-right>
          <span class="font-bold text-[18px]">$208,000</span>
        </template>

        <!-- 테이블 헤더 -->
        <template #header>
          <wmx-table-head width="" >Asset</wmx-table-head>
          <wmx-table-head :width="92">Balance</wmx-table-head>
          <wmx-table-head :width="92">Total Borrow</wmx-table-head>
          <wmx-table-head :width="128">Borrow APY</wmx-table-head>
        </template>

        <!-- 테이블 바디 -->
        <template #body>
          <wmx-table-item>
            <div class="flex items-center">
              <pool-info
                  title="WEMIX"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
              />
            </div>
            <div>5,240.000</div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button
                  class="ml-[10px] py-[8px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                  @click="onClickOpenBorrowModal('item1')"
              >Borrow</button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <button
                      class="ml-[10px] py-[8px] px-[12px]
                        btn-radius bg-[var(--color-btn-active2-bg)]
                        font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickOpenBorrowModal('item1')">Borrow</button>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Balance</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Total Borrow</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Borrow APY</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
          <wmx-table-item>
            <div class="flex items-center">
              <pool-info
                  title="Kakao Games"
                  :avatar1="require('@/assets/dummy/avatar-005_32x32.png')"
              />
            </div>
            <div>5,240.000</div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button
                  class="ml-[10px] py-[8px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                  @click="onClickOpenBorrowModal('item2')">Borrow</button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <button
                      class="ml-[10px] py-[8px] px-[12px]
                        btn-radius bg-[var(--color-btn-active2-bg)]
                        font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickOpenBorrowModal('item2')">Borrow</button>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Balance</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Total Borrow</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Borrow APY</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
          <wmx-table-item>
            <div class="flex items-center">
              <pool-info
                  title="WEMIX"
                  :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
              />
            </div>
            <div>5,240.000</div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button
                  class="ml-[10px] py-[8px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                  @click="onClickOpenBorrowModal('item3')"
              >Borrow</button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <button
                      class="ml-[10px] py-[8px] px-[12px]
                        btn-radius bg-[var(--color-btn-active2-bg)]
                        font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickOpenBorrowModal('item3')"
                  >Borrow</button>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Balance</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Total Borrow</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Borrow APY</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
        </template>
      </wmx-table>
    </div>

  </div>

  <lending-market-supply-modal
    v-model="openSupplyModal"
  />
  <lending-market-borrow-modal
    v-model="openBorrowModal"
  />
</template>

<script setup>
import {computed, inject, ref} from "vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxTable from "@/components/wmx-table/WmxTable.vue";
import WmxTableItem from "@/components/wmx-table/WmxTableItem.vue";
import PoolInfo from "@/views/pool/components/article/PoolInfo.vue";
import WmxTableHead from "@/components/wmx-table/WmxTableHead.vue";
import LendingMarketSupplyModal from "@/views/modal/LendingMarketSupplyModal.vue";
import LendingMarketBorrowModal from "@/views/modal/LendingMarketBorrowModal.vue";
const $viewport = inject('viewport');
const refresh = ref();
const openSupplyModal = ref(false);
const openBorrowModal = ref(false);

const hasTablet = computed(() => {
  return $viewport.hasTarget('tablet');
});

const onClickRefresh = () => {
  refresh.value = !refresh.value;
}
const onClickOpenSupplyModal = (id) => {
  console.log("click", id);
  openSupplyModal.value = true;
}
const onClickOpenBorrowModal = (id) => {
  console.log("click", id);
  openBorrowModal.value = true;
}
</script>

<style scoped>

</style>