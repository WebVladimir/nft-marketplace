<script setup lang="ts">
import CategoryCard from "~/pages/home/ui/components/category-card.vue";
import { useCategoriesSection } from "~/pages/home/model/useCategoriesSection";

const model = useCategoriesSection();
</script>

<template>
  <section class="categories-section">
    <div class="container categories-section__container">
      <div class="categories-section__inner">
        <HeadSection class="categories-section__head" title="Browse Categories"/>

        <div class="categories-section__items">
          <div class="categories-section__item" v-for="card in model.categories">
            <CategoryCard :data="card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.categories-section {
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