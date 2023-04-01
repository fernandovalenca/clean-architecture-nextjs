import { Order, OrderProps } from "@/core/domain/entities";
import { axiosHttpClient } from "@/core/main/factories/protocols/http";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type checkoutSuccessPageProps = {
  order: OrderProps;
};

const CheckoutSuccessPage: NextPage<checkoutSuccessPageProps> = ({ order }) => {
  const [state] = useState<Order>(new Order(order));

  return (
    <main>
      <h3 className={inter.className}>Compara finalizada com sucesso</h3>
      <span>
        ID da compra: {state.props.id} | valor total: ${state.total}
      </span>
      <ul>
        {state.props.products.map((product, index) => (
          <li key={index}>
            {product.name} | {product.price}
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>Início</button>
      </Link>
    </main>
  );
};

export default CheckoutSuccessPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};

  const { data } = await axiosHttpClient.request({
    method: "GET",
    url: `/orders/${id}`,
  });

  return {
    props: {
      order: data,
    },
  };
};
