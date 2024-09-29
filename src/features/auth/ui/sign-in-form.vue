<script setup lang="ts">
import { useSignIn } from "../model/useSignIn";

const { onSubmit, isLoading } = useSignIn()
</script>

<template>
  <div class="sign-in-form">
    <div class="sign-in-form__inner">
      <form class="sign-in-form__form">
        <div class="sign-in-form__fields">
          <AppInput
            class="sign-in-form__input"
            name="name"
            placeholder="Username"
          >
            <template v-slot:default>
              <IcoUser/>
            </template>
          </AppInput>
          <AppInput
            class="sign-in-form__input"
            name="password"
            type="password"
            placeholder="Password"
            eye
          >
            <template v-slot:default>
              <IcoLock/>
            </template>
          </AppInput>
        </div>

        <div class="sign-in-form__buttons">
          <Button size="tertiary" class="sign-in-form__button" @click="onSubmit" :is-loading="isLoading">Login account</Button>
          <Button size="tertiary" class="sign-in-form__button" link to="/sign-up" type="border">Create account</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.sign-in-form {
  &__input {
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }

  &__fields {
    margin-bottom: 30px;
  }

  &__button {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>