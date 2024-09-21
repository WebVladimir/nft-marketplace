import {useStore} from "~/app/stores/global";

export const useSectionTrending = () => {
  const store = useStore()

  const creators = store.getCreators

  return {
    creators
  }
}