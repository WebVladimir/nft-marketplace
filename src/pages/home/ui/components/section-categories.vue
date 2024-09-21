<script setup lang="ts">
import CardCategory from "./card-category.vue";
import { useSectionCategories } from "../../model/useSectionCategories";

const model = useSectionCategories();
</script>

<template>
  <section class="section-categories">
    <div class="container section-categories__container">
      <div class="section-categories__inner">
        <HeadSection class="section-categories__head" title="Browse Categories"/>

        <div class="section-categories__items">
          <div class="section-categories__item" v-for="card in model.categories">
            <CardCategory :data="card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-categories {
  &__inner {
    padding: 80px 0;

    @include tablet {
      padding: 40px 0;
    }
  }

  &__head {
    margin-bottom: 60px;

    @include tablet {
      margin-bottom: 40px;
    }
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;

    @include mobile {
      margin: -10px;
    }
  }

  &__item {
    padding: 15px;
    flex: 1 1 25%;

    @include mobile {
      padding: 10px;
      flex-basis: 50%;
    }
  }
}
</style>