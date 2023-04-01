import { NextPage } from "next";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FormEvent } from "react";
import { useCartContext } from "@/hooks/use-cart";
import { useRouter } from "next/router";
import { createOrderUseCase } from "@/core/main/factories/use-cases/order/create-order-use-case";
import { Order } from "@/core/domain/entities";

const inter = Inter({ subsets: ["latin"] });

const Checkout: NextPage = () => {
  const { state } = useCartContext();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credit_card_number = event.currentTarget.credit_card_number.value;

    try {
      const order = new Order({
        products: state.cart.products,
        credit_card_number,
      });

      const orderCreated = await createOrderUseCase.execute(order);

      state.cart.clear();
      router.push(`/checkout/${orderCreated.props.id}/success`);
    } catch {
      throw new Error("Failed to checkout");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Meu carrinho</h1>
      <ul>
        {state.cart.products.map((product, index) => (
          <li key={index}>
            Nome: {product.name} | preço: ${product.price}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}>
        <label htmlFor="">
          Cartão de crédito
          <input
            type="text"
            name="credit_card_number"
            id="credit_card_number"
          />
        </label>

        <div>
          <button type="submit">Finalizar</button>
        </div>
      </form>
    </main>
  );
};

export default Checkout;
