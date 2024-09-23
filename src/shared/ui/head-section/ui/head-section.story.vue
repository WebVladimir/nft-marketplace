<template>
  <Story title="Shared/head-section">
    <Variant title="default" auto-props-disabled>
      <HeadSection title="Title" description="Description"/>
    </Variant>
    <Variant title="add-button" auto-props-disabled>
      <HeadSection title="Title" description="Description">
        <template v-slot:default>
          Button
        </template>
      </HeadSection>
    </Variant>
  </Story>
</template>