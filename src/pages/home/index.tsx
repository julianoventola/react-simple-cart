
import { useState, useEffect, useContext } from "react";

import { api } from "../../services/api";

import { CartContext } from "../../contexts/Cart/CartContext";

import ProductComponent from "../../components/product";
import type { ProductProp } from "../../types/Product";
import toast from "react-hot-toast";

function Home() {
  const [products, setProducts] = useState<ProductProp[]>([])
  const { addItemCart } = useContext(CartContext)

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products")
      setProducts(response.data);
    }

    getProducts()
  }, [])

  function handleAddCartItem(product: ProductProp) {
    addItemCart(product)
    toast.success('Produto adicionado no carrinho!',{
      style:{
        borderRadius:10,
        backgroundColor:"#121212",
        color: "#fff"
      }
    })
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <section>
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductComponent key={product.id} product={product} handleAddCartItem={handleAddCartItem} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;