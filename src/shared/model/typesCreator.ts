export interface Nft {
  id?: number,
  name?: string,
  image?: {
    name: string,
    alt: string,
  }
  forSale?: boolean,
  price?: number,
  highestBid?: number,
}

export interface SaleNft {
  creatorInfo: CreatorInfo;
  actions: Action[];
}

export interface CreatorInfo {
  name?: string;
  avatar?: Avatar;
}


export interface Avatar {
  name?: string,
  alt?: string,
}

export interface Collection {
  id?: number,
  name?: string
  nfts: Nft[],
}

export interface Action {
  sale?: number,
  minutes?: number
  nft?: Nft
}

export interface SaleNftSection {
  minutes?: number
  nft?: Nft
  sale?: number
}

export interface Creator {
  id?: number,
  name?: string,
  avatar?: Avatar,
  totalSales: number,
  highestBid?: number,
  collections?: Collection[],
  actions?: Action[],
  nfts?: Nft[],
}