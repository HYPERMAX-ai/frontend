<template>
  <article class="grid laptop:flex w-full p-[8px] laptop:p-[16px] gap-[24px]">
    <div class="flex gap-[24px]">
      <div class="grid my-auto gap-[8px] tablet:gap-0 font-bold items-center">
        <span class="supporting text-[16px] tablet:text-[20px] font-semibold tablet:font-bold " >Net APY</span>
        <div class="flex items-center">
          <span class="text-white text-[27px] tablet:text-[54px] leading-[1.185]">28.52</span>
          <span class="supporting text-[24px] tablet:text-[40px] leading-[1.185]">%</span>
        </div>
      </div>
    </div>

    <div class="grid tablet:flex laptop:ml-auto gap-[8px]">
      <wmx-card-info class="total-deposit flex-1 laptop:flex-auto" title="Total Deposit">
        <div class="tablet:px-[8px]">
          <span><span class="mr-1">$</span>3,780.560</span>
        </div>
      </wmx-card-info>

      <wmx-card-info class="total-reward flex-1 laptop:flex-auto" title="Total Reward">
        <div class="flex flex-wrap justify-end items-center">
          <span><span class="mr-1">$</span>4,638.577</span>
          <button
              class="btn-action ml-[12px] px-[10px] py-[5px] tablet:px-[12px] tablet:py-[7px]
              bg-[var(--color-body-bg)] text-[var(--color-body-text)] whitespace-nowrap rounded-full shadow-0224
              font-medium text-[12px] tablet:text-[14px] leading-[14.32px] tablet:leading-[16.71px]"
          >Claim All</button>
        </div>
      </wmx-card-info>
    </div>
  </article>
</template>

<script setup>
import WmxCardInfo from "@/components/wmx-card/WmxCardInfo.vue";
</script>

<style scoped>
.supporting {
  color: var(--color-body-text);
}


.total-deposit,
.total-reward {
  color: var(--color-body-bg);
}
.total-deposit {
  background-color: var(--color-body-text);
}
.total-reward {
  background-color: var(--color-active-bg);
}
</style>