import type { Creator } from "~/shared/model/typesCreator";

import creators from '../data/creators.json';

export const useStore = defineStore('main', {
  state: () => ({
    creators: creators
  }),

  getters: {
    getCreators: (state) => state.creators,
    getTopByTotalSales: (state) => {
      const arr = [...state.creators]
      return arr.sort((a, b) => {
        const num1: number = a.totalSales;
        const num2: number = b.totalSales;

        return num1 > num2 ? -1 : 1;
      });
    },
    getSellableNft: (state) => {
      let newArr: any = [];

      state.creators.forEach((creator) => {
        const creatorInfo = {
          name: creator.name,
          avatar: creator.avatar,
        };

        if (creator.collections) {
          creator.collections.forEach((collection) => {
            const filteredNfts = collection.nfts.filter(nft => nft.forSale === true);
            const transformedNfts = filteredNfts.map(nft => ({
              ...nft,
              creator: creatorInfo,
            }));
            newArr = [...newArr, ...transformedNfts];
          });
        }

        if (creator.nfts) {
          const filteredNfts = creator.nfts.filter(nft => nft.forSale === true);
          const transformedNfts = filteredNfts.map(nft => ({
            ...nft,
            creator: creatorInfo,
          }));
          newArr = [...newArr, ...transformedNfts];
        }
      });

      return newArr;
    },
    getSalesNfts: (state) => {
      let newArr: any = [];

      state.creators.forEach((creator) => {

        if (creator.actions) {
          const creatorInfo = {
            name: creator.name,
            avatar: creator.avatar,
          };

          newArr.push({creatorInfo, actions: creator.actions});
        }
      })

      return newArr
    }
  },
  actions: {
    getCreator(id: number): Creator | null {
      return this.creators.find((creator: Creator) => creator.id === id) || null;
    }
  }
})