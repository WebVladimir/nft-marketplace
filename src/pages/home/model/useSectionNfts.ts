import { useNftStore } from "~/app/stores/useNftStore";

export const useSectionNfts = () => {
  const store = useNftStore()

  const salesNft = store.getSelesNft;

  return {
    salesNft
  }
}