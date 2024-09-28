import { getDeclension, days, hours, minutes, seconds} from "~/shared/utils/getDeclension";
import { addLeadingZeros } from "~/shared/utils/formatTime";
import { createTimer } from "~/entities/timer/lib/createTimer";

export const useActionTimer = (iso: string) => {
  const timer = createTimer(iso)

  const remainingTime: any = timer.remainingTime.value

  const nowDataTimer = computed(() => {
    return Object.keys(remainingTime).map(key => {
      let label = null

      if (key === 'days') label = getDeclension(remainingTime[key], days);
      if (key === 'hours') label = getDeclension(remainingTime[key], hours);
      if (key === 'minutes') label = getDeclension(remainingTime[key], minutes);
      if (key === 'seconds') label = getDeclension(remainingTime[key], seconds);

      return {
        value: addLeadingZeros(remainingTime[key]),
        key,
        label
      }
    })
  })

  onMounted(() => {
    timer.start()
  })

  return { nowDataTimer }
}