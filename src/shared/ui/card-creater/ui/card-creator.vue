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
  <div class="card-creator">
    <div class="card-creator__inner">
      <p class="card-creator__title"> {{ data.title }} </p>
      <div class="card-creator__bottom">
        <div class="card-creator__avatar">
          <NuxtImg :src="`/avatars/${data.avatar}.png`" />
        </div>
        <p class="card-creator__name">{{ data.name }}</p>
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