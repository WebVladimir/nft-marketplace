<template>
  <div class="connect-wallet">
    <div class="connect-wallet__inner">
      <p class="connect-wallet__title">Connect wallet</p>
      <p class="connect-wallet__description">Choose a wallet you want to connect. There are several wallet providers.</p>
      <div class="connect-wallet__items">
        <div class="connect-wallet__item">
          <img src="/icons/wallets/metamask.svg" alt="Metamask" class="connect-wallet__item-ico">
          <p class="connect-wallet__item-text">Metamask</p>
        </div>
        <div class="connect-wallet__item">
          <img src="/icons/wallets/wallet-connect.svg" alt="Wallet Connect" class="connect-wallet__item-ico">
          <p class="connect-wallet__item-text">Wallet Connect</p>
        </div>
        <div class="connect-wallet__item">
          <img src="/icons/wallets/coinbase.svg" alt="Coinbase" class="connect-wallet__item-ico">
          <p class="connect-wallet__item-text">Coinbase</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.connect-wallet {
  &__item {
    display: flex;
    align-items: center;
    padding: 16px 40px;
    cursor: pointer;

    border-radius: 20px;
    border: 1px solid $call-to-action;
    background: $color-black-100;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    @include tablet {
      padding: 14px 40px;
    }
  }

  &__item-ico {
    width: 40px;
    height: 40px;
    margin-right: 20px;

    @include tablet {
      height: 32px;
      width: 32px;
    }
  }

  &__item-text {
    @include w-h5;
    color: $color-white-100;
  }

  &__title {
    @include w-h2;
    color: $color-white-100;
    margin-bottom: 20px;

    @include tablet {
      @include w-h3;
    }
  }

  &__description {
    @include w-h5;
    color: $color-white-100;
    margin-bottom: 40px;
    font-weight: 400;

    @include tablet {
      @include w-base;
    }
  }
}
</style>
<script setup lang="ts">
</script>