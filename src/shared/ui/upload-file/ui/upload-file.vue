<script setup lang="ts">
import { Field } from "vee-validate";

interface Props {
  name: string;
}

defineProps<Props>()
</script>

<template>
  <Field :name="name" v-slot="{ handleChange, handleBlur }">
    <input type="file" @change="handleChange" @blur="handleBlur" />
  </Field>
</template>