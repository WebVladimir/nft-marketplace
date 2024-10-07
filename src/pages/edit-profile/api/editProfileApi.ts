import {useRuntimeConfig} from "#imports";
import type { User } from "~/entities/user/model/user";

export const editProfile = async (token: string, formData: User): Promise<User> => {
  const config = useRuntimeConfig()

  return await $fetch("/profile", {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData,
    baseURL: config.public.API_BASE_URL
  })
}