import { BsCartPlus } from "react-icons/bs";
import type { ProductProp } from "../../types/Product";

function Product({ product }: { product: ProductProp }) {
  return (
    <li className="w-full" id={String(product.id)}>
      <img
        className="w-full rounded-lg max-h-70 mb-2"
        src={product.cover}
        alt="Imagem produto"
      />
      <p className="font-medium my-2">{product.title}</p>
      <div className="flex items-center gap-3">
        <p className="font-bold text-zinc-700/90">{product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}</p>
        <button className="bg-zinc-900 p-2 rounded">
          <BsCartPlus size={20} color="#fff" />
        </button>
      </div>
    </li>
  );
}

export default Product;