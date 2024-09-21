interface Nft {
  id: number,
  name: string,
  image: {
    name: string,
    alt: string,
  }
}

interface Collection {
  name: string,
  nfts: Nft[]
}

interface Creator {
  id?: number,
  name?: string,
  avatar?: {
    name?: string,
    alt?: string,
  },
  totalSales: number,
  highestBid: number,
  collections?: Collection[]
  nfts?: Nft[]
}

import creators from '../data/creators.json';

const typedCreators: Creator[] = creators;

export const useStore = defineStore('main', {
  state: () => ({
    creators: typedCreators
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
    }
  },
  actions: {
    getCreator(id: number): Creator | null {
      return this.creators.find((creator: Creator) => creator.id === id) || null;
    }
  }
})