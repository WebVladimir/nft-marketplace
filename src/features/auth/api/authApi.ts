import type { User } from "~/entities/user/model/user";

import {useRuntimeConfig} from "#imports";


export const register = async (userData: { name: string, password: string, email: string }): Promise<{ user: User; token: string }> => {
  const config = useRuntimeConfig()

  return await $fetch("/register", {
    method: "POST",
    body: userData,
    baseURL: config.public.API_BASE_URL
  })
}

export const login = async (credintails: {name: string, password: string}): Promise<{ user: User; token: string }> => {
  const config = useRuntimeConfig()

  return await $fetch("/login", {
    method: "POST",
    body: credintails,
    baseURL: config.public.API_BASE_URL
  })
}

export const profile = async (token: string): Promise<User> => {
  const config = useRuntimeConfig()

  return await $fetch("/profile", {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`
    },
    baseURL: config.public.API_BASE_URL
  })
}