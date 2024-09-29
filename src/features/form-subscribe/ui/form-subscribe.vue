<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email()
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
});

const [email] = defineField('email');

defineProps<{showButtonIco: boolean}>()

const onSubmit = handleSubmit(values => {
  console.log(values)
});
</script>

<template>
  <div :class="['form-subscribe', {'form-subscribe_error': errors.email }]">
    <div class="form-subscribe__inner">
      <form class="form-subscribe__form">
        <input class="form-subscribe__input" placeholder="Enter your email here" v-model="email"/>
        <Button class="form-subscribe__button" size="secondary" @click="onSubmit">
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
  &_error {
    .form-subscribe__input {
      box-shadow: 0 0 0 1px rgb(224, 36, 36) inset;
    }
  }

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
    transition: box-shadow .3s ease-in-out;

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