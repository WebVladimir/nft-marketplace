<script setup lang="ts">
import type { HeadSection } from '../model/typesHeadSection'

defineProps<HeadSection>()
</script>

<template>
  <div class="head-section">
    <div class="head-section__inner">
      <div class="head-section__column">
        <p class="head-section__title">{{ title }}</p>
        <p class="head-section__description" v-if="description">{{ description }}</p>
      </div>
      <div class="head-section__column head-section__column_mobile-hide" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.head-section {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__column {
    &:not(:last-child) {
      margin-right: 20px;
    }

    &:last-child {
      align-self: flex-end;
    }

    &_mobile-hide {
      @include mobile {
        display: none;
      }
    }
  }

  &__title {
    @include w-h3;
    color: $color-white-100;

    @include tablet {
      @include w-h4;
    }
  }

  &__description {
    @include w-h5;
    color: $color-white-100;
    padding-top: 10px;

    @include tablet {
      @include w-base;
    }
  }
}
</style>