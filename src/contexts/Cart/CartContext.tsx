import { createContext, } from "react";
import type { CartContextData } from "../../types/Cart";

export const CartContext = createContext({} as CartContextData)
