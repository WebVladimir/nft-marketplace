<script setup lang="ts">
import {useCreatorsStore} from "~/app/stores/useCreatorsStore";

const { creators } = useCreatorsStore()
const creatorId = 4

const getCreatorNft = computed(() => {
  return creators.find((creator) => creator.id === creatorId)?.collections[0].nfts
})
const getCreator = computed(() => {
  return creators.find((creator) => creator.id === creatorId)
})
</script>

<template>
  <div class="content-list">
    <div class="content-list__container container">
      <div class="content-list__inner">
        <div class="content-list__items">
          <div class="content-list__item" v-for="nft in [...getCreatorNft, ...getCreatorNft]" :key="nft.id">
            <CardNft bg="200" :creator="getCreator" :nft="nft" class="content-list__item-card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content-list {
  background: $color-black-100;

  &__inner {
    padding: 80px 0;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }

  &__item {
    padding: 15px;
    flex: 0 1 33.333%;

    @include tablet {
      flex-basis: 50%;
    }

    @include mobile {
      flex-basis: 100%;
    }
  }
}
</style>