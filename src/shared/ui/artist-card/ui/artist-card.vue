<script setup lang="ts">
import type { Type } from '../model/typesArtistCard';

interface Props {
  data: {
    name: string;
    avatar: string;
    totalSales: number;
    position: number
  },
  type?: Type
}

withDefaults(defineProps<Props>(), {
  type: 'default'
})
</script>

<template>
  <div :class="['artist-card', type]">
    <div class="artist-card__inner">
      <div class="artist-card__avatar">
        <NuxtImg :src="`/avatars/${data.avatar}.png`" class="artist-card__avatar-img" />
      </div>
      <div class="artist-card__content">
        <p class="artist-card__name">{{ data.name }}</p>
        <div class="artist-card__row">
          <p class="artist-card__description">Total Sales:</p>
          <p class="artist-card__sales">{{ data.totalSales }} ETH</p>
        </div>
      </div>

      <div class="artist-card__position">
        <span class="artist-card__position-count">{{ data.position }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.artist-card {
  cursor: pointer;

  &__inner {
    position: relative;
    border-radius: 20px;
    padding: 20px;
    background: $color-black-100;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__name {
    @include w-h5;
    color: $color-white-100;
  }

  &__row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__description {
    @include w-base;
    color: $color-white-200;
    margin-right: 10px;
    white-space: nowrap;
  }

  &__sales {
    @include s-base;
    color: $color-white-100;
    text-align: center;
  }

  &__position {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: $color-black-200;
  }

  &__position-count {
    @include s-base;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: $color-white-200;
  }

  &.default {
    .artist-card__avatar {
      width: 120px;
      height: 120px;
      margin: 0 auto 20px auto;
      aspect-ratio: 1 / 1;
    }

    .artist-card__content {
      align-items: center;
    }

    .artist-card__row {
      justify-content: center;
    }

    .artist-card__position {
      left: 20px;
      top: 20px;
    }

    .artist-card__name {
      margin-bottom: 5px;
    }
  }

  &.horizontal-big {
    .artist-card__avatar {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    .artist-card__inner {
      display: flex;
      align-items: center;
    }

    .artist-card__position {
      left: 13px;
      top: 13px;
    }

    .artist-card__description {
      line-height: 110%;
    }

    .artist-card__name {
      margin-bottom: 5px;
    }
  }

  &.horizontal-medium {
    .artist-card__avatar {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    .artist-card__position {
      display: none;
    }

    .artist-card__inner {
      display: flex;
      align-items: center;
    }

    .artist-card__row {
      display: none;
    }

    .artist-card__name {
      margin: 0;
    }
  }

  &.horizontal-small {
    .artist-card__avatar {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    .artist-card__position {
      display: none;
    }

    .artist-card__inner {
      display: flex;
      align-items: center;
    }

    .artist-card__row {
      display: none;
    }

    .artist-card__name {
      @include w-base;
      margin: 0;
      line-height: 110%;
    }
  }
}
</style>