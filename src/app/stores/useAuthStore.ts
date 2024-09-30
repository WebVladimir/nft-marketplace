import type { User } from "~/entities/user/model/user";
import { defineStore } from 'pinia'
import { useCookie } from "#app";

interface State {
  user: User | null,
  token: string | null | undefined,
  isAuthenticated: boolean,
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    const cookie = useCookie('authToken')

    return {
      user: null,
      token: cookie.value || null,
      isAuthenticated: false
    }
  },

  actions: {
    setUser (user: User) {
      this.user = user;
    },
    setToken (token: string) {
      const cookie = useCookie('authToken')
      cookie.value = token
      this.token = token;
    },
    setAuthenticated(user: User) {
      this.isAuthenticated = true;
      this.setUser(user)
    },
    logout() {
      const cookie = useCookie('authToken')
      cookie.value = null;
      this.isAuthenticated = false
      this.token = null;
      this.user = null

      console.log(this.isAuthenticated)
      console.log(this.token)
      console.log(this.user)
      console.log(cookie.value)
    }
  }
})