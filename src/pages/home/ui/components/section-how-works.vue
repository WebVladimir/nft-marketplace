<script setup lang="ts">
import {useSectionHowWorks} from "~/pages/home/model/useSectionHowWorks";

const model = useSectionHowWorks()
</script>

<template>
  <div class="section-how-works">
    <div class="container section-how-works__container">
      <div class="section-how-works__inner">
        <HeadSection class="section-how-works__head" title="How it works" description="Find out how to get started"/>
        <div class="section-how-works__items">
          <div class="section-how-works__item" v-for="(card, index) in model.cards" :key="index">
            <CardWork :data="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-how-works {
  &__inner {
    padding: 80px 0;

    @include tablet {
      padding: 40px 0;
    }
  }

  &__head {
    margin-bottom: 48px;

    @include tablet {
      margin-bottom: 40px;
    }
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    @include mobile {
      margin: 0;
      flex-direction: column;
    }
  }

  &__item {
    padding: 0 15px;
    flex: 1 1 33.333%;

    @include mobile {
      padding: 0;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>