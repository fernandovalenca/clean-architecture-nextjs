import { useCartContext } from "@/hooks/use-cart";
import { NextPage } from "next";
import Link from "next/link";

export const Header: NextPage = () => {
  const { state } = useCartContext();

  return (
    <nav>
      Cart - Total ${state.cart.total} | Items {state.cart.products.length}{" "}
      <Link href="/checkout">
        <button>Checkout</button>
      </Link>
    </nav>
  );
};
