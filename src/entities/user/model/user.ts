import type { Nft } from "~/shared/model/typesCreator";

export interface Avatar {
  name: string
  alt: string
  file: any
}

export interface Collection {
  id: number
  name: string
  nfts: Nft[]
}

export interface User {
  about?: string
  avatar?: Avatar
  id?: number
  name?: string
  email?: string
  createdNfts?: Nft[]
  followers?: number[]
  following?: number[]
  nftCollection?: Collection[]
  nftSold?: number
  nftWallet?: string
  owndedNfts?: Nft[]
  password?: string,
  socialLinks?: string[]
  totalNft?: number,
  totalSales?: number
}