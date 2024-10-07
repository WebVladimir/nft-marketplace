import type { User } from "~/entities/user/model/user";
import { defineStore } from 'pinia'
import { useCookie } from "#app";

interface State {
  user: User | null,
  token: string,
  isAuthenticated: boolean,
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    const cookie: any = useCookie('authToken')

    return {
      user: null,
      token: cookie.value,
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
      this.token = '';
      this.user = null
    }
  }
})