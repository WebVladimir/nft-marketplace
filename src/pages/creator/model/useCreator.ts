import {getCreator} from "~/pages/creator/api/creatorApi";
import { ref, useAsyncData } from '#imports'
import type {User} from "~/entities/user/model/user";
import type { RouteLocationNormalized } from "#vue-router";

export const useCreator = () => {
  const creator: Ref<User | null> = ref(null)
  const route: RouteLocationNormalized = useRoute()

  useAsyncData('creator',async () => {
    creator.value = await getCreator(route.params.id as string)
  })

  return {
    creator
  }
}