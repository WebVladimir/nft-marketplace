export interface Nft {
  id?: number,
  name?: string,
  image?: {
    name?: string,
    alt?: string,
  }
  forSale?: boolean,
  price?: number,
  highestBid?: number,
}

export interface Avatar {
  name?: string,
  alt?: string,
}

export interface Collection {
  id?: number,
  name?: string
  nfts?: Nft[],
}

export interface Action {
  sale?: number,
  minutes?: number
  nft?: Nft
}

export interface Creator {
  id?: string,
  name?: string,
  avatar?: Avatar,
  totalSales?: number,
  highestBid?: number,
  collections?: Collection[],
  actions?: Action[],
  nfts?: Nft[],
}