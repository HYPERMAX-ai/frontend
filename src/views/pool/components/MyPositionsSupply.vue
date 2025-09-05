<template>
  <article class="my-positions-supply">
    <wmx-table
        title="My Supply"
        use-search
        use-pagination
        :use-header="hasTablet"
        @clickSearch="onClickSearchIcon">

      <!-- 테이블 헤더 -->
      <template #header>
        <wmx-table-head :width="hasLaptop ? 32: 24" class="hidden laptop:flex">ID</wmx-table-head>
        <wmx-table-head width="">Pool</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 120: 96">My Depoist</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 96: 56">Reward</wmx-table-head>
        <wmx-table-head :width="hasLaptop ? 80: 80"></wmx-table-head>
      </template>

      <!-- 테이블 바디 -->
      <template #body>
        <wmx-table-item>
          <div>1</div>
          <div class="flex items-center">
            <pool-info
                title="TIPO/WEMIX$"
                :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                percentage="0.25%"
            />
            <pool-info-detail
                :isWithinRange="true"
                title="FRC/WEMIX$"
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="+6.05%"
                :min="1.02"
                :max="2.542"
                :last="3.425"
            />
          </div>
          <div class="text-right pr-[16px] laptop:pr-[32px]">
            <p>86,240,000</p>
            <p class="text-[13px] font-medium">$208,624</p>
          </div>
          <div>10.28%</div>
          <div>
            <button class="py-[6px] px-[12px]
                    btn-radius bg-[var(--color-btn-active2-bg)]
                    font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                    @click="onClickManage({no: 1})"
            >Manage</button>
          </div>

          <!-- mobile -->
          <template #mobile>
            <div class="flex items-center py-[8px] mb-[8px]">
              <pool-info
                  title="TIPO/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                  percentage="0.25%"
              />
              <pool-info-detail
                  :isWithinRange="true"
                  title="TIPO/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                  percentage="+6.05%"
                  :min="1.02"
                  :max="2.542"
                  :last="3.425"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 1})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">Reward</span>
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
                :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-005_32x32.png')"
                percentage="0.25%"
            />
            <pool-info-detail
                :isWithinRange="true"
                title="FRC/WEMIX$"
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="+6.05%"
                :min="1.02"
                :max="2.542"
                :last="3.425"
            />
          </div>
          <div class="text-right pr-[16px] laptop:pr-[32px]">
            <p>86,240,000</p>
            <p class="text-[13px] font-medium">$208,624</p>
          </div>
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
              <pool-info-detail
                  :isWithinRange="true"
                  title="WEMIX/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-004_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-005_32x32.png')"
                  percentage="+6.05%"
                  :min="1.02"
                  :max="2.542"
                  :last="3.425"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 2})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">Reward</span>
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
                :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                percentage="0.25%"
            />
            <pool-info-detail
                :isWithinRange="false"
                title="FRC/WEMIX$"
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="+6.05%"
                :min="1.02"
                :max="2.542"
                :last="3.425"
            />
          </div>
          <div class="text-right pr-[16px] laptop:pr-[32px]">
            <p>86,240,000</p>
            <p class="text-[13px] font-medium">$208,624</p>
          </div>
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
              <pool-info-detail
                  :isWithinRange="false"
                  title="WCD/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-002_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-003_32x32.png')"
                  percentage="+6.05%"
                  :min="1.02"
                  :max="2.542"
                  :last="3.425"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 3})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">Reward</span>
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
                :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-007_32x32.png')"
                percentage="0.25%"
            />
            <pool-info-detail
                :isWithinRange="true"
                title="FRC/WEMIX$"
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="+6.05%"
                :min="1.02"
                :max="2.542"
                :last="3.425"
            />
          </div>
          <div class="text-right pr-[16px] laptop:pr-[32px]">
            <p>86,240,000</p>
            <p class="text-[13px] font-medium">$208,624</p>
          </div>
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
              <pool-info-detail
                  :isWithinRange="true"
                  title="WEMIX/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-006_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-007_32x32.png')"
                  percentage="+6.05%"
                  :min="1.02"
                  :max="2.542"
                  :last="3.425"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 4})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">Reward</span>
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
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="0.25%"
            />
            <pool-info-detail
                :isWithinRange="true"
                title="FRC/WEMIX$"
                :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                percentage="+6.05%"
                :min="1.02"
                :max="2.542"
                :last="3.425"
            />
          </div>
          <div class="text-right pr-[16px] laptop:pr-[32px]">
            <p>86,240,000</p>
            <p class="text-[13px] font-medium">$208,624</p>
          </div>
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
              <pool-info-detail
                  :isWithinRange="true"
                  title="FRC/WEMIX$"
                  :avatar1="require('@/assets/dummy/avatar-008_32x32.png')"
                  :avatar2="require('@/assets/dummy/avatar-009_32x32.png')"
                  percentage="+6.05%"
                  :min="1.02"
                  :max="2.542"
                  :last="3.425"
              />
              <button class="ml-auto py-[4px] px-[12px]
                      btn-radius bg-[var(--color-btn-active2-bg)]
                      font-medium text-[var(--color-btn-active2-text)] text-[13px]"
                      @click="onClickManage({no: 5})"
              >Manage</button>
            </div>
            <div class="flex justify-end">
              <div class="flex flex-col text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">My Deposit</span>
                <span class="text-[14px] font-semibold ">5,240,000</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium ">$208,624</span>
              </div>
              <div class="flex flex-col min-w-[80px] text-right">
                <span class="text-[var(--color-title-text2)] text-[13px] font-medium ">Reward</span>
                <span class="text-[14px] font-semibold ">210.12%</span>
                <span class="text-[var(--color-icon-path)]-dark text-[13px] font-medium "></span>
              </div>
            </div>
          </template>
        </wmx-table-item>
      </template>

      <!-- 검색 하단 창-->
      <template #search-results>
        <search-results-container title="Symbols">
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
  <pool-mint-modal v-model="isOpenMintModal" />

</template>
<script setup>
import {computed, inject, ref} from "vue";
const $viewport = inject('viewport');
import WmxTable from "@/components/wmx-table/WmxTable.vue";
import WmxTableHead from "@/components/wmx-table/WmxTableHead.vue";
import WmxTableItem from "@/components/wmx-table/WmxTableItem.vue";
import PoolInfo from "@/views/pool/components/article/PoolInfo.vue";
import SearchResultsContainer from "@/views/pool/components/article/SearchResultsContainer.vue";
import PoolInfoDetail from "@/views/pool/components/article/PoolInfoDetail.vue";
import SearchSymbolsModal from "@/views/modal/SearchSymbolsModal.vue";
import PoolMintModal from "@/views/modal/PoolMintModal.vue";

const isOpenSearchModal = ref(false);
const isOpenMintModal = ref(false);

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
  isOpenMintModal.value = true;
}
</script>

<style scoped></style>