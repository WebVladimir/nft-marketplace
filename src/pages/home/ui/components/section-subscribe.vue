<script setup lang="ts">
import FormSubscribe from "~/features/form-subscribe/ui/form-subscribe.vue";
</script>

<template>
  <div class="section-subscribe">
    <div class="container section-subscribe__container">
      <div class="section-subscribe__inner">
        <div class="section-subscribe__body">
          <div class="section-subscribe__image">
            <img src="/images/subscribe/subscribe.png" alt="subscribe" class="section-subscribe__img" />
          </div>
          <div class="section-subscribe__content">
            <p class="section-subscribe__title">Join our weekly digest</p>
            <p class="section-subscribe__description">Get exclusive promotions & updates straight to your inbox.</p>
            <FormSubscribe :showButtonIco="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-subscribe {
  &__inner {
    padding: 40px 0 80px 0;

    @include mobile {
      padding: 40px 0;
    }
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px;
    border-radius: 20px;
    background: $color-black-100;

    @include tablet {
      align-items: stretch;
      padding: 40px 30px;
    }

    @include mobile {
      flex-direction: column;
      padding: 0;
      background: none;
    }
  }

  &__title {
    @include w-h3;
    color: $color-white-100;
    margin-bottom: 10px;

    @include tablet {
      @include w-h4;
    }
  }

  &__description {
    @include w-h5;
    color: $color-white-100;
    font-weight: 400;
    margin-bottom: 40px;

    @include tablet {
      @include w-base;
      flex-grow: 1;
    }

    //@include mobile {
    //  flex-grow: 0;
    //}
  }

  &__content {
    flex: 0 1 425px;

    @include tablet {
      display: flex;
      flex-direction: column;
    }

    @include mobile {
      flex-basis: auto;
    }
  }

  &__image {
    height: 310px;
    width: 100%;
    max-width: 425px;
    border-radius: 20px;
    overflow: hidden;
    flex: 0 1 425px;
    margin-right: 30px;

    @include tablet {
      height: 280px;
    }

    @include mobile {
      height: 255px;
      max-width: 100%;
      flex-basis: auto;
      margin: 0 0 30px 0;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>