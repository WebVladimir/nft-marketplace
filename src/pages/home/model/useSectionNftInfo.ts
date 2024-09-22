import {useStore} from "~/app/stores/global";

export const useSectionNftInfo = () => {
  const store = useStore()

  const NftWithShares = store.getSalesNfts

  return {
    NftWithShares
  }
}