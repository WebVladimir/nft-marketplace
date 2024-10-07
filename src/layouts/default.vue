<template>
  <div class="layout-default">
    <Header/>
    <main>
      <NuxtPage />
    </main>
    <Footer class="layout-default__footer"/>
  </div>
</template>

<style lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__footer {
    margin-top: auto;
  }
}
</style>