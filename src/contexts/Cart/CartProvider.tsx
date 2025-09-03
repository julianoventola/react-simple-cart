import { useState } from "react";
import type { CartProps, CartProviderProps } from "../../types/Cart";
import { CartContext } from "./CartContext";
import type { ProductProp } from "../../types/Product";

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  function addItemCart(product: ProductProp) {
    const indexItem = cart.findIndex(item => item.id == product.id)
    if (indexItem !== -1) {
      const cartList = cart;
      cartList[indexItem].amount++
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
      setCart(cartList)
      return
    }

    const data = {
      ...product,
      amount: 1,
      total: product.price
    }

    setCart(products => [...products, data])
  }
  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider