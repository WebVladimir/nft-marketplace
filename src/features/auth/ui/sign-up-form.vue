<template>
  <div class="sign-up-form">
    <div class="sign-up-form__inner">
      <form action="" class="sign-up-form__form">
        <div class="sign-up-form__fields">
          <Input class="sign-up-form__input">
            <template v-slot:default>
              <IcoUser/>
            </template>
          </Input>
          <Input class="sign-up-form__input">
            <template v-slot:default>
              <IcoMail/>
            </template>
          </Input>
          <Input class="sign-up-form__input">
            <template v-slot:default>
              <IcoLock/>
            </template>
          </Input>
          <Input class="sign-up-form__input">
            <template v-slot:default>
              <IcoLock/>
            </template>
          </Input>
        </div>

        <Button size="tertiary" class="sign-up-form__button">Create account</Button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
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
  }
}
</style>