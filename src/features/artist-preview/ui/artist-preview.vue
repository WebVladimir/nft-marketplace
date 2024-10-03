<script setup lang="ts">

const creatorName = ref('Animakid')
const mockItems = ref([
  {
    value: 250,
    label: 'Volume'
  },
  {
    value: 50,
    label: 'NFTs Sold'
  },
  {
    value: 3000,
    label: 'Followers'
  },
])

const socials = ref([
  {
    link: '#',
    ico: 'website'
  },
  {
    link: '#',
    ico: 'discord'
  },
  {
    link: '#',
    ico: 'youtube'
  },
  {
    link: '#',
    ico: 'twitter'
  },
  {
    link: '#',
    ico: 'instagram'
  },
])

</script>

<template>
  <div class="artist-preview">
    <div class="artist-preview__container container">
      <div class="artist-preview__inner">
        <p class="artist-preview__name">{{ creatorName }}</p>
        <div class="artist-preview__buttons">
          <Button size="secondary" :padding="30" class="artist-preview__button">
            <template #icon>
              <IcoCopy/>
            </template>
            0xc0E3...B79C
          </Button>
          <Button size="secondary" type="border" :padding="30" class="artist-preview__button">
            <template #icon>
              <IcoPlus/>
            </template>
            Follow
          </Button>
        </div>
        <div class="artist-preview__items">
          <div class="artist-preview__item" v-for="(item, index) in mockItems" :key="index">
            <p class="artist-preview__item-value">{{ item.value }}+</p>
            <p class="artist-preview__item-caption">{{ item.label }}</p>
          </div>
        </div>

        <div class="artist-preview__boxes">
          <div class="artist-preview__box">
            <p class="artist-preview__box-label">Bio</p>
            <p class="artist-preview__text">The internet's friendliest designer kid.</p>
          </div>
          <div class="artist-preview__box">
            <p class="artist-preview__box-label">Links</p>
            <div class="artist-preview__socials">
              <a href="#" class="artist-preview__social" v-for="social in socials" :key="social.ico">
                <NuxtImg :src="`socials/${social.ico}.svg`" width="20" height="20" class="artist-preview__social-img"/>
              </a>
            </div>
          </div>
        </div>



        <div class="artist-preview__avatar">
          <NuxtImg src="/avatars/avatar-test.png" class="artist-preview__avatar-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.artist-preview {
  background: $color-black-200;

  &__inner {
    position: relative;
    padding: 40px 0;

    @include tablet {
      padding: 30px 0;
    }
  }

  &__avatar {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 20px;
    border: 2px solid $color-black-200;
    width: 120px;
    height: 120px;

    @include mobile {
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }

  &__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    @include w-h2;
    color: $color-white-100;
    margin-bottom: 30px;

    @include tablet {
      @include w-h3;
    }

    @include mobile {
      @include w-h4;
    }
  }

  &__buttons {
    position: absolute;
    right: 0;
    top: 40px;

    @include tablet {
      position: static;
      top: auto;
      margin-bottom: 30px;
    }

    @include mobile {
      display: flex;
      flex-direction: column;
    }
  }

  &__button {
    &:not(:last-child) {
      margin-right: 20px;

      @include mobile {
        margin: 0 0 20px 0;
      }
    }
  }

  &__items {
    display: flex;
    margin-bottom: 30px;
  }

  &__item {
    width: 156px;

    @include mobile {
      width: 100%;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  &__item-value {
    @include s-h4;
    color: $color-white-100;

    @include tablet {
      @include s-h5;
    }
  }

  &__item-caption {
    @include w-base;
    color: $color-white-100;
    font-size: 22px;

    @include tablet {
      font-size: 16px;
    }
  }

  &__box {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__box-label {
    @include s-h5;
    color: $color-white-200;
    margin-bottom: 10px;

    @include tablet {
      @include s-base;
      font-size: 16px;
    }
  }

  &__text {
    @include w-base;
    color: $color-white-100;
    font-size: 22px;

    @include tablet {
      font-size: 16px;
    }
  }

  &__socials {
    display: flex;
  }

  &__social {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__social-ico {
    width: 32px;
    height: 32px;

    @include tablet {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
