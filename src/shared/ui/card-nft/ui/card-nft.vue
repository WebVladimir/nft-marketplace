<script setup lang="ts">
interface Nft {
  name: string,
  image: {
    name: string,
    alt: string,
  }
  creator: {
    avatar: string,
    name: string,
  }
  price: number,
  highest: number,
}

interface Props {
  nft: Nft
}

const props = defineProps<Props>()

const cardCreatorContent = ref({
  avatar: props.nft.creator.avatar,
  title: props.nft.name,
  name: props.nft.creator.name,
})
</script>

<template>
  <div class="card-nft">
    <div class="card-nft__inner">
      <div class="card-nft__image">
        <NuxtImg class="card-nft__img" :src="`/nfts/${nft.image.name}.png`" :alt="nft.image.alt" />
      </div>
      <div class="card-nft__bottom">
        <CardCreator class="card-nft__creator" :data="cardCreatorContent"/>
        <div class="card-nft__row">
          <div class="card-nft__column">
            <p class="card-nft__caption">Price</p>
            <p class="card-nft__value">{{ nft.price }} ETH</p>
          </div>
          <div class="card-nft__column">
            <p class="card-nft__caption">Highest Bid</p>
            <p class="card-nft__value">{{ nft.highest }} wETH</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-nft {
  &__inner {
    overflow: hidden;
    border-radius: 20px;
  }

  &__image {
    height: 296px;

    @include mobile {
      height: 238px;
    }
  }

  &__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__bottom {
    padding: 20px 30px 25px 30px;
    background: $color-black-100;

    @include mobile {
      padding: 20px 20px 25px 20px;
    }
  }

  &__creator {
    margin-bottom: 25px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__caption {
    @include s-caption;
    color: $color-white-200;
    margin-bottom: 8px;
  }

  &__value {
    @include s-base;
    color: $color-white-100;

    @include mobile {
      @include s-caption;
    }
  }
}
</style>