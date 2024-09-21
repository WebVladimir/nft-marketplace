import {useStore} from "~/app/stores/global";

export const useSectionCreators = () => {
  const store = useStore();

  const topCreators = store.getTopByTotalSales

  return {
    topCreators
  }
}