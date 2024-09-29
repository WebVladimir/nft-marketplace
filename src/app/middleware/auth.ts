import {useAuthStore} from "~/app/stores/useAuthStore";

export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return navigateTo('/sign-in');
  }
})