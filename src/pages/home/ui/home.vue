<script setup lang="ts">
import SectionPreview from "~/pages/home/ui/components/section-preview.vue";
import SectionTrending from "~/pages/home/ui/components/section-trending.vue";
import SectionCreators from "~/pages/home/ui/components/section-creators.vue";
import SectionCategories from "~/pages/home/ui/components/section-categories.vue";
import SectionNfts from "~/pages/home/ui/components/section-nfts.vue";
import SectionNftInfo from "~/pages/home/ui/components/section-nft-info.vue";
import SectionHowWorks from "~/pages/home/ui/components/section-how-works.vue";
import SectionSubscribe from "~/pages/home/ui/components/section-subscribe.vue";
</script>

<template>
  <div>
    <SectionPreview />
    <SectionTrending />
    <SectionCreators />
    <SectionCategories />
    <SectionNfts />
    <SectionNftInfo />
    <SectionHowWorks />
    <SectionSubscribe />
  </div>
</template>