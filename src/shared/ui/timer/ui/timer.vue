<script setup lang="ts">
interface Props {
  caption?: string
}

defineProps<Props>()
</script>

<template>
  <div class="timer">
    <div class="timer__inner">
      <div class="timer__main">
        <div class="timer__caption" v-if="$slots.caption">
          <slot name="caption" />
        </div>
        <div class="timer__items">
          <slot name="items" />
        </div>
      </div>
      <div class="timer__bottom" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.timer {
  &__inner {
    padding: 30px;
    border-radius: 20px;
    background: rgba(59, 59, 59, 0.50);
    backdrop-filter: blur(5px);
  }

  &__bottom {
    padding-top: 30px;
  }

  &__items {
    display: flex;

    > * {
      position: relative;

      &:after {
        content: ':';
        position: absolute;
        right: -22px;
        top: 50%;
        transform: translateY(calc(-50% - 12px));
        @include s-h3;
        color: $color-white-100;
        margin-bottom: 5px;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }

    * > :nth-child(1) {
      @include s-h3;
      color: $color-white-100;
      margin-bottom: 5px;
    }

    * > :nth-child(2) {
      @include s-caption;
      color: $color-white-100;
    }

    .not-dot {
      &:after {
        display: none;
      }
    }
  }

  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  &__caption {
    @include s-caption;
    color: $color-white-100;
    margin-bottom: 10px;
  }

  &__value {
    @include s-h3;
    color: $color-white-100;
    margin-bottom: 5px;
  }

  &__description {
    @include s-caption;
    color: $color-white-100;
  }
}
</style>