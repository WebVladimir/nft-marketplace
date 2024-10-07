import { profile } from "~/features/auth/api/authApi";
import { useAuthStore } from "~/app/stores/useAuthStore";


export default defineNuxtPlugin(async () => {
  const { token, setAuthenticated } = useAuthStore()

  if (token) {
    const response = await profile(token)
    setAuthenticated(response)
  }
})