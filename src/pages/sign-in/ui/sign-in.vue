<script setup lang="ts">
import SingInForm from "~/features/auth/ui/sing-in-form.vue";
</script>

<template>
  <div class="sign-in-page">
    <div class="sign-in-page__inner">
      <p class="sign-in-page__title">Login account</p>
      <p class="sign-in-page__description">Welcome! Enter your login details and continue creating, collecting and&nbsp;selling&nbsp;NFTs</p>
      <sing-in-form/>
    </div>
  </div>
</template>

<style lang="scss">
.sign-in-page {

  &__title {
    @include w-h2;
    color: $color-white-100;
    margin-bottom: 20px;

    @include tablet {
      @include w-h3;
    }
  }

  &__description {
    @include w-h5;
    color: $color-white-100;
    margin-bottom: 40px;
    font-weight: 400;

    @include tablet {
      @include w-base;
    }
  }
}
</style>