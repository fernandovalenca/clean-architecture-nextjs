import { CartContext } from "@/context/cart-provider";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("You have to use CartContext in your App");

  return context;
};
