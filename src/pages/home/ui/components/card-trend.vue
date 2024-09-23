<script setup lang="ts">
import type { Creator } from "~/shared/model/typesCreator";

const props = defineProps<{ creator: Creator }>()

const nfts = computed(() => {
  const collectionNfts = props.creator.collections[0]?.nfts || [];
  return collectionNfts.length > 3 ? collectionNfts.slice(0, 3) : collectionNfts;
});

const isShowAllNfts = computed(() => {
  const collectionNfts = props.creator.collections[0]?.nfts || [];
  return collectionNfts.length > 3;
});
</script>

<template>
  <div class="card-trend">
    <div class="card-trend__inner">
      <div class="card-trend__items">
        <div class="card-trend__item" v-for="(nft, index) in nfts" :key="index">
          <NuxtImg :src="`/nfts/${nft.image.name}.png`" class="card-trend__item-img"/>
        </div>
        <NuxtLink to="/" class="card-trend__item" v-if="isShowAllNfts">
          <div class="card-trend__item-count">+{{ props.creator.collections[0].nfts.length - 2 }}</div>
        </NuxtLink>
      </div>
      <CreatorMin :nft-name="creator.collections[0].name" :creator="creator"/>
    </div>
  </div>
</template>

<style lang="scss">
.card-trend {
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-bottom: 15px;
  }

  &__item {
    overflow: hidden;
    border-radius: 15%;
    aspect-ratio: 1 / 1;

    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 4;
      border-radius: 5%;
    }

    &:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }

    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }

    &:nth-child(4) {
      position: relative;
      grid-area: 2 / 3 / 3 / 4;
      background: $call-to-action;
      text-decoration: none;
    }
  }

  &__item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__item-count {
    @include s-h5;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: $color-white-100;
  }
}
</style>