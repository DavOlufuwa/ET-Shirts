import CartContext, { useCartContextType } from "@/contexts/CartProvider";
import { useContext } from "react";

const useCart = (): useCartContextType => {
  return useContext(CartContext);
}

export default useCart;