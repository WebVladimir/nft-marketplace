<script setup lang="ts">
const state = reactive({
  value: '#000000'
})
</script>

<template>
  <Story title="Shared/icons">
    <Variant >
      <div :style="{color: state.value}">
        <IcoEye/>
        <IcoRocket/>
        <IcoMail/>
        <IcoUser/>
      </div>

      <template #controls>
        <HstColorSelect
          v-model="state.value"
          title="color-ico"
        />
      </template>
    </Variant>
  </Story>
</template>


<style scoped lang="scss">
svg {
  margin: 5px;
  width: 45px;
  height: 45px;
}
</style>