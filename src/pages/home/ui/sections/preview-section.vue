<script setup lang="ts">
import { usePreviewSection } from "~/pages/home/model/usePreviewSection";
const model = usePreviewSection();
</script>

<template>
  <section class="preview-section">
    <div class="container preview-section__container">
      <div class="preview-section__inner">
        <div class="preview-section__column">
          <h1 class="preview-section__title">Discover digital art & Collect NFTs</h1>
          <p class="preview-section__description">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <div class="preview-section__card preview-section__card_desktop-hide">
            <div class="preview-section__card-image">
              <img src="/images/preview.png" alt="preview" class="preview-section__card-img">
            </div>

            <div class="preview-section__card-bottom">
              <CreatorCard :data="model.creatorCard" />
            </div>
          </div>
          <Button class="preview-section__button">
            <template v-slot:icon>
              <IcoRocket/>
            </template>
            Get Started
          </Button>
          <div class="preview-section__items">
            <div class="preview-section__item">
              <p class="preview-section__item-count">240k+</p>
              <p class="preview-section__item-name">Total Sale</p>
            </div>
            <div class="preview-section__item">
              <p class="preview-section__item-count">100k+</p>
              <p class="preview-section__item-name">Auctions</p>
            </div>
            <div class="preview-section__item">
              <p class="preview-section__item-count">240k+</p>
              <p class="preview-section__item-name">Artists</p>
            </div>
          </div>
        </div>

        <div class="preview-section__column preview-section__column_mobile-hide">
          <div class="preview-section__card">
            <div class="preview-section__card-image">
              <img src="/images/preview.png" alt="preview" class="preview-section__card-img">
            </div>

            <div class="preview-section__card-bottom">
              <CreatorCard :data="model.creatorCard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.preview-section {
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
      font-size: 16px;
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