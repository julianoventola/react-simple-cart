import { BsCartPlus } from "react-icons/bs";

function Home() {
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <section>
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <li className="w-full">
            <img
            className="w-full rounded-lg max-h-70 mb-2"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem produto"
            />
            <p className="font-medium my-2">Smartwatch 8.5</p>
            <div className="flex items-center gap-3">
              <p className="font-bold text-zinc-700/90">R$ 1299,99</p>
              <button className="bg-zinc-900 p-2 rounded">
                <BsCartPlus size={20} color="#fff"/>
              </button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;