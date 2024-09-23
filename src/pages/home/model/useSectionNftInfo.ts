import {useNftStore} from "~/app/stores/useNftStore";

export const useSectionNftInfo = () => {
  const store = useNftStore()

  const NftWithShares = store.getNftAction

  return {
    NftWithShares
  }
}