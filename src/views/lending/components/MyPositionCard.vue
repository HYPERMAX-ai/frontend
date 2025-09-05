<template>
  <div class="w-full">
    <!-- title -->
    <div class="flex items-center">
      <wmx-title :refresh="refresh" @refresh="onClickRefresh" class="px-[8px]">My Position</wmx-title>

      <div class="flex items-center ml-auto font-semibold">
        <wmx-tooltip>
          <div class="flex items-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99935 12.8337C10.221 12.8337 12.8327 10.222 12.8327 7.00033C12.8327 3.77866 10.221 1.16699 6.99935 1.16699C3.77769 1.16699 1.16602 3.77866 1.16602 7.00033C1.16602 10.222 3.77769 12.8337 6.99935 12.8337Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 9.33333V7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 4.66699H7.00667" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <template #tooltip>
            <div class="w-[200px] overflow-hidden whitespace-break-spaces text-white">
              <p class="mb-[12px] font-semibold text-[14px]">EMODE?</p>
              <span class="font-normal text-[13px]">In E-Mode some assets are not borrowable. Exit E-Mode to get access to all assets</span>
            </div>
          </template>
        </wmx-tooltip>
        <span class="ml-[4px] text-[20px]" :class="[isMax && 'text-[var(--color-btn-active-bg)]']">MAX</span>
        <wmx-swtich class="ml-[10px]" v-model="isMax"/>
      </div>

    </div>

    <!-- Risk Ratio -->
    <article class="mt-[20px] border rounded-[8px] p-[24px]">
      <div class="py-[16px] px-[8px] border-bottom">
        <h5 class="font-semibold text-[16px]">Risk Ratio : <span>{{ riskRatio }}%</span></h5>
      </div>
      <risk-ratio-selector
          v-model="riskRatio"
          disabled
          :min="18"
          :max="103"
          :limitMin="20"
          :limitMax="100"
          :step="1"
          :tickValues="[20, 40, 60, 80, 90, 100]"
          :axisList="{20:'Safe', 40:'Stable', 60:'Caution', 80:'Danger', 90: '', 100:'Liquidation'}"
          :borrow-limit="90"
          class="mt-[16px]"/>
    </article>


    <div class="mt-[32px] grid grid-cols-1 gap-[16px] items-start">
      <!-- My Supply -->
      <wmx-table title="My Supply" class="bg-[#11182780]" :use-header="hasTablet">
        <template #top-right>
          <span class="font-bold text-[18px]">$208,000</span>
        </template>

        <!-- 테이블 헤더 -->
        <template #header>
          <wmx-table-head width="">Asset</wmx-table-head>
          <wmx-table-head :width="86">Supply</wmx-table-head>
          <wmx-table-head :width="86">Price</wmx-table-head>
          <wmx-table-head :width="132">Collateral%</wmx-table-head>
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
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button class="ml-[10px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10.8337H4.16699V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                </svg>
              </button>
              <button class="ml-[4px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10.8337H10.8337V15.8337H9.16699V10.8337H4.16699V9.16699H9.16699V4.16699H10.8337V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                </svg>
              </button>
            </div>

            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <div class="flex items-center">
                    <button class="ml-[10px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8337 10.8337H4.16699V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                      </svg>
                    </button>
                    <button class="ml-[4px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8337 10.8337H10.8337V15.8337H9.16699V10.8337H4.16699V9.16699H9.16699V4.16699H10.8337V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Price</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Supply</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Collateral%</p>
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
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
              />
            </div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button class="ml-[10px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10.8337H4.16699V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                </svg>
              </button>
              <button class="ml-[4px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10.8337H10.8337V15.8337H9.16699V10.8337H4.16699V9.16699H9.16699V4.16699H10.8337V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                </svg>
              </button>
            </div>
            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <div class="flex items-center">
                    <button class="ml-[10px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8337 10.8337H4.16699V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                      </svg>
                    </button>
                    <button class="ml-[4px] p-[6px] btn-radius bg-[var(--color-btn-active-bg)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8337 10.8337H10.8337V15.8337H9.16699V10.8337H4.16699V9.16699H9.16699V4.16699H10.8337V9.16699H15.8337V10.8337Z" fill="var(--color-body-bg)"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Price</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Price</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Uitilization</p>
                    <p class="font-semibold">210.12%</p>
                  </div>
                </div>
              </div>
            </template>
          </wmx-table-item>
        </template>
      </wmx-table>

      <!-- MyBorrow -->
      <wmx-table title="My Borrow" class="bg-[#11182780]" :use-header="hasTablet">
        <template #top-right>
          <span class="font-bold text-[18px]">$208,000</span>
        </template>

        <!-- 테이블 헤더 -->
        <template #header>
          <wmx-table-head width="">Asset</wmx-table-head>
          <wmx-table-head :width="86">Borrow</wmx-table-head>
          <wmx-table-head :width="86">Price</wmx-table-head>
          <wmx-table-head :width="132">Uitilization</wmx-table-head>
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
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex flex-col">
              <span>5,240.000</span>
              <span class="font-medium text-[var(--color-title-text2)] text-[13px]">$208,624</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold">210.12%</span>
              <button class="ml-[10px] p-[6px] btn-radius bg-[var(--color-btn-active2-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10.8337H4.16699V9.16699H15.8337V10.8337Z" fill="var(--color-btn-active2-text)"/>
                </svg>
              </button>
              <button class="ml-[4px] p-[6px] btn-radius bg-[var(--color-btn-active2-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10.8337H10.8337V15.8337H9.16699V10.8337H4.16699V9.16699H9.16699V4.16699H10.8337V9.16699H15.8337V10.8337Z" fill="var(--color-btn-active2-text)"/>
                </svg>
              </button>
            </div>
            <template #mobile>
              <div>
                <div class="flex items-center justify-between">
                  <pool-info
                      title="WEMIX"
                      :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  />
                  <div class="flex items-center">
                    <button class="ml-[10px] p-[6px] btn-radius bg-[var(--color-btn-active2-bg)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8337 10.8337H4.16699V9.16699H15.8337V10.8337Z" fill="var(--color-btn-active2-text)"/>
                      </svg>
                    </button>
                    <button class="ml-[4px] p-[6px] btn-radius bg-[var(--color-btn-active2-bg)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8337 10.8337H10.8337V15.8337H9.16699V10.8337H4.16699V9.16699H9.16699V4.16699H10.8337V9.16699H15.8337V10.8337Z" fill="var(--color-btn-active2-text)"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex mt-[8px]">
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Borrow</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Price</p>
                    <p class="font-semibold">5,240,000</p>
                    <p class="font-medium text-[13px] text-[var(--color-title-text2)]">$208,624</p>
                  </div>
                  <div class="flex-1 text-right">
                    <p class="font-medium text-[13px] text-[var(--color-icon-path)]">Collateral%</p>
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
</template>

<script setup>
import {computed, inject, ref} from "vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import WmxSwtich from "@/components/wmx-select/WmxSwtich.vue";
import RiskRatioSelector from "@/views/lending/components/article/RiskRatioSelector.vue";
import WmxTable from "@/components/wmx-table/WmxTable.vue";
import WmxTableItem from "@/components/wmx-table/WmxTableItem.vue";
import PoolInfo from "@/views/pool/components/article/PoolInfo.vue";
import WmxTableHead from "@/components/wmx-table/WmxTableHead.vue";
import WmxTooltip from "@/components/wmx-tooltip/WmxTooltip.vue";
const $viewport = inject('viewport');
const hasTablet = computed(() => $viewport.hasTarget('tablet') );
const refresh = ref();
const isMax = ref(false);
const riskRatio = ref(30);

const onClickRefresh = () => {
  refresh.value = !refresh.value;
}
</script>

<style scoped>

</style>