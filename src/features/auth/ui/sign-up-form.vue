<script setup lang="ts">
import { useSingUp } from "../model/useSignUp";

const { onSubmit, isLoading } = useSingUp()
</script>

<template>
  <div class="sign-up-form">
    <div class="sign-up-form__inner">
      <form class="sign-up-form__form">
        <div class="sign-up-form__fields">
          <AppInput
            class="sign-up-form__input"
            placeholder="Username"
            name="name"
          >
            <template v-slot:default>
              <IcoUser/>
            </template>
          </AppInput>
          <AppInput
            class="sign-up-form__input"
            placeholder="Email Address"
            name="email"
            type="email"
          >
            <template v-slot:default>
              <IcoMail/>
            </template>
          </AppInput>
          <AppInput
            class="sign-up-form__input"
            placeholder="Password"
            name="password"
            type="password"
            eye
          >
            <template v-slot:default>
              <IcoLock/>
            </template>
          </AppInput>
          <AppInput
            class="sign-up-form__input"
            placeholder="Confirm Password"
            name="passwordConfirm"
            type="password"
            eye
          >
            <template v-slot:default>
              <IcoLock/>
            </template>
          </AppInput>
        </div>

        <div class="sign-up-form__buttons">
          <Button size="tertiary" class="sign-up-form__button" @click="onSubmit" :is-loading="isLoading">Create account</Button>
          <Button size="tertiary" class="sign-up-form__button" link to="/sign-in" type="border">Login account</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;

  &:hover {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
}

.sign-up-form {
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