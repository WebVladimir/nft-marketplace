import { useCreatorsStore } from "~/app/stores/useCreatorsStore";

export const useSectionPreview = () => {
  const store = useCreatorsStore();

  const creator = store.getCreatorById(4)

  return {
    creator
  }
}