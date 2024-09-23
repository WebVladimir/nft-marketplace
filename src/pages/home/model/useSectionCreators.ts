import { useCreatorsStore } from "~/app/stores/useCreatorsStore";

export const useSectionCreators = () => {
  const store = useCreatorsStore();

  const topCreators = store.getTopByTotalSales

  return {
    topCreators
  }
}