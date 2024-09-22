<script setup lang="ts">
import FormSubscribe from "~/features/form-subscribe/ui/form-subscribe.vue";
import { useFooter } from "~/widgets/footer/model/useFooter";

const model = useFooter()
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__inner">
        <div class="footer__row">
          <div class="footer__column">
            <img src="/images/logo.svg" alt="logo" class="footer__logo">
            <p class="footer__text">NFT marketplace UI created with Anima for Figma.</p>
            <p class="footer__text">Join our community</p>
            <div class="footer__socials">
              <a href="#" class="footer__social" v-for="(social, index) in model.socialLinks" :key="index">
                <NuxtImg class="footer__social-ico" :src="`/socials/${social.ico.name}.svg`" />
              </a>
            </div>
          </div>
          <div class="footer__column">
            <p class="footer__title">Explore</p>
            <div class="footer__links">
              <NuxtLink class="footer__link" :to="link.to" v-for="(link, index) in model.links" :key="index">{{ link.name }}</NuxtLink>
            </div>
          </div>
          <div class="footer__column">
            <p class="footer__title">Join our weekly digest</p>
            <p class="footer__text footer__text_width">Get exclusive promotions & updates straight to your inbox.</p>
            <FormSubscribe :showButtonIco="false"/>
          </div>
        </div>
        <div class="footer__divider" />
        <div class="footer__bottom">
          <p class="footer__copyright">Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  &__inner {
    padding: 40px 0;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 30px 30px;

    @include tablet {
      flex-direction: column;
      padding: 0;
      margin-bottom: 49px;
    }
  }

  &__column {
    &:nth-child(1) {
      flex: 0 1 240px;
      margin-right: 20px;

      @include tablet {
        flex-basis: auto;
      }
    }

    &:nth-child(2) {
      flex: 0 2 240px;
      padding-right: 20px;

      @include tablet {
        flex-basis: auto;
      }
    }

    &:nth-child(3) {
      flex: 0 2 420px;

      @include tablet {
        flex-basis: auto;
      }
    }

    @include tablet {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }

  &__logo {
    width: 243px;
    height: 32px;
    margin-bottom: 30px;

    @include tablet {
      margin-bottom: 20px;
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
  }

  &__links {
    display: flex;
    flex-direction: column;
  }

  &__link {
    @include w-base;
    color: $color-white-200;
    font-weight: 400;
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__title {
    @include s-h5;
    color: $color-white-100;
    margin-bottom: 25px;

    @include tablet {
      margin-bottom: 20px;
    }
  }

  &__text {
    @include w-base;
    color: $color-white-200;
    margin-bottom: 20px;

    &_width {
      max-width: 330px;

      @include tablet {
        max-width: none;
      }
    }

    &:last-of-type {
      margin-bottom: 15px;
    }
  }

  &__divider {
    height: 1px;
    background: $color-white-200;
    margin-bottom: 20px;
  }

  &__copyright {
    @include w-caption;
    color: $color-white-200;
  }
}
</style>
