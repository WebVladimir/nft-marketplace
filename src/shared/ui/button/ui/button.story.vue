<script setup lang="ts">
import {HstCheckbox, HstSelect} from "@histoire/controls";

interface ButtonProps {
  type?: string,
  size?: string,
  showIcon?: boolean,
  reverse?: boolean,
  padding?: string,
  color?: string
}

const state: ButtonProps = reactive({
  type: 'fill',
  size: 'secondary',
  showIcon: true,
  reverse: false,
  padding: '50',
  color: 'purple'
})
</script>

<template>
  <Story title="Shared/button">
    <Variant title="default" autoPropsDisabled>
      <Button
        :type="state.type"
        :size="state.size"
        :reverse="state.reverse"
        :padding="state.padding"
        :color="state.color"
      >
        <template v-slot:icon v-if="state.showIcon">
          <IcoRocket/>
        </template>
        button
      </Button>

      <template #controls>
        <HstCheckbox v-model="state.showIcon" title="show-icon" />
        <HstCheckbox v-model="state.reverse" title="reverse" v-if="state.showIcon" />
        <HstSelect
          v-model="state.type"
          title="type"
          :options="{
            'fill': 'fill',
            'border': 'border',
          }"
        />
        <HstSelect
          v-model="state.size"
          title="size"
          :options="{
            'primary': 'primary',
            'secondary': 'secondary',
            'tertiary': 'tertiary',
          }"
        />
        <HstSelect
          v-model="state.color"
          title="color"
          :options="{
            'purple': 'purple',
            'white': 'white',
          }"
        />
        <HstSelect
          v-model="state.padding"
          title="padding"
          :options="{
            '50': 50,
            '30': 30,
          }"
        />
      </template>
    </Variant>
  </Story>
</template>