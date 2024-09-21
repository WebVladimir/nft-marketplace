export const useSectionNfts = () => {
  interface Nft {
    name: string,
    image: {
      name: string,
      alt: string,
    }
    creator: {
      avatar: string,
      name: string,
    }
    price: number,
    highest: number,
  }

  const nfts: Nft[] = [
    {
      name: 'Distant Galaxy',
      image: {
        name: 'nft-1',
        alt: 'nft-1',
      },
      creator: {
        avatar: 'avatar-6',
        name: 'MoonDancer',
      },
      price: 1.63,
      highest: 0.33,
    },
    {
      name: 'Life On Edena',
      image: {
        name: 'nft-2',
        alt: 'nft-2',
      },
      creator: {
        avatar: 'avatar-7',
        name: 'MoonDancer',
      },
      price: 1.63,
      highest: 0.33,
    },
    {
      name: 'AstroFiction',
      image: {
        name: 'nft-3',
        alt: 'nft-3',
      },
      creator: {
        avatar: 'avatar-8',
        name: 'MoonDancer',
      },
      price: 1.63,
      highest: 0.33,
    }
  ]

  return {
    nfts
  }
}