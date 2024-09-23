<script setup>
const work = {
  title: 'title',
  description: 'description',
  image: {
    src: 'how-works-1',
    alt: 'how-works-1'
  }
}
</script>

<template>
  <Story title="Shared/cards/card-work">
    <Variant>
      <CardWork :data="work"/>
    </Variant>
  </Story>
</template>