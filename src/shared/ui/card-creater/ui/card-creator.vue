<script setup lang="ts">
interface Creator {
  name: string,
  avatar: {
    name: string,
    alt: string
  },
}

interface Props {
  creator?: Creator,
  nftName?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card-creator">
    <div class="card-creator__inner">
      <p class="card-creator__title">{{ nftName }}</p>
      <div class="card-creator__bottom">
        <div class="card-creator__avatar">

          <NuxtImg :src="`/avatars/${creator?.avatar.name}.png`" />
        </div>
        <p class="card-creator__name">{{ creator?.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-creator {
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