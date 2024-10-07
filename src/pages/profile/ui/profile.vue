<script setup lang="ts">
import { useProfile } from "~/pages/profile/model/useProfile";
import ArtistPreview from "~/features/artist-preview/ui/artist-preview.vue";

const { user } = useProfile()
</script>

<template>
  <div class="profile-page">
    <div class="profile-page__plane" />
    <ArtistPreview :creator="user" edit-profile/>
    <div class="profile-page__container container">
      <Tabs/>
    </div>
  </div>
</template>

<style lang="scss">
.profile-page {
  &__plane {
    background: $color-black-100;
    height: 180px;
  }
}
</style>
