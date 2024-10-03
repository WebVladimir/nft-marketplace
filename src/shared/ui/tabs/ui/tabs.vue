<script setup lang="ts">
const tabs = ref([
  {
    id: 1,
    label: 'Created',
    value: 302,
  },
  {
    id: 2,
    label: 'Owned',
    value: 67,
  },
  {
    id: 3,
    label: 'Collection',
    value: 4,
  },
])

const activeTab = ref(tabs.value[0])
</script>

<template>
  <div class="tabs">
    <div class="tabs__inner">
      <div
        :class="['tabs__tab', {'tabs__tab_active': tab.id === activeTab.id}]"
        class="tabs__tab"
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab"
      >
        <p class="tabs__label">{{ tab.label }}</p>
        <div class="tabs__bage">
          <p class="tabs__bage-value">{{ tab.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tabs {
  &__inner {
    display: flex;
  }

  &__label {
    @include w-h5;
    color: $color-white-200;
    margin-right: 16px;
    transition: color .3s ease-in-out;

    @include tablet {
      @include w-base;
    }

    @include mobile {
      margin: 0;
    }
  }

  &__tab {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgba(0,0,0, 0);
    padding: 14.5px 30px;
    cursor: pointer;
    transition: border-bottom-color .3s ease-in-out;

    @include tablet {
      padding: 18.5px 30px;
    }

    @include mobile {
      padding: 19px 10px;
    }
  }

  &__bage {
    border-radius: 20px;
    background: $color-black-100;
    padding: 5px 10px;
    line-height: 100%;
    transition: background-color .3s ease-in-out;

    @include mobile {
      display: none;
    }
  }

  &__bage-value {
    @include s-base;
    color: $color-white-100;

    @include tablet {
      @include s-caption
    }
  }
}

.tabs__tab_active {
  border-color: $color-white-200;

  .tabs__label {
    color: $color-white-100;
  }
  .tabs__bage {
    background: $color-white-200;
  }
}
</style>