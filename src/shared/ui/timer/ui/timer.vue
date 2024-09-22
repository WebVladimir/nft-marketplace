<script setup lang="ts">
import {useTimer} from "../model/useTimer";
import formatTime from "./utils/formatTime";

const props = defineProps<{
  minutes: number;
}>();

const emits = defineEmits<{
  ended: any
}>()

const model = useTimer(props, emits)
</script>

<template>
  <div class="timer">
    <div class="timer__inner">
      <div class="timer__main">
        <p class="timer__title">Auction ends in:</p>
        <div class="timer__items">
          <div class="timer__item">
            <p class="timer__value">{{ formatTime(model.hours.value) }}</p>
            <p class="timer__description">Hours</p>
          </div>
          <div class="timer__item">
            <p class="timer__value">:</p>
          </div>
          <div class="timer__item">
            <p class="timer__value">{{ formatTime(model.minutes.value) }}</p>
            <p class="timer__description">Minutes</p>
          </div>
          <div class="timer__item">
            <p class="timer__value">:</p>

          </div>
          <div class="timer__item">
            <p class="timer__value">{{ formatTime(model.seconds.value) }}</p>
            <p class="timer__description">Seconds</p>
          </div>
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
    gap: 10px;
  }

  &__title {
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