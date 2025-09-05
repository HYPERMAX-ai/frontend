<template>
  <wmx-card-layout class="p-[24px]">
    <div class="fag-card flex flex-col">
      <wmx-title :showRefresh="false" class="px-[8px] py-[4px]">FAQ</wmx-title>

      <div class="mt-[32px] grid gap-[8px]">
        <accordion-view v-for="fag in fagList" :key="fag.title"
                        :title="fag.title"
                        :content="fag.content"
                        :open="fag.open || false"
        />
      </div>
    </div>
  </wmx-card-layout>
</template>
<script setup>
import WmxCardLayout from "@/components/wmx-card/WmxCardLayout.vue";
import WmxTitle from "@/components/wmx-label/WmxTitle.vue";
import AccordionView from "@/components/AccordionView.vue";
const fagList = [
  // General
  {
    title: "What is the Funding Rate ETF?",
    content: "The Funding Rate ETF is a SmartETF on HYPERMAX designed to capture funding rate yield from perpetual futures markets. It uses a delta-neutral strategy (long spot, short perp) to earn funding payments without directional market risk.",
    open: true
  },
  {
    title: "How does it differ from traditional ETFs?",
    content: "Unlike traditional ETFs that track equities or indexes, the Funding Rate ETF tokenizes a strategy. It automates execution on Hyperliquid, distributing onchain tokens that represent claims on the strategy's performance."
  },
  {
    title: "Why is it called an \"ETF\"?",
    content: "Because it functions like an exchange-traded fund: a single, tradable token that represents exposure to an investment strategy. It can be bought, sold, or used as collateral across DeFi, while underlying assets are actively managed by the SmartFund."
  },
  
  // Mechanics
  {
    title: "How does the strategy earn yield?",
    content: "Perpetual contracts charge or pay funding rates to align perp prices with spot prices. The ETF takes the opposite side of perp traders (who are usually long) by holding spot assets and shorting perps, collecting funding payments."
  },
  {
    title: "What's the risk profile?",
    content: "Market-neutral: The ETF is hedged against price moves by balancing spot and perp exposure. Residual risks include exchange downtime, liquidity crunches, extreme funding rate reversals, or smart contract vulnerabilities."
  },
  {
    title: "What assets does the Funding Rate ETF use?",
    content: "Initially, it uses HYPE pairs on Hyperliquid, with plans to expand into other assets with liquid perp/spot markets."
  },
  {
    title: "How often is the ETF rebalanced?",
    content: "Rebalancing is automated to maintain delta neutrality. Adjustments happen whenever position drift exceeds a set threshold (e.g., after price moves or funding changes)."
  },
  
  // Returns & Performance
  {
    title: "What kind of returns can investors expect?",
    content: "Returns depend on prevailing funding rates. During strong bullish periods, funding tends to be positive (ETF collects yield). During bearish periods, funding may flip negative, reducing or reversing returns."
  },
  {
    title: "How are returns distributed?",
    content: "The ETF token is rebasing or accrual-based (depending on design). Holders automatically benefit as the strategy generates yield; no manual claiming is required."
  },
  {
    title: "Is the yield stable?",
    content: "Funding rates are variable and can fluctuate widely depending on market sentiment, leverage usage, and volatility. Historically, they are strongly positive during bull markets and more mixed during sideways/bear conditions."
  },
  
  // Trading & Access
  {
    title: "Where is the Funding Rate ETF traded?",
    content: "It is listed directly on Hyperliquid's spot market. This means any Hyperliquid user can buy and sell it like a normal token with deep liquidity."
  },
  {
    title: "Can I use the token in DeFi?",
    content: "Yes. After bridging to HyperEVM, the token can be used as collateral in lending markets, paired in liquidity pools, or combined with other protocols."
  },
  {
    title: "Do I need KYC to buy it?",
    content: "No, the token is fully onchain and accessible like any other Hyperliquid spot asset. However, jurisdictional restrictions may apply depending on local regulations."
  },
  
  // Risks
  {
    title: "What are the main risks?",
    content: "1. Market risk: Unexpected funding flips (negative rates). 2. Exchange risk: Hyperliquid downtime, liquidation engine failures. 3. Smart contract risk: Vulnerabilities in vault logic or bridging. 4. Liquidity risk: Slippage when entering/exiting in size. 5. Systemic risk: Extreme market crashes where hedges may not execute."
  },
  {
    title: "Could the ETF lose money?",
    content: "Yes. If funding rates are persistently negative or if technical risks materialize, the ETF could underperform or lose value. While it's designed to be market-neutral, it's not risk-free."
  },
  
  // Strategic Value
  {
    title: "Who should invest in the Funding Rate ETF?",
    content: "Yield-seekers who want exposure to perpetual funding income. Investors seeking non-directional strategies uncorrelated with BTC/ETH prices. Institutions and DeFi users who want a stable yield component in a portfolio."
  },
  {
    title: "How does this compare to simply trading perps myself?",
    content: "The ETF automates execution, rebalancing, and collateral management. It also tokenizes the strategy, making it liquid, composable, and accessible without active management."
  },
  
  // HYPERMAX Integration
  {
    title: "How does the Funding Rate ETF fit into HYPERMAX?",
    content: "It's one of the flagship SmartETFs, demonstrating how HYPERMAX packages complex strategies into simple tokens. It also acts as a yield source for the broader ecosystem (e.g., collateral in lending markets, base layer for HyperBonds)."
  },
  {
    title: "Will there be more ETFs like this?",
    content: "Yes. HYPERMAX plans to expand the SmartETF lineup into volatility capture, dominance hedging, and other strategies, similar to how traditional finance offers sector ETFs and bond ETFs."
  }
]
</script>

<style scoped>

</style>