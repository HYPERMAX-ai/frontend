<template>
  <section>
    <button v-if="open" class="my-wallet flex items-center justify-center">
      <span class="profile-icon">
        <img class="m-auto w-[20px] h-[20px]" :src="require('@/assets/dummy/avatar-001_20x20.png')" alt="avatar-icon" />
      </span>
      <span class="wallet-address">{{ shortenText(address, 6, 4) }}</span>
    </button>
    <button v-else class="w-[147px] btn-radius text-[15px] bg-[var(--color-active-bg)] text-[var(--color-active-text)] font-medium">Connect Wallet</button>
  </section>
</template>
<script setup>
const { open } = defineProps({
  open: Boolean,
});
const address = '0x1234567890123456789012345678901234567890';
const shortenText = (text, startLength, endLength) => {
  if (text.length > startLength + endLength) {
    const start = text.slice(0, startLength);
    const end = text.slice(-endLength);
    return `${start}...${end}`
  }
  return text;
}
</script>
<style>
:root {
  --color-my-wallet-profile-bg: var(--color-side-menu-active-bg);
}
</style>
<style scoped>
.my-wallet {
  background: var(--color-body-bg2);
  border: 1px solid var(--color-border);
  padding: 6px 16px 6px 6px;
  gap: 6px;
  border-radius: 9999px;

  .profile-icon {
    display: flex;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--color-my-wallet-profile-bg);
  }

  .wallet-address {
    display: inline-block;
    width: 89px;
    white-space: nowrap;
    overflow: hidden;
    color: rgba(255, 255, 255, 1);
    font-size: 13px;
  }
}
</style>