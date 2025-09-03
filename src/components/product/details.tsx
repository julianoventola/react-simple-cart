import { BsCartPlus } from "react-icons/bs";
import type { ProductProp } from "../../types/Product";

function ProductDetails({ product, handleAddCartItem }:
  { product: ProductProp | undefined, handleAddCartItem: (product: ProductProp) => void }
) {

  if (!product) {
    return (
      <div> No Data</div>
    )
  }


  return (
    <section className="w-full" id={String(product.id)}>
      <div className="flex mt-16 justify-center flex-wrap md:flex-nowrap">
        <img
          className="w-160 rounded-lg max-h-80 mb-2 object-contain"
          src={product.cover}
          alt="Imagem produto"
        />
        <div className="max-w-160 flex flex-col gap-4">
          <p className="text-4xl font-medium my-2">{product.title}</p>
          <p className="text-2xl my-2">{product.description}</p>
          <div className="flex items-center gap-3 self-end">
            <p className="text-2xl font-bold text-zinc-700/90">Preço: {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</p>
            <button onClick={() => { handleAddCartItem(product) }} className="bg-zinc-900 py-2 px-6 rounded">
              <BsCartPlus size={20} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;