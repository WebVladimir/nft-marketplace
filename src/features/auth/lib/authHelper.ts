import { login, register } from "~/features/auth/api/authApi";
import {useAuthStore} from "~/app/stores/useAuthStore";

export const registerUser = async (userData: {name: string, email: string, password: string}) => {
  await register(userData)
}

export const loginUser = async (credintails: {name: string, password: string}) => {
  const authStore = useAuthStore();
  const response = await login(credintails)
  authStore.setAuthenticated(response.user)
  authStore.setToken(response.token)
}