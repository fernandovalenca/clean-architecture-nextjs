import { Cart } from "@/core/domain/entities/cart";
import { Observer } from "@/core/domain/entities/observer";
import { Product } from "@/core/domain/entities/product";
import {
  addProductIntoCartUseCase,
  getCartUseCase,
} from "@/core/main/factories/use-cases/cart";
import { clearCartUseCase } from "@/core/main/factories/use-cases/cart/clear-cart-use-case";
import { removeProductFromCartUseCase } from "@/core/main/factories/use-cases/cart/remove-product-from-cart-use-case";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type StatePropsType = {
  cart: Cart;
};

type CartContextData = {
  state: {
    cart: Cart;
  };
};

const INITIAL_STATE: CartContextData = {
  state: {
    cart: new Cart({ products: [] }),
  },
};

export const CartContext = createContext(INITIAL_STATE);

const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, setContext] = useState<StatePropsType>(INITIAL_STATE.state);

  const registerObservers = async () => {
    const cart = await getCartUseCase.execute();

    cart.register(
      new Observer("add-product", async (product: Product) => {
        await addProductIntoCartUseCase.execute(product);

        setContext((prevState) => ({
          ...prevState,
          cart: cart,
        }));
      })
    );

    cart.register(
      new Observer("remove-product", async (id: number) => {
        await removeProductFromCartUseCase.execute(id);

        setContext((prevState) => ({
          ...prevState,
          cart: cart,
        }));
      })
    );

    cart.register(
      new Observer("clear", async () => {
        await clearCartUseCase.execute();

        setContext((prevState) => ({
          ...prevState,
          cart: cart,
        }));
      })
    );

    setContext({ cart });
  };

  useEffect(() => {
    registerObservers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Provider value={{ state }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
