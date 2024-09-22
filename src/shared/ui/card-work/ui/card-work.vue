<script setup lang="ts">
interface Data {
  title: string
  description: string
  image: {
    src: string,
    alt: string,
  }
}

defineProps<{data: Data}>()
</script>

<template>
  <div class="card-work">
    <div class="card-work__inner">
      <NuxtImg :src="`how-works/${data.image.src}.svg`" class="card-work__image" />
      <div class="card-work__content">
        <p class="card-work__title">{{ data.title }}</p>
        <p class="card-work__description">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-work {
  height: 100%;

  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 30px 30px 30px;
    border-radius: 20px;
    background: $color-black-100;

    @include tablet {
      padding: 10px 20px 30px 20px;
    }

    @include mobile {
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;
    }
  }

  &__image {
    aspect-ratio: 1 / 1;
    margin-bottom: 20px;

    @include tablet {
      max-height: 120px;
    }

    @include mobile {
      max-width: 100px;
      margin-bottom: 0;
      margin-right: 20px;
    }
  }

  &__title {
    @include w-h5;
    color: $color-white-100;
    margin-bottom: 10px;
    text-align: center;

    @include tablet {
      @include w-base;
    }

    @include mobile {
      text-align: left;
    }
  }

  &__description {
    @include w-base;
    color: $color-white-200;
    text-align: center;

    @include tablet {
      @include w-caption;
    }

    @include mobile {
      text-align: left;
    }
  }
}
</style>