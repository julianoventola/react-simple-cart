import { createBrowserRouter } from "react-router";

import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import Details from "./pages/details";

import LayoutBase from "./components/layout";

const router = createBrowserRouter([{
  element: <LayoutBase />,
  children: [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/product/:id",
      element: <Details />
    },
    {
      path: "/cart",
      element: <CartPage />
    }
  ]
}])

export { router }