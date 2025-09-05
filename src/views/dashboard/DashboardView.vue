<template>
  <div class="dashboard h-full px-[16px] py-[24px] tablet:px-[24px]">
    <div class="grid grid-cols-4 gap-y-[16px] laptop:gap-y-[24px] gap-x-[16px]">
      <p class="block font-bold text-[18px] text-white">Overview</p>

      <!-- token card -->
      <div class="col-span-4 grid grid-cols-1 tablet:grid-cols-3 gap-[8px] tablet:gap-[16px]">
        <token-chart-card
            class="w-full col-span-1"
            name="HYPE"
            :icon="require('@/assets/dummy/avatar-mx_32x32.svg')"
            price="$0.9918"
            priceChange="+2.5%(24h)"
        />
        <token-chart-card
            class="w-full col-span-1"
            name="maxHYPE"
            :icon="require('@/assets/dummy/avatar-mx_32x32.svg')"
            price="$0.9918"
            priceChange="+2.5%(24h)"
        />
        <token-chart-card
            class="w-full col-span-1"
            name="HLP"
            :icon="require('@/assets/dummy/avatar-mx_32x32.svg')"
            price="$0.9918"
            priceChange="+2.5%(24h)"
        />
      </div>

      <div class="grid grid-cols-1 laptop:grid-cols-2 col-span-4 gap-[8px] tablet:gap-[16px]">
        <total-value-locked-card class="w-full laptop:row-span-2"/>
        <trading-volume-card class="w-full"/>
        <user-card class="w-full"/>
      </div>

      <!-- etc card -->
      <div class="col-span-4 grid grid-cols-1 laptop:grid-cols-3 gap-[16px]">
        <router-link to="/staking" class="w-full col-span-1 btn-action">
          <staking-card
              class="hover:!border-[var(--color-icon-path)] hover:!bg-[var(--color-border)] hover:!translate-x-[2px] hover:!translate-y-[2px]"
              :total-staked="{ value: '$2.1M', valueChange: '+5.2%' }"
              :apy="{ value: '10.5%', valueChange: '+3.1%' }"/>
        </router-link>
        <router-link to="/swap" class="w-full col-span-1 btn-action">
          <trading-card
              class="hover:!border-[var(--color-icon-path)] hover:!bg-[var(--color-border)] hover:!translate-x-[2px] hover:!translate-y-[2px]"
              :volume="{ value: '$2.1M', valueChange: '+5.2%' }"
              :fees="{ value: '12', valueChange: '+0.2%' }"/>
        </router-link>
        <router-link to="/lending" class="w-full col-span-1 btn-action">
          <lending-card
              class="hover:!border-[var(--color-icon-path)] hover:!bg-[var(--color-border)] hover:!translate-x-[2px] hover:!translate-y-[2px]"
              :supplied="{ value: '$12.3M', valueChange: '+2.5%' }"
              :apr="{ value: '10.5%', valueChange: '+0.2%' }"/>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import TokenChartCard from "@/views/dashboard/components/TokenChartCard.vue";
import StakingCard from "@/views/dashboard/components/StakingCard.vue";
import TradingCard from "@/views/dashboard/components/TradingCard.vue";
import LendingCard from "@/views/dashboard/components/LendingCard.vue";
import TotalValueLockedCard from "@/views/dashboard/components/TotalValueLockedCard.vue";
import TradingVolumeCard from "@/views/dashboard/components/TradingVolumeCard.vue";
import UserCard from "@/views/dashboard/components/UserCard.vue";
import store from "@/store";

store.commit('setPageName', 'Dashboard');
</script>
<style scoped>
</style>