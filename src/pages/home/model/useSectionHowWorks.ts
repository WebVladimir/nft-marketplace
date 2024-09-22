export const useSectionHowWorks = () => {
  interface Card {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    }
  }

  const cards: Card[] = [
    {
      title: 'Setup Your wallet',
      description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
      image: {
        src: 'how-works-1',
        alt: 'how-works'
      }
    },
    {
      title: 'Create Collection',
      description: 'Upload your work and setup your collection. Add a description, social links and floor price.',
      image: {
        src: 'how-works-2',
        alt: 'how-works'
      }
    },
    {
      title: 'Start Earning',
      description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
      image: {
        src: 'how-works-3',
        alt: 'how-works'
      }
    },
  ]

  return {
    cards
  }
}