import { useState } from "react";
import type { CartProps, CartProviderProps } from "../../types/Cart";
import { CartContext } from "./CartContext";
import type { ProductProp } from "../../types/Product";

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState(0)

  function addItemCart(product: ProductProp) {
    const indexItem = cart.findIndex(item => item.id == product.id)
    if (indexItem !== -1) {
      const cartList = cart;
      cartList[indexItem].amount++
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
      setCart(cartList)
      calculateTotalAmout(cartList)
      return
    }

    const data = {
      ...product,
      amount: 1,
      total: product.price
    }

    setCart(products => [...products, data])
    calculateTotalAmout([...cart, data])
  }

  function removeItemCart(product: ProductProp) {
    const indexItem = cart.findIndex(item => item.id == product.id)

    if (cart[indexItem].amount > 1) {
      const cartList = cart;
      cartList[indexItem].amount--
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
      setCart(cartList)
      calculateTotalAmout(cartList)
      return
    }

    const notRemovedItens = cart.filter(item => item.id !== product.id)
    setCart(notRemovedItens)
    calculateTotalAmout(notRemovedItens)
  }

  function calculateTotalAmout(itens: CartProps[]) {
    const myCart = itens
    const result = myCart.reduce((prev, current) => {
      return prev + current.total
    }, 0)
    setTotal(result)
  }
  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, cartTotal: total, removeItemCart, addItemCart }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider