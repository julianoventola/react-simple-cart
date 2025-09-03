
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";

import { api } from "../../services/api";

import { CartContext } from "../../contexts/Cart/CartContext";
import type { ProductProp } from "../../types/Product";
import ProductDetailsComponent from "../../components/product/details";
import toast from "react-hot-toast";


function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductProp>()
  const { addItemCart } = useContext(CartContext)

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`)
      setProduct(response.data);
    }

    getProduct()
  }, [id])

  function handleAddCartItem(product: ProductProp) {
    addItemCart(product)
    toast.success('Produto adicionado no carrinho!', {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff"
      }
    })
  }
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <ProductDetailsComponent key={product?.id} product={product} handleAddCartItem={handleAddCartItem} />
    </main>
  );
}

export default Details;