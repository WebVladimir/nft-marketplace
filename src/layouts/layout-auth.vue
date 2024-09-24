<template>
  <div class="layout-auth">
    <div class="layout-auth__inner">
      <Header/>
      <main class="layout-auth__main container-desktop">
        <div class="layout-auth__image">
          <img src="/images/layout-auth.png" alt="" class="layout-auth__img">
        </div>
        <div class="layout-auth__body">
          <div class="layout-auth__content">
            <NuxtPage />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-auth {
  &__inner {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__main {
    display: flex;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
      margin-bottom: auto;
    }
  }

  &__image {
    width: calc(50% - 30px);

    @include tablet {
      width: calc(50% - 20px);
    }

    @include mobile {
      height: 232px;
      width: 100%;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__body {
    width: calc(50% - 30px);
    padding: 100px 0;

    @include tablet {
      width: calc(50% - 20px);
      padding: 80px 0;
    }

    @include mobile {
      width: 100%;
      padding: 30px 30px 40px 30px;
    }
  }

  &__content {
    margin-right: 72px;
    max-width: 460px;

    @include mobile {
      max-width: 100%;
      margin-right: 0;
    }
  }
}
</style>