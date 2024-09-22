<script setup lang="ts">
import type { Type } from '../model/typesCardArtist';

interface Props {
  data: {
    name: string;
    avatar: {
      name: string;
    };
    totalSales: number;
    position: number
  },
  type?: Type
  position?: number
}

withDefaults(defineProps<Props>(), {
  type: 'default'
})
</script>

<template>
  <div :class="['card-artist', type]">
    <div class="card-artist__inner">
      <div class="card-artist__avatar">
        <NuxtImg :src="`/avatars/${data.avatar.name}.png`" class="card-artist__avatar-img" />
      </div>
      <div class="card-artist__content">
        <p class="card-artist__name">{{ data.name }}</p>
        <div class="card-artist__row">
          <p class="card-artist__description">Total Sales:</p>
          <p class="card-artist__sales">{{ data.totalSales }} ETH</p>
        </div>
      </div>

      <div class="card-artist__position">
        <span class="card-artist__position-count">{{ position }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-artist {
  cursor: pointer;

  &__inner {
    position: relative;
    border-radius: 20px;
    padding: 20px;
    background: $color-black-100;
    transition: box-shadow .3s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 2px $call-to-action;
    }
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
    .card-artist__avatar {
      width: 120px;
      height: 120px;
      margin: 0 auto 20px auto;
      aspect-ratio: 1 / 1;
    }

    .card-artist__content {
      align-items: center;
    }

    .card-artist__row {
      justify-content: center;
    }

    .card-artist__position {
      left: 20px;
      top: 20px;
    }

    .card-artist__name {
      margin-bottom: 5px;
    }
  }

  &.horizontal-big {
    .card-artist__avatar {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    .card-artist__inner {
      display: flex;
      align-items: center;
    }

    .card-artist__position {
      left: 13px;
      top: 13px;
    }

    .card-artist__description {
      line-height: 110%;
    }

    .card-artist__name {
      margin-bottom: 5px;
    }
  }

  &.horizontal-medium {
    .card-artist__avatar {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    .card-artist__position {
      display: none;
    }

    .card-artist__inner {
      display: flex;
      align-items: center;
    }

    .card-artist__row {
      display: none;
    }

    .card-artist__name {
      margin: 0;
    }
  }

  &.horizontal-small {
    .card-artist__avatar {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    .card-artist__position {
      display: none;
    }

    .card-artist__inner {
      display: flex;
      align-items: center;
    }

    .card-artist__row {
      display: none;
    }

    .card-artist__name {
      @include w-base;
      margin: 0;
      line-height: 110%;
    }
  }

  &.horizontal-mini {
    display: inline-block;

    .card-artist__avatar {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    .card-artist__position {
      display: none;
    }

    .card-artist__inner {
      display: flex;
      align-items: center;
      padding: 10px 20px;
    }

    .card-artist__row {
      display: none;
    }

    .card-artist__name {
      @include w-base;
      margin: 0;
      line-height: 110%;
    }
  }
}
</style>