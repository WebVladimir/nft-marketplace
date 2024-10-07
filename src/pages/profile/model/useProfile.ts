import {useAuthStore} from "~/app/stores/useAuthStore";

export const useProfile = () => {
  const { user} = useAuthStore()

  return {
    user
  }
}