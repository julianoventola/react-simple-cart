import type { ReactNode } from "react"

export interface CartContextData {
  cart: CartProps[],
  cartAmount: number,
}

export interface CartProps {
  id: number,
  title: string,
  description: string,
  price: number,
  cover: string,
  amount:number,
  total:number
}

export interface CartProviderProps {
  children: ReactNode
}