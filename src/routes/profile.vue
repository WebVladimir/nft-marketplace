<script setup lang="ts">
import Profile from "~/pages/profile/ui/profile.vue";

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <Profile/>
</template>