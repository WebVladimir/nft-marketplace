<script setup lang="ts">
import SignUpForm from "~/features/auth/ui/sign-up-form.vue";
</script>

<template>
  <div class="sign-up-page">
    <div class="sign-up-page__inner">
      <p class="sign-up-page__title">Create account</p>
      <p class="sign-up-page__description">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
      <sign-up-form />
    </div>
  </div>
</template>

<style lang="scss">
.sign-up-page {

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