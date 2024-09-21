<template>
  <div class="section-nfts">
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
      </div>
    </div>
  </div>
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

  &__head{
    margin-bottom: 60px;

    @include tablet {
      margin-bottom: 40px;
    }
  }
}
</style>