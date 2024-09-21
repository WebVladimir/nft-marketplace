<script setup lang="ts">
interface Data {
  name: string;
  icon: string;
  image: string;
  to: string
}

interface Props {
  data: Data;
}

defineProps<Props>()
</script>

<template>
  <div class="card-category">
    <div class="card-category__inner">
      <div class="card-category__image">
        <img class="card-category__img" :src="`/images/categories/${data.image}.png`" alt="">
        <img class="card-category__ico" :src="`/icons/categories/${data.icon}.svg`" alt="">
      </div>

      <div class="card-category__bottom">
        <p class="card-category__name">{{ data.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-category {
  height: 100%;
  cursor: pointer;

  &__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  }

  &__image {
    position: relative;
    aspect-ratio: 1 / 1;

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      top: 0;
      background: rgba(255, 255, 255, 0.10);
      backdrop-filter: blur(7.5px);
    }

    @include mobile {
      aspect-ratio: auto;
      max-height: 150px;
    }
  }

  &__img {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7.5px);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__ico {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    z-index: 2;
  }

  &__bottom {
    padding: 20px 30px 25px 30px;
    background: $color-black-100;
    flex-grow: 1;

    @include tablet {
      padding: 20px 20px 25px 20px;
    }
  }

  &__name {
    @include w-h5;
    color: $color-white-100;

    @include tablet {
      font-size: 16px;
    }
  }
}
</style>