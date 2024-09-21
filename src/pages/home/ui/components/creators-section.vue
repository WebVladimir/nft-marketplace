<script setup lang="ts">
import { useCreatorsSection } from "~/pages/home/model/useCreatorsSection";
import { useDevice } from "#imports";
import { getCountElemsOfDevice } from "~/shared/ui/utils/getCountElemsOfDevice";
import ArtistCard from "~/shared/ui/artist-card/ui/artist-card.vue";

const model = useCreatorsSection();

const creators = getCountElemsOfDevice(useDevice, 12, 6, 5, model.creators)
</script>

<template>
  <section class="creators-section">
    <div class="container creators-section__container">
      <div class="creators-section__inner">
        <HeadSection
          class="creators-section__head"
          title="Top creators"
          description="Checkout Top Rated Creators on the NFT Marketplace"
        >
          <Button type="border" size="secondary">
            <template v-slot:icon>
              <IcoRocket/>
            </template>
            View Rankings
          </Button>
        </HeadSection>

        <div class="creators-section__items">
          <div class="creators-section__item" v-for="creator in creators" :key="creator.id">
            <artist-card :data="creator" :type="$device.isMobileOrTablet ? 'horizontal-big' : 'default'"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.creators-section {
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
  }

  &__item {
    padding: 15px;
    flex: 0 1 25%;

    @include tablet {
      flex-basis: 50%;
    }

    @include mobile {
      flex-basis: 100%;
    }
  }
}
</style>