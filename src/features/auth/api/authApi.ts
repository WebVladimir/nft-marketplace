import type { User } from "~/entities/user/model/user";

import {useRuntimeConfig} from "#imports";


export const register = async (userData: { username: string, password: string, email: string }): Promise<{ user: User; token: string }> => {
  const config = useRuntimeConfig()

  return await $fetch("/api/users/register", {
    method: "POST",
    body: userData,
    baseURL: config.public.API_BASE_URL
  })
}

export const login = async (credintails: {username: string, password: string}): Promise<{ user: User; token: string }> => {
  const config = useRuntimeConfig()

  return await $fetch("/api/users/login", {
    method: "POST",
    body: credintails,
    baseURL: config.public.API_BASE_URL
  })
}