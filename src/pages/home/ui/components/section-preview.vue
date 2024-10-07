<script setup lang="ts">
import { useSectionPreview } from "../../model/useSectionPreview";
import type { Nft } from "~/shared/model/typesCreator";
const model = useSectionPreview();

const creatorNft = computed<Nft | undefined>(() => {
  return model.creator?.nfts?.[0];
})
</script>

<template>
  <section class="section-preview">
    <div class="container section-preview__container">
      <div class="section-preview__inner">
        <div class="section-preview__column">
          <h1 class="section-preview__title">Discover digital art & Collect NFTs</h1>
          <p class="section-preview__description">NFT marketplace UI created with Anima for Figma. Collect, buy and sell
            art from more than 20k NFT artists.</p>
          <div class="section-preview__card section-preview__card_desktop-hide">
            <div class="section-preview__card-image">
              <NuxtImg :src="`/nfts/${creatorNft.image.name}.png`" class="section-preview__card-img" />
            </div>
            <div class="section-preview__card-bottom">
              <CreatorMin :nft-name="creatorNft?.name" :creator="model.creator" />
            </div>
          </div>
          <NuxtLink to="/sign-in" v-if="!model.authStore.isAuthenticated">
            <Button class="section-preview__button">
              <template v-slot:icon>
                <IcoRocket />
              </template>
              Get Started
            </Button>
          </NuxtLink>

          <div class="section-preview__items">
            <div class="section-preview__item">
              <p class="section-preview__item-count">240k+</p>
              <p class="section-preview__item-name">Total Sale</p>
            </div>
            <div class="section-preview__item">
              <p class="section-preview__item-count">100k+</p>
              <p class="section-preview__item-name">Auctions</p>
            </div>
            <div class="section-preview__item">
              <p class="section-preview__item-count">240k+</p>
              <p class="section-preview__item-name">Artists</p>
            </div>
          </div>
        </div>

        <div class="section-preview__column section-preview__column_mobile-hide">
          <div class="section-preview__card">
            <div class="section-preview__card-image">
              <NuxtImg :src="`/nfts/${creatorNft?.image.name}.png`" class="section-preview__card-img" />
            </div>
            <div class="section-preview__card-bottom">
              <CreatorMin :nft-name="creatorNft?.name" :creator="model.creator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-preview {
  &__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 80px 0;

    @include mobile {
      padding: 40px 0;
    }
  }

  &__column {
    flex-basis: 48.76%;

    @include tablet {
      flex-basis: 47.83%;
    }

    @include mobile {
      flex-basis: 100%;
    }

    &_mobile-hide {
      @include mobile {
        display: none;
      }
    }
  }

  &__title {
    @include w-h1;
    color: $color-white-100;
    text-transform: capitalize;
    margin-bottom: 20px;

    @include tablet {
      @include w-h3;
    }

    @include mobile {
      @include w-h4;
      margin-bottom: 10px;
    }
  }

  &__description {
    color: $color-white-100;
    font-size: 22px;
    line-height: 160%;
    text-transform: capitalize;
    margin-bottom: 30px;

    @include tablet {
      @include w-base;
      margin-bottom: 20px;
    }

    @include mobile {
      margin-bottom: 40px;
    }
  }

  &__card {
    overflow: hidden;
    border-radius: 20px;

    @include mobile {
      margin-bottom: 40px;
    }

    &_desktop-hide {
      display: none;

      @include mobile {
        display: block;
      }
    }
  }

  &__card-image {
    height: 400px;
    object-fit: cover;

    @include tablet {
      height: 220px;
    }

    @include mobile {
      height: 206px;
    }
  }

  &__card-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &__card-bottom {
    padding: 20px;
    background: $color-black-100;
  }

  &__button {
    margin-bottom: 30px;

    @include tablet {
      margin-bottom: 20px;
    }

    @include mobile {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  &__items {
    display: flex;
    width: 100%;

    @include mobile {
      justify-content: space-between;
    }
  }

  &__item {
    color: $color-white-100;
    width: 100%;
    max-width: 150px;

    @include tablet {
      max-width: 90px;
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__item-count {
    @include s-h4;

    @include tablet {
      @include s-h5;
    }
  }

  &__item-name {
    font-size: 24px;
    line-height: 160%;
    white-space: nowrap;

    @include tablet {
      font-size: 16px;
    }
  }
}
</style>