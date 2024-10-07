<script setup lang="ts">
import { useEditProfile } from "~/pages/edit-profile/model/useEditProfile";
import { Form } from 'vee-validate';

const { onSubmit, initValues, schema, isLoading } = useEditProfile();
</script>

<template>
  <div>
    <p>Редактирование профиля</p>

    <div>about</div>

    <client-only>


    <Form :initial-values="initValues" @submit="onSubmit" :validation-schema="schema">
      <AppInput name="about" />
      <AppInput name="email" />
      <UploadFile name="avatar"/>
      <button>
        <Button is="button" :is-loading="isLoading" size="secondary" :padding="30" >Save</Button>
      </button>
    </Form>
    </client-only>


    <div>avatar</div>
    <div>email</div>
    <div>SocialLinks</div>
  </div>
</template>
