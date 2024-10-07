import {useRuntimeConfig} from "#imports";
import type {User} from "~/entities/user/model/user";

export const getCreator = async (id: string): Promise<User> => {
  const config = useRuntimeConfig()

  return await $fetch(`/users/${id}`, {
    method: "GET",
    baseURL: config.public.API_BASE_URL
  })
}