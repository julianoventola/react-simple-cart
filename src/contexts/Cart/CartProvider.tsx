import { useState } from "react";
import type { CartProps, CartProviderProps } from "../../types/Cart";
import { CartContext } from "./CartContext";

function CartProvider({ children }: CartProviderProps) {

  const [cart, setCart] = useState<CartProps[]>([])
  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider