<script setup lang="ts">
import ArtistPreview from "~/features/artist-preview/ui/artist-preview.vue";
import ContentList from "~/pages/creator/ui/components/content-list.vue";

import { useCreator } from "~/pages/creator/model/useCreator";

const { creator } = useCreator();
</script>

<template>
  <div class="creator-page">
    <div class="creator-page__head-image">
      <div class="creator-page__image">
        <img src="/images/artist-image.png" alt="bg" class="creator-page__img">
      </div>
    </div>
    <div class="creator-page__info">
      <ArtistPreview :creator="creator" />
      <div class="creator-page__divider" />
      <div class="container">
        <Tabs />
      </div>
    </div>
    <ContentList />
    <div class="creator-page__divider creator-page__divider_black" />
  </div>
</template>

<style lang="scss">
.creator-page {

  &__head-image {
    padding-bottom: 50px;
    background: $color-black-100;

    @include tablet {
      background: $color-black-200;
    }
  }

  &__image {
    height: 320px;

    @include tablet {
      height: 280px;
    }

    @include mobile {
      height: 250px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    background: $color-black-200;
  }

  &__divider {
    height: 1px;
    background: $color-black-100;
    margin-bottom: 10px;

    &_black {
      margin: 0;
      background: $color-black-200;
      height: 2px;
    }
  }
}
</style>
