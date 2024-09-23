<script setup lang="ts">
import type { Nft, Creator} from "~/shared/model/typesCreator";

const nft: Nft = {
  id: 2,
  name: "test",
  image: {
    name: "nft-5",
    alt: "1"
  },
  price: 11.22,
  highestBid: 1.77,
}

const creator: Creator = {
  id: 1,
  name: 'Nickname',
  avatar: {
    name: 'avatar-1',
    alt: 'avatar-1',
  },
  totalSales: 10.00,
  highestBid: 1.00,
}
</script>

<template>
  <Story title="Shared/cards/card-nft">
    <Variant title="default" autoPropsDisabled>
      <CardNft :creator="creator" :nft="nft"/>
    </Variant>
  </Story>
</template>