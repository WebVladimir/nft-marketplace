<script setup lang="ts">
const creator = {
  name: 'name',
  avatar: {
    name: 'avatar-10',
    alt: 'avatar-10',
  },
  totalSales: 999
}
</script>

<template>
  <Story title="Shared/creator-mini">
    <Variant title="default" auto-props-disabled>
      <CreatorMin :creator="creator" nft-name='nft-name'/>
    </Variant>
  </Story>
</template>