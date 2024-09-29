<script setup lang="ts">
interface Props {
  placeholder?: string
  modelValue?: string | number
  name?: string,
  type?: string,
}

const props = defineProps<Props>()

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div :class="['app-input', {'app-input_error': errorMessage?.length}]">
    <div class="app-input__inner">
      <div class="app-input__ico">
        <slot></slot>
      </div>
      <input
        autocomplete="off"
        class="app-input__field"
        :type="type || 'text'"
        :name="name"
        :placeholder="placeholder"
        v-model="value"
      >
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
    color: $color-black-200;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) inset;

    transition: border .3s ease-in-out, box-shadow .3s ease-in-out;
  }
}

.app-input.app-input_error {
  .app-input__field {
    box-shadow: 0 0 0 1px rgba(224, 36, 36, 1) inset;
    border: 1px solid rgba(224, 36, 36, 1);
  }
}
</style>