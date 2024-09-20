export const useTrendingSection = () => {
  interface Creator {
    title: string;
    name: string;
    avatar: string;
  }

  interface Nft {
    name: string;
  }

  interface TrendingItem {
    creator: Creator;
    nfts: Nft[];
  }

  const trendings: TrendingItem[]  = [
    {
      creator: {
        title: 'DSGN Animals',
        name: 'MrFox',
        avatar: 'avatar-10'
      },
      nfts: [
        {name: 'trending-1'},
        {name: 'trending-1'},
        {name: 'trending-2'},
        {name: 'trending-2'}
      ]
    },
    {
      creator: {
        title: 'Magic Mushrooms',
        name: 'Shroomie',
        avatar: 'avatar-15'
      },
      nfts: [
        {name: 'trending-2'},
        {name: 'trending-2'},
        {name: 'trending-2'},
        {name: 'trending-2'}
      ]
    },
    {
      creator: {
        title: 'Disco Machines',
        name: 'BeKind2Robots',
        avatar: 'avatar-6'
      },
      nfts: [
        {name: 'trending-3'},
        {name: 'trending-3'},
        {name: 'trending-3'},
        {name: 'trending-3'}
      ]
    },
  ]


  return {
    trendings
  }
}