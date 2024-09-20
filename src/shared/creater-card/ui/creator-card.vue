<script setup lang="ts">
interface Data {
  title: string
  avatar: string
  name: string
}

interface Props {
  data: Data
}

defineProps<Props>()
</script>

<template>
  <div class="creator-card">
    <div class="creator-card__inner">
      <p class="creator-card__title"> {{ data.title }} </p>
      <div class="creator-card__bottom">
        <div class="creator-card__avatar">
          <NuxtImg :src="`/avatars/${data.avatar}.png`" />
        </div>
        <p class="creator-card__name">{{ data.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.creator-card {
  &__bottom {
    display: flex;
  }

  &__title {
    @include s-h5;
    color: $color-white-100;
    margin-bottom: 10px;
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