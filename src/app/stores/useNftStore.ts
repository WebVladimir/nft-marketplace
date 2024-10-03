import type { Nft, Collection, SaleNft, CreatorInfo } from "~/shared/model/typesCreator";
import { useCreatorsStore } from './useCreatorsStore';

export const useNftStore = defineStore('nft', {
  state: () => ({
    nftOnSale: [] as Nft[],
    nftActions: [] as SaleNft[]
  }),

  getters: {
    // Возвращает все NFT, которые находятся на продаже
    getSelesNft: (state) => {
      const creatorsStore = useCreatorsStore();
      const sellableNfts: Nft[] = [];

      creatorsStore.creators.forEach((creator) => {
        const creatorInfo: CreatorInfo = {
          name: creator.name,
          avatar: creator.avatar,
        };

        // Функция для добавления продаваемых NFT
        const addSellableNfts = (nfts: Nft[]) => {
          const filteredNfts = nfts.filter(nft => nft.forSale === true);
          const transformedNfts = filteredNfts.map(nft => ({
            ...nft,
            creator: creatorInfo,
          }));
          sellableNfts.push(...transformedNfts);
        };

        if (creator.collections) {
          creator.collections.forEach((collection: Collection) => {
            addSellableNfts(collection.nfts);
          });
        }

        if (creator.nfts) {
          addSellableNfts(creator.nfts);
        }
      });

      state.nftOnSale = sellableNfts;
      return sellableNfts;
    },

    // Возвращает все NFT с акцией
    getNftAction: (state) => {
      const creatorsStore = useCreatorsStore();
      const salesNfts: SaleNft[] = [];

      creatorsStore.creators.forEach((creator) => {
        if (creator.actions) {
          const creatorInfo: CreatorInfo = {
            name: creator.name,
            avatar: creator.avatar,
          };

          salesNfts.push({ creatorInfo, actions: creator.actions });
        }
      });
      state.nftActions = salesNfts;

      return salesNfts;
    },
  }
});