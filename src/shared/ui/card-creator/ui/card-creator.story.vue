<script setup lang="ts">
const data = {
  name: 'name',
  avatar: {
    name: 'avatar-10',
    alt: 'avatar-10',
  },
  totalSales: 999
}

const state = reactive({
  type: 'default'
})
</script>

<template>
  <Story title="Shared/cards/card-creator">
    <Variant title="default" autoPropsDisabled>
      <CardCreator :position="0" :creator="data" :type="state.type"/>

      <template #controls>
        <HstSelect
          v-model="state.type"
          title="type"
          :options="{
            'default': 'default',
            'horizontal-big': 'horizontal-big',
            'horizontal-medium': 'horizontal-medium',
            'horizontal-small': 'horizontal-small',
            'horizontal-mini': 'horizontal-mini'
          }"
        />
      </template>
    </Variant>
  </Story>
</template>