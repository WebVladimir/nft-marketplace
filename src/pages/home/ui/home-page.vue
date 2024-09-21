<script setup lang="ts">
import SectionPreview from "~/pages/home/ui/components/section-preview.vue";
import SectionTrending from "~/pages/home/ui/components/section-trending.vue";
import SectionCreators from "~/pages/home/ui/components/section-creators.vue";
import SectionCategories from "~/pages/home/ui/components/section-categories.vue";
import SectionNfts from "~/pages/home/ui/components/section-nfts.vue";
</script>

<template>
  <div>
    <SectionPreview />
    <SectionTrending />
    <SectionCreators />
    <SectionCategories />
<!--    <SectionNfts />-->
  </div>
</template>