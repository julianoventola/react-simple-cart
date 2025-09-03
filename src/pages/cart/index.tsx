function Cart() {
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <section>
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Seu carrinho</h1>

        <ul className="flex flex-col">
          <li className="flex items-center justify-between border-b-2 border-gray-300">
            <img
              className="w-28"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem produto"
            />
            <p className="font-medium my-2">Smartwatch 8.5</p>
            <p className="font-bold text-zinc-700/90">R$ 1299,99</p>

            <div className="flex gap-3 items-center">
              <button className="bg-slate-600 rounded text-white font-medium px-2 flex items-center justify-center">-</button>
              <p>2</p>
              <button className="bg-slate-600 rounded text-white font-medium px-2 flex items-center justify-center">+</button>
            </div>

            <p className="font-bold">SubTotal: R${1299.99*2}</p>
          </li>
        </ul>

        <p className="font-bold mt-4">Total: R${1299.99*2}</p>
      </section>
    </main>
  );
}

export default Cart;