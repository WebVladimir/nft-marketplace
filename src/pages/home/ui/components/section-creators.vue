<script setup lang="ts">
import { useSectionCreators } from "../../model/useSectionCreators";
import { useDevice } from "#imports";
import { getCountElemsOfDevice } from "~/shared/ui/utils/getCountElemsOfDevice";
const model = useSectionCreators();

const creators = getCountElemsOfDevice(useDevice, 12, 6, 5, model.topCreators)
</script>

<template>
  <section class="section-creators">
    <div class="container section-creators__container">
      <div class="section-creators__inner">
        <HeadSection
          class="section-creators__head"
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

        <div class="section-creators__items">
          <div class="section-creators__item" v-for="(creator, index) in creators" :key="creator.id">
            <CardArtist :data="creator" :position="index + 1" :type="$device.isMobileOrTablet ? 'horizontal-big' : 'default'"/>
          </div>
        </div>

        <Button class="section-creators__button" size="tertiary" type="border">
          <template v-slot:icon>
            <IcoRocket/>
          </template>
          View Rankings
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-creators {
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
      margin-bottom: 40px;
    }
  }

  &__button {
    display: none;
    width: 100%;

    @include mobile {
      display: block;
    }
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