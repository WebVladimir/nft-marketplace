<script setup lang="ts">
//Требуется рефатор

import { useSectionNftInfo } from "../../model/useSectionNftInfo";

const model = useSectionNftInfo()

const creatorSales = model.NftWithShares[0]
const saleNft = model.NftWithShares[0].actions[0]

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img(`/nfts/${saleNft.nft.image.name}.png`)
  return { backgroundImage: `url('${imgUrl}')` }
})

function actionEndedTimer() {
  console.log('Акция закончилась')
}
</script>

<template>
  <section class="section-nft-info" :style="[backgroundStyles]">
    <div class="container section-nft-info__container">
      <div class="section-nft-info__inner">
        <div class="section-nft-info__row">
          <div class="section-nft-info__column">
            <CardArtist class="section-nft-info__creator" type="horizontal-mini" :data="creatorSales.creatorInfo" />
            <p class="section-nft-info__name">Magic Mashrooms</p>
            <Button size="secondary" color="white" class="section-nft-info__button">
              <template v-slot:icon>
                <IcoEye/>
              </template>
              See NFT
            </Button>
          </div>
          <div class="section-nft-info__column">
            <Timer class="section-nft-info__timer" :minutes="saleNft.minutes" @ended="actionEndedTimer"/>
            <Button size="secondary" color="white" class="section-nft-info__button section-nft-info__button_desktop-hide">
              <template v-slot:icon>
                <IcoEye/>
              </template>
              See NFT
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-nft-info {
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%);
    z-index: 0;
  }

  &__inner {
    position: relative;
    padding: 360px 0 60px 0;
    z-index: 2;

    @include mobile {
      padding: 120px 0 40px 0;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__column {
    @include mobile {
      width: 100%;
    }
  }

  &__timer {
    @include mobile {
      margin-bottom: 30px;
    }
  }

  &__creator {
    margin-bottom: 30px;
  }

  &__name {
    @include w-h2;
    color: $color-white-100;
    margin-bottom: 30px;

    @include tablet {
      @include w-h3;
    }
  }

  &__button {
    @include mobile {
      display: none;
    }

    &_desktop-hide {
      display: none;

      @include mobile {
        display: block;
      }
    }
  }
}
</style>