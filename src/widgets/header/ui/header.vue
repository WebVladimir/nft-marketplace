<script setup lang="ts">
import { useHeader } from "~/widgets/header/model/useHeader";
import { useAuthStore } from "~/app/stores/useAuthStore";
import {useRouter} from "#imports";

const router = useRouter();
const authStore = useAuthStore()

const { menuLinks } = useHeader()

const isOpen = ref(false)
const isShowButtonSingUp = computed(() => {
  return router.currentRoute.value.name !== 'sign-up'
})

const isShowButtonProfile = computed(() => {
  return router.currentRoute.value.name !== 'profile'
})

function openMenu() {
  isOpen.value = !isOpen.value
  document.body.classList.toggle('lock', isOpen.value)
}

function hideMenu() {
  isOpen.value = false
  document.body.classList.remove('lock')
}
</script>

<template>
  <header class="header">
    <div class="container-big header__container">
      <div class="header__inner">
        <nuxt-link class="header__logo" tag="a" to="/">
          <img src="/images/logo.svg" alt="logo" class="header__logo-img">
        </nuxt-link>
        <div :class="['header__body', {'header__body_active': isOpen}]" ref="headerBody">

          <nav class="header__menu">
            <nuxt-link
              class="header__link"
              tag="a"
              v-for="(link, index) in menuLinks"
              :key="index"
              @click="hideMenu"
              :to="link.to"
            >
              {{ link.label }}
            </nuxt-link>
          </nav>

          <Button
            v-if="!authStore.isAuthenticated && isShowButtonSingUp"
            class="header__button"
            size="secondary"
            :padding="30"
            link
            to="/sign-up"
            @click="hideMenu"
          >
            <template v-slot:icon>
              <icoUser />
            </template>
            Sign Up
          </Button>

          <TransitionGroup name="header-buttons" v-if="authStore.isAuthenticated">
            <Button
              class="header__button"
              type="fill"
              color="purple"
              size="secondary"
              :padding="30"
              link
              to="/profile"
              v-if="authStore.isAuthenticated && isShowButtonProfile"
            >
              Profile
            </Button>
            <Button
              link
              to="/"
              class="header__button"
              type="fill"
              color="purple"
              size="secondary"
              :padding="30"
              @click="authStore.logout()"
              v-if="authStore.isAuthenticated"
            >
              <template v-slot:icon>
                <icoExit />
              </template>
            </Button>
          </TransitionGroup>
        </div>

        <div :class="['header__burger', {'header__burger_active': isOpen}]" @click="openMenu">
          <span class="header__burger-line header__burger-line_1" />
          <span class="header__burger-line header__burger-line_2" />
          <span class="header__burger-line header__burger-line_3" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    min-height: 100px;

    @include tablet {
      padding: 15px 0;
      min-height: 54px;
    }
  }

  &__button {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__body {
    display: flex;
    align-items: center;

    @include tablet {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: $color-black-200;
      padding: 54px 50px 0 50px;
      transform: scale(0.5) translateZ(0);
      border-radius: 20px;
      opacity: 0;
      transition: transform .3s ease-in-out, opacity .3s ease-in-out, border .3s ease-in-out;
      pointer-events: none;
      z-index: 10;

      &_active {
        opacity: 1;
        transform: scale(1) translateZ(0);
        border-radius: 0;
        pointer-events: auto;
      }
    }

    @include mobile {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  &__logo {
    position: relative;
    width: 243px;
    height: 32px;
    z-index: 11;

    @include tablet {
      width: 183px;
      height: 24px;
    }
  }

  &__menu {
    margin-right: 10px;

    @include tablet {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
    }
  }

  &__link {
    @include w-base;
    position: relative;
    padding: 0 20px;
    color: $color-white-100;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: color .3s ease-in-out;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -5px;
      height: 2px;
      width: 50%;
      background: $call-to-action;
      opacity: 0;
      transition: opacity .2s ease-in-out;
    }

    &:not(:last-child) {
      margin-right: 10px;

      @include tablet {
        margin: 0 0 30px 0;
      }
    }

    @include tablet {
      padding: 0;
    }
  }

  &__burger {
    display: none;
    flex-shrink: 0;
    position: relative;
    width: 24px;
    height: 24px;
    transition: transform .2s ease-in-out;
    z-index: 11;

    @include tablet {
      display: block;
    }

    &_active {
      transform: rotate(-90deg);

      .header__burger-line {
        background: $call-to-action;
      }
    }
  }

  &__burger-line {
    display: block;
    position: absolute;
    border-radius: 100px;
    height: 2px;
    background: $color-white-100;
    left: 2px;
    transition: background .2s ease-in-out;

    &_1 {
      width: 14px;
      top: 4px;
    }

    &_2 {
      width: 18px;
      top: 50%;
      transform: translateY(-50%);
    }

    &_3 {
      width: 14px;
      bottom: 4px;
    }
  }
}

.header__link.router-link-active {
  color: $call-to-action;
}

.header__link:not(.router-link-active) {
  &:hover:after {
    opacity: 1;
  }
}

.header-buttons-enter-active,
.header-buttons-leave-active {
  transition: all 0.5s ease;
}
.header-buttons-enter-from,
.header-buttons-leave-to {
  transform: translateX(100%) scale(0);
  opacity: 0;
}
</style>
