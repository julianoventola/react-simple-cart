import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

import { CartContext } from "../../contexts/Cart/CartContext";

function Header() {
  const { cartAmount } = useContext(CartContext)

  return (
    <header className="w-full px-1 bg-slate-200 flex">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 m-auto">
        <Link className="font-bold text-2xl" to="/">Shopping</Link>


        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} color="#121212" />
          {cartAmount > 0 &&
            (
              <span className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full
          w-6 h-6 flex justify-center items-center
          text-xs text-white
          ">
                {cartAmount}
              </span>
            )
          }
        </Link>
      </nav>
    </header>
  );
}

export default Header;