<template>
  <div class="input">
    <div class="input__inner">
      <div class="input__ico">
        <slot></slot>
      </div>
      <input type="text" class="input__field">
    </div>
  </div>
</template>

<style lang="scss">
.input {
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

    &::placeholder {

    }
  }
}
</style>