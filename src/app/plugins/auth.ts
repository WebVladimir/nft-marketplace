import {auth} from "~/features/auth/api/authApi";
import { useAuthStore } from "~/app/stores/useAuthStore";


export default defineNuxtPlugin(async () => {
  const { token, setAuthenticated } = useAuthStore()

  if (token) {
    const response = await auth(token)
    setAuthenticated(response.user)
  }
})