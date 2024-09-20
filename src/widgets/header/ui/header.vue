<template>
  <header class="header">
    <div class="container-big header__container">
      <div class="header__inner">
        <nuxt-link class="header__logo" tag="a" to="/">
          <img src="/images/logo.svg" alt="logo" class="header__logo-img">
        </nuxt-link>
        <div class="header__body">
          <nav class="header__menu">
            <nuxt-link class="header__link" tag="a" >Marketplace</nuxt-link>
            <nuxt-link class="header__link" tag="a" >Rankings</nuxt-link>
            <nuxt-link class="header__link" tag="a" >Connect a wallet</nuxt-link>
          </nav>

          <Button class="header__button" type="border"  size="secondary" :padding="30">
            <template v-slot:icon>
              <icoUser />
            </template>

            Sign Up
          </Button>
        </div>

        <div class="header__burger">
          <span class="header__burger-line" />
          <span class="header__burger-line" />
          <span class="header__burger-line" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "assets/styles/vars.scss";

.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }

  &__body {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 243px;
    height: 32px;
  }

  &__menu {
    margin-right: 10px;
  }

  &__link {
    padding: 0 20px;
    color: $color-white-100;
    font-weight: 600;
    line-height: 140%;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__button {}

  &__burger {
    display: none;
  }

  &__burger-line {
    &_1 {}

    &_2 {}

    &_3 {}
  }
}
</style>
