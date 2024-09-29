<script setup lang="ts">
import type { ButtonProps } from '../../button/model/typesButton'
import {NuxtLink} from "#components";

withDefaults(defineProps<ButtonProps>(), {
  size: 'primary',
  type: 'fill',
  link: false,
  reverse: false,
  padding: 50,
  color: 'purple',
  is: 'div',
  isLoading: false
})
</script>

<template>
  <component
    :is="link ? NuxtLink : is"
    :class="['button', size, type, color]"
  >
    <div :class="['button__inner', `button__inner_padding_${padding}`, {'button__inner_reverse': reverse}]">
      <Loading class="button__loading" v-show="isLoading" />
      <div class="button__ico" v-if="$slots.icon">
        <slot name="icon"/>
      </div>
      <p class="button__text"><slot/></p>
    </div>
  </component>
</template>

<style lang="scss">
//Color
.purple {
  --color-main: #{$call-to-action};
  --color-secondary: #{$color-white-100};
}

.white {
  --color-main: #{$color-white-100};
  --color-secondary: #{$call-to-action};
  --color-text: #{$color-black-100};
}

//Main
.button {
  display: inline-block;
  text-decoration: none;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &:hover {
      transform: scale(0.95);
    }

    &_reverse {
      flex-direction: row-reverse;

      .button__ico {
        margin: 0 0 0 12px;
      }
    }

    &_padding {
      &_30 {
        padding: 0 30px;
      }
      &_50 {
        padding: 0 50px;
      }

      @include mobile {
        padding: 0 20px;
      }
    }
  }

  &__ico {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  &__text {
    @include w-base;
    font-weight: 600;
    line-height: 0;
  }

  &__loading {
    margin-right: 14px;
  }
}

//Size
.button {
  &.primary {
    .button__inner {
      min-height: 72px;
    }

    .button__text {
      font-size: 22px;
    }
  }

  &.secondary {
    .button__inner {
      min-height: 60px;
    }
  }

  &.tertiary {
    .button__inner {
      min-height: 46px;
    }
  }
}

//Type
.button {
  &.fill {
    .button__inner {
      background: var(--color-main, #000);
    }
    .button__text {
      color: var(--color-secondary, #fff);
    }

    .button__ico {
      svg {
        color: var(--color-secondary, #fff);
      }
    }
  }

  &.border {
    .button__inner {
      -webkit-box-shadow: 0 0 0 2px var(--color-main, #fff);
      -moz-box-shadow: 0 0 0 2px var(--color-main, #fff);
      box-shadow: 0 0 0 2px var(--color-main, #fff);
    }

    .button__text {
      color: var(--color-secondary, #fff);
    }

    .button__ico {
      svg {
        color: var(--color-main, #fff);
      }
    }
  }
}

//color
.button {
  &.white {
    .button__text {
      color: var(--color-text, $color-black-100);
    }
  }
}
</style>