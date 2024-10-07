<script setup lang="ts">
import EditProfile from "~/pages/edit-profile/ui/edit-profile.vue";

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <EditProfile />
</template>