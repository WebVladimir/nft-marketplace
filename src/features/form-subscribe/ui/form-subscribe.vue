<script setup lang="ts">
defineProps<{showButtonIco: boolean}>()
</script>

<template>
  <div class="form-subscribe">
    <div class="form-subscribe__inner">
      <form action="" class="form-subscribe__form">
        <input class="form-subscribe__input" placeholder="Enter your email here"/>
        <Button class="form-subscribe__button" size="secondary">
          <template v-slot:icon v-if="showButtonIco">
            <IcoMail/>
          </template>
          Subscribe
        </Button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.form-subscribe {
  &__form {
    display: flex;
    align-items: center;

    @include desktop-max-width {
      flex-direction: column;
    }
  }

  &__input {
    @include w-base;
    font-weight: 400;
    width: 100%;
    border-radius: 20px 0 0 20px;
    height: 58px;
    padding: 16px 20px;
    color: $color-black-100;

    @include desktop-max-width {
      border-radius: 20px;
      margin-bottom: 16px;
    }
  }

  &__button {
    margin-left: -40px;

    @include desktop-max-width {
      width: 100%;
      margin: 0;
    }
  }

  &__button > * {
    &:hover {
      transform: scale(1);
    }
  }
}
</style>