import { useContext } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../../contexts/Cart/CartContext";

function Cart() {
  const { cart, cartTotal, removeItemCart, addItemCart } = useContext(CartContext)

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <section className="text-center">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Seu carrinho</h1>

        {cart.length === 0 && (
          <p className="text-2xl mt-30">
            Parece que você não adicionou nada ainda 😣
          </p>
        )}

        <ul className="flex flex-col">

          {cart.map((cartItem) => (
            <li className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center border-b-2 border-gray-300 pb-4">
              <img
                className="w-full h-32 object-contain"
                src={cartItem.cover}
                alt="Imagem produto"
              />
              <p className="font-medium my-2">{cartItem.title}</p>
              <p className="font-bold text-zinc-700/90">{cartItem.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</p>

              <div className="flex justify-center gap-3 items-center">
                <button
                  onClick={() => { removeItemCart(cartItem) }}
                  className="bg-slate-600 rounded text-white font-medium p-2 flex items-center justify-center">
                  {cartItem.amount == 1 ? (<FaTrash size={16} />) : <FaMinus size={16}/>}
                </button>
                <p>{cartItem.amount}</p>
                <button
                  onClick={() => { addItemCart(cartItem) }}
                  className="bg-slate-600 rounded text-white font-medium p-2 flex items-center justify-center"><FaPlus size={16} /></button>
              </div>

              <p className="font-bold">SubTotal: {cartItem.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</p>
            </li>
          ))}

        </ul>

        <p className="font-bold text-2xl mt-4">Total: {cartTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}</p>
      </section>
    </main>
  );
}

export default Cart;