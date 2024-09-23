<script setup lang="ts">
import type { Creator } from "~/shared/model/typesCreator";

interface Props {
  creator: Creator,
  nftName: string
}

defineProps<Props>()
</script>

<template>
  <div class="creator-min">
    <div class="creator-min__inner">
      <p class="creator-min__title">{{ nftName }}</p>
      <div class="creator-min__bottom">
        <div class="creator-min__avatar">

          <NuxtImg :src="`/avatars/${creator.avatar?.name}.png`" />
        </div>
        <p class="creator-min__name">{{ creator.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.creator-min {
  &__bottom {
    display: flex;
  }

  &__title {
    @include s-h5;
    color: $color-white-100;
    margin-bottom: 2px;
  }

  &__name {
    @include w-base;
    color: $color-white-100;
  }

  &__avatar {
    width: 24px;
    height: 24px;
    overflow: hidden;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 12px;
  }

  &__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>