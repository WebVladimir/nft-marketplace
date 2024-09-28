import { ref } from 'vue'

interface RemainingTime {
  years?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function createTimer(inputDate: string) {
  let interval: NodeJS.Timeout | null = null;
  const remainingTime = ref<RemainingTime>({});
  let onCompleteCallback: (() => void) | null = null;

  // Update timer
  function updateRemainingTime() {
    const now: Date = new Date();
    const endDate: Date = new Date(inputDate);

    const timeDifference = endDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      if (interval) clearInterval(interval);
      remainingTime.value = {};
      if (onCompleteCallback) onCompleteCallback();
    } else {
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      if (years) remainingTime.value.years = years;
      if (days) remainingTime.value.days = days;
      if (hours || hours === 0) remainingTime.value.hours = hours;
      if (minutes || minutes === 0) remainingTime.value.minutes = minutes;
      if (seconds || seconds === 0) remainingTime.value.seconds = seconds;
    }
  }

  // Start timer
  function start() {
    if (!interval) {
      updateRemainingTime();
      interval = setInterval(() => {
        updateRemainingTime();
      }, 1000);
    }
  }

  // Stop timer
  function stop() {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  // Event complete timer
  function onComplete(callback: () => void) {
    onCompleteCallback = callback;
  }

  return {
    start,
    stop,
    remainingTime,
    onComplete,
  };
}