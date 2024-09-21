import {useStore} from "~/app/stores/global";

export const useSectionPreview = () => {
  const store = useStore();

  const creator = store.getCreator(4)

  return {
    creator
  }
}