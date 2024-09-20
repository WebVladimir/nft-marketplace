<script setup lang="ts">
import type {
  ButtonTypeType,
  ButtonSizeType,
  ButtonPaddingType,
  ButtonColorType
} from "~/shared/button/model/types";

interface Props {
  size?: ButtonSizeType
  type?: ButtonTypeType
  padding?: ButtonPaddingType
  color?: ButtonColorType
  link?: boolean,
  reverse?: boolean,
}
withDefaults(defineProps<Props>(), {
  size: 'primary',
  type: 'fill',
  link: false,
  reverse: false,
  padding: 50,
  color: 'purple'
})
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :class="['button', size, type, color]"
  >
    <div :class="['button__inner', `button__inner_padding_${padding}`, {'button__inner_reverse': reverse}]">
      <div class="button__ico" v-if="$slots.icon">
        <slot name="icon"/>
      </div>
      <p class="button__text"><slot/></p>
    </div>
  </component>
</template>

<style lang="scss">
@import "assets/styles/vars.scss";
//color
.purple {
  --color-main: #{$call-to-action};
  --color-secondary: #{$color-white-100};
}

.button {
  &__inner {
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;

    &_reverse {
      flex-direction: row-reverse;
    }

    &_padding {
      &_30 {
        padding: 0 30px;
      }
      &_50 {
        padding: 0 50px;
      }
    }
  }

  &__ico {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  &__text {
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
  }
}

// Size
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

// Type
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
</style>