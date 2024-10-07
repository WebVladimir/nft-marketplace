import { useCreatorsStore } from "~/app/stores/useCreatorsStore";
import {useAuthStore} from "~/app/stores/useAuthStore";

export const useSectionPreview = () => {
  const store = useCreatorsStore();
  const authStore = useAuthStore();

  const creator = store.getCreatorById(4)

  return {
    creator,
    authStore
  }
}