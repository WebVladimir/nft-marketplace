<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="app-input">
    <div class="app-input__inner">
      <div class="app-input__ico">
        <slot></slot>
      </div>
      <input
        type="text"
        class="app-input__field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
    </div>
  </div>
</template>

<style lang="scss">
.app-input {
  &__inner {
    position: relative;
    display: flex;
  }

  &__ico {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: #BDBDBD;
  }

  &__field {
    @include w-base;
    padding: 12px 20px 12px 52px;
    border-radius: 20px;
    border: 1px solid $color-white-200;
    background: $color-white-100;
    width: 100%;
  }
}
</style>