<script setup lang="ts">
import TrendCard from "./trend-card.vue";
import { useTrendingSection } from "~/pages/home/model/useTrendingSection";
import { useDevice } from "#imports";
const { isTablet, isMobile } = useDevice();

const model = useTrendingSection()

const cards = computed(() => {
  const limit = isTablet ? 2 : isMobile ? 1 : 3;
  return model.trendings.slice(0, limit);
})
</script>

<template>
  {{ cards }}
  <section class="trending-section">
    <div class="container trending-section__container">
      <div class="trending-section__inner">
        <HeadSection
          class="trending-section__head"
          title="Trending Collection"
          description="Checkout our weekly updated trending collection."
        />
        <div class="trending-section__items">
          <div class="trending-section__item" v-for="card in cards">
            <TrendCard :data="card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trending-section {
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
      margin: 0;
    }
  }

  &__item {
    flex: 0 1 33.333%;
    padding: 15px;

    @include tablet {
      flex-basis: 50%;
    }

    @include mobile {
      flex-basis: 100%;
      padding: 0;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
