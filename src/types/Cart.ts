import type { ReactNode } from "react"
import type { ProductProp } from "./Product"

export interface CartContextData {
  cart: CartProps[],
  cartAmount: number,
  addItemCart: (product: ProductProp) => void,
  removeItemCart: (product: ProductProp) => void,
  cartTotal: number,
}

export interface CartProps {
  id: number,
  title: string,
  description: string,
  price: number,
  cover: string,
  amount: number,
  total: number
}

export interface CartProviderProps {
  children: ReactNode
}