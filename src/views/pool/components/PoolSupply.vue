<template>
  <article class="pool-supply">
    <wmx-table
        title="My Supply"
        use-search
        use-pagination
        :use-header="hasTablet"
        @clickSearch="onClickSearchIcon">

      <!-- 테이블 헤더 -->
      <template #header >
        <wmx-table-head :width="hasLaptop ? 32: 24" sort-key="ID" class="hidden laptop:flex">ID</wmx-table-head>
        <wmx-table-head width="" sort-key="Pool">Pool</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 104: 90" sort-key="Liquidity">Liquidity</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 104: 90" sort-key="Volume (24h)">Volume (24h)</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 80: 56" sort-key="APR (7d)">APR (7d)</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 80: 72"></wmx-table-head>
      </template>

      <!-- 테이블 바디 -->
      <template #body>
        <wmx-table-item>
          <div>1</div>
          <div class="flex items-center">
            <pool-info
                title="TIPO/WEMIX$"
                :title-bottom="$viewport.screen === 'tablet'"
                :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                percentage="0.25%"
            />
          </div>
          <div>86,240,000</div>
          <div>86,240,000</div>
          <div>10.28%</div>
          <div>
            <button class="py-[6px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                    @click="onClickManage({no: 1})"
            >Manage</button>
          </div>

          <!-- mobile row -->
          <template #mobile>
            <div class="flex items-center py-[8px] mb-[8px]">
              <pool-info
                  title="TIPO/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                  percentage="0.25%"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 1})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">Reward</span>
                <span class="text-[14px] font-semibold ">210.12%</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium "></span>
              </div>
            </div>
          </template>
        </wmx-table-item>
        <wmx-table-item class="">
          <div>2</div>
          <div class="flex items-center">
            <pool-info
              title="WEMIX/WEMIX$"
              :title-bottom="$viewport.screen === 'tablet'"
              :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
              :avatar2="require('@/assets/dummy/avatar-005_32x32.png')"
              percentage="0.25%"
            />
          </div>
          <div>86,240,000</div>
          <div>86,240,000</div>
          <div>10.28%</div>
          <div>
            <button class="py-[6px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                    @click="onClickManage({no: 2})"
            >Manage</button>
          </div>
          <!-- mobile -->
          <template #mobile>
            <div class="flex items-center py-[8px] mb-[8px]">
              <pool-info
                  title="WEMIX/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-005_32x32.png')"
                  percentage="0.25%"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 2})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">Reward</span>
                <span class="text-[14px] font-semibold ">210.12%</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium "></span>
              </div>
            </div>
          </template>
        </wmx-table-item>
        <wmx-table-item class="py-[20px]">
          <div>3</div>
          <div class="flex items-center">
            <pool-info
                title="WCD/WEMIX$"
                :title-bottom="$viewport.screen === 'tablet'"
                :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                percentage="0.25%"
            />
          </div>
          <div>86,240,000</div>
          <div>86,240,000</div>
          <div>10.28%</div>
          <div>
            <button class="py-[6px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                    @click="onClickManage({no: 3})"
            >Manage</button>
          </div>
          <!-- mobile -->
          <template #mobile>
            <div class="flex items-center py-[8px] mb-[8px]">
              <pool-info
                  title="WCD/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                  percentage="0.25%"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 3})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">Reward</span>
                <span class="text-[14px] font-semibold ">210.12%</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium "></span>
              </div>
            </div>
          </template>
        </wmx-table-item>
        <wmx-table-item class="py-[20px]">
          <div>4</div>
          <div class="flex items-center">
            <pool-info
                title="WEMIX/WEMIX$"
                :title-bottom="$viewport.screen === 'tablet'"
                :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-007_32x32.png')"
                percentage="0.25%"
            />
          </div>
          <div>86,240,000</div>
          <div>86,240,000</div>
          <div>10.28%</div>
          <div>
            <button class="py-[6px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                    @click="onClickManage({no: 4})"
            >Manage</button>
          </div>
          <!-- mobile -->
          <template #mobile>
            <div class="flex items-center py-[8px] mb-[8px]">
              <pool-info
                  title="WEMIX/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-007_32x32.png')"
                  percentage="0.25%"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 4})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">Reward</span>
                <span class="text-[14px] font-semibold ">210.12%</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium "></span>
              </div>
            </div>
          </template>
        </wmx-table-item>
        <wmx-table-item class="py-[20px]">
          <div>5</div>
          <div class="flex items-center">
            <pool-info
                title="FRC/WEMIX"
                :title-bottom="$viewport.screen === 'tablet'"
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="0.25%"
            />
          </div>
          <div>86,240,000</div>
          <div>86,240,000</div>
          <div>10.28%</div>
          <div>
            <button class="py-[6px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                    @click="onClickManage({no: 5})"
            >Manage</button>
          </div>
          <!-- mobile -->
          <template #mobile>
            <div class="flex items-center py-[8px] mb-[8px]">
              <pool-info
                  title="FRC/WEMIX"
                  :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                  percentage="0.25%"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 5})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-icon-path)] text-[13px] font-medium ">Reward</span>
                <span class="text-[14px] font-semibold ">210.12%</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium "></span>
              </div>
            </div>
          </template>
        </wmx-table-item>
      </template>

      <!-- 검색 클릭시 -->
      <template #search-results>
        <search-results-container title="Trending">
          <li class="search-result-item">
            <pool-info
                title="WEMIX/WEMIX$"
                small
                :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
                percentage="0.25%"
            />
            <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+5.91%) </span>
          </li>
          <li class="search-result-item">
            <pool-info
                title="FRC/WEMIX"
                small
                :avatar1="require('@/assets/dummy/avatar-003_32x32.png')"
                percentage="0.25%"
            />
            <span class="font-medium text-[14px] text-[var(--color-minus)]"> (-2.91%) </span>
          </li>
          <li class="search-result-item">
            <pool-info
                title="FRC/WEMIX"
                small
                :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                percentage="0.25%"
            />
            <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+2.91%) </span>
          </li>
          <li class="search-result-item">
            <pool-info
                title="FRC/WEMIX"
                small
                :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                percentage="0.25%"
            />
            <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+2.91%) </span>
          </li>
          <li class="search-result-item">
            <pool-info
                title="FRC/WEMIX"
                small
                :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                percentage="0.25%"
            />
            <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+2.91%) </span>
          </li>
        </search-results-container>
      </template>
    </wmx-table>
  </article>

  <!-- search modal -->
  <search-symbols-modal v-model="isOpenSearchModal">
    <search-results-container>
      <li class="search-result-item">
        <pool-info
            title="WEMIX/WEMIX$"
            small
            :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
            percentage="0.25%"
        />
        <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+5.91%) </span>
      </li>
      <li class="search-result-item">
        <pool-info
            title="FRC/WEMIX"
            small
            :avatar1="require('@/assets/dummy/avatar-003_32x32.png')"
            percentage="0.25%"
        />
        <span class="font-medium text-[14px] text-[var(--color-minus)]"> (-2.91%) </span>
      </li>
      <li class="search-result-item">
        <pool-info
            title="FRC/WEMIX"
            small
            :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
            percentage="0.25%"
        />
        <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+2.91%) </span>
      </li>
      <li class="search-result-item">
        <pool-info
            title="FRC/WEMIX"
            small
            :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
            percentage="0.25%"
        />
        <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+2.91%) </span>
      </li>
      <li class="search-result-item">
        <pool-info
            title="FRC/WEMIX"
            small
            :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
            percentage="0.25%"
        />
        <span class="font-medium text-[14px] text-[var(--color-plus)]"> (+2.91%) </span>
      </li>
    </search-results-container>
  </search-symbols-modal>

  <!-- modal -->
  <pool-manage-modal v-model="isOpenManageModal" />

</template>
<script setup>
import {computed, inject, ref} from "vue";
const $viewport = inject('viewport');
import WmxTable from "@/components/wmx-table/WmxTable.vue";
import WmxTableHead from "@/components/wmx-table/WmxTableHead.vue";
import WmxTableItem from "@/components/wmx-table/WmxTableItem.vue";
import PoolInfo from "@/views/pool/components/article/PoolInfo.vue";
import SearchResultsContainer from "@/views/pool/components/article/SearchResultsContainer.vue";
import SearchSymbolsModal from "@/views/modal/SearchSymbolsModal.vue";
import PoolManageModal from "@/views/modal/PoolManageModal.vue";

const isOpenSearchModal = ref(false);
const isOpenManageModal = ref(false);

const hasLaptop = computed(() => {
  return $viewport.hasTarget('laptop');
});
const hasTablet = computed(() => {
  return $viewport.hasTarget('tablet');
});

const onClickSearchIcon = () => {
  isOpenSearchModal.value = true;
}

const onClickManage = ({ no }) => {
  console.log('onClickManage', no);
  isOpenManageModal.value = true;
}
</script>

<style scoped>

</style>