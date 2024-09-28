<script setup lang="ts">
import {useActionTimer} from "~/features/action-taimer/model/useActionTimer";

const props = defineProps<{ iso: string }>()

const timerModel = useActionTimer(props.iso)

const dataTimer = timerModel.nowDataTimer
</script>

<template>
  <Timer class="section-nft-info__timer">
    <template #caption>
      <p>Акция закончится через:</p>
    </template>
    <template #items>
      <div v-for="(time, index) in dataTimer" :key="index" :class="[{'not-dot': time.key === 'days'}]">
        <p>{{ time.value}}</p>
        <p>{{ time.label }}</p>
      </div>
    </template>
  </Timer>
</template>