<script setup lang="ts">
import CardTrend from "./card-trend.vue";
import { useSectionTrending } from "../../model/useSectionTrending";
import { getCountElemsOfDevice } from "~/shared/ui/utils/getCountElemsOfDevice";
import { useDevice } from "#imports";

const model = useSectionTrending()
const cards = getCountElemsOfDevice(useDevice, 3, 2, 1, model.creators)
</script>

<template>
  <section class="section-trending">
    <div class="container section-trending__container">
      <div class="section-trending__inner">
        <HeadSection
          class="section-trending__head"
          title="Trending Collection"
          description="Checkout our weekly updated trending collection."
        />
        <div class="section-trending__items">
          <div class="section-trending__item" v-for="card in cards">
            <CardTrend :creator="card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-trending {
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
