import { useStore } from "~/app/stores/global";

export const useSectionNfts = () => {
  const store = useStore()

  const salesNft = store.getSellableNft;

  return {
    salesNft
  }
}