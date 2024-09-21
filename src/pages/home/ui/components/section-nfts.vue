<script setup lang="ts">
import { useDevice } from "#imports";
import { getCountElemsOfDevice } from "~/shared/ui/utils/getCountElemsOfDevice";
import { useSectionNfts } from "~/pages/home/model/useSectionNfts";

const model = useSectionNfts()

const nfts = getCountElemsOfDevice(useDevice, 3, 2, 3, model.nfts)
</script>

<template>
  <section class="section-nfts">
    <div class="container section-nfts__container">
      <div class="section-nfts__inner">
        <HeadSection class="section-nfts__head" title="Discover More NFTs" description="Explore new trending NFTs">
          <Button size="secondary" type="border">
            <template v-slot:icon>
              <ico-eye/>
            </template>
            See All
          </Button>
        </HeadSection>
        <div class="section-nfts__items">
          <div class="section-nfts__item" v-for="card in nfts">
            <CardNft :nft="card" />
          </div>
        </div>
        <Button class="section-nfts__button" size="tertiary" type="border">
          <template v-slot:icon>
            <ico-eye/>
          </template>
          See All
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-nfts {
  &__inner {
    padding: 80px 0;

    @include tablet {
      padding-top: 40px;
    }

    @include mobile {
      padding-bottom: 60px;
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
      margin: 0 0 40px 0;
    }
  }

  &__item {
    padding: 15px;
    flex: 0 1 33.333%;

    @include tablet {
      flex-basis: 50%;
    }

    @include mobile {
      padding: 0;
      flex-basis: 100%;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  &__button {
    display: none;

    @include mobile {
      display: block;
      width: 100%;
    }
  }
}
</style>