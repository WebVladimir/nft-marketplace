import { useCreatorsStore } from "~/app/stores/useCreatorsStore";

export const useSectionTrending = () => {
  const store = useCreatorsStore()

  const creators = store.getCreators

  return {
    creators
  }
}