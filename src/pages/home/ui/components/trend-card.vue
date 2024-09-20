<script setup lang="ts">
interface Creator {
  title: string;
  name: string;
  avatar: string;
}

interface Nft {
  name: string;
}

interface Props {
  data: {
    creator: Creator;
    nfts: Nft[];
  }
}

const props = defineProps<Props>()

const images = computed(() => {
  if (props.data.nfts.length > 3) {
    return props.data.nfts.slice(0, 3);
  } else {
    return props.data.nfts
  }
})

const isShowAllNfts = computed(() => props.data.nfts.length > 3)
</script>

<template>
  <div class="trend-card">
    <div class="trend-card__inner">
      <div class="trend-card__items">
        <div class="trend-card__item" v-for="(image, index) in images" :key="index">
          <NuxtImg :src="`/trendings/${image.name}.png`" class="trend-card__item-img"/>
        </div>
        <NuxtLink to="/" class="trend-card__item" v-if="isShowAllNfts">
          <div class="trend-card__item-count">{{ data.nfts.length }}+</div>
        </NuxtLink>
      </div>
      <CreatorCard :data="data.creator"/>
    </div>
  </div>
</template>

<style lang="scss">
.trend-card {
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