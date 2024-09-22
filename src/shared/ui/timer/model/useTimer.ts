export const useTimer = (props: any, emits: any) => {
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const interval = ref<any>(null);

  function updateTimer() {
    seconds.value--;
    if (seconds.value < 0) {
      seconds.value = 59;
      minutes.value--;
      if (minutes.value < 0) {
        minutes.value = 59;
        hours.value--;
        if (hours.value < 0) {
          clearInterval(interval.value!);
          hours.value = 0;
          minutes.value = 0;
          seconds.value = 0;

          emits('ended')
        }
      }
    }
  }

  function initializeTimer() {
    const totalSeconds = props.minutes * 60;
    hours.value = Math.floor(totalSeconds / 3600);
    minutes.value = Math.floor((totalSeconds % 3600) / 60);
    seconds.value = totalSeconds % 60;
  }

  onMounted(() => {
    initializeTimer();
    interval.value = setInterval(updateTimer, 1000);
  });

  onUnmounted(() => {
    clearInterval(interval.value!);
  });

  watch(() => props.minutes, initializeTimer);

  return {
    hours,
    minutes,
    seconds
  }
}