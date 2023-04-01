import { Product } from "@/core/domain/entities/product";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { useCartContext } from "@/hooks/use-cart";
import { remoteFindProductByIdUseCase } from "@/core/main/factories/use-cases/product";

const inter = Inter({ subsets: ["latin"] });

type ProductDetailPageProps = {
  product: Product;
};

const ONE_HOUR_IN_SECONDS = 3600;

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  const { state } = useCartContext();

  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Nome: {product.name}</h1>
      <p>
        Descrição: {product.description} | preço: {product.price} |{" "}
        <button onClick={() => state.cart.add(product)}>
          Adicionar ao carrinho
        </button>
      </p>
    </main>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const product = await remoteFindProductByIdUseCase.execute(+id!);

  return {
    props: {
      product,
    },
    revalidate: ONE_HOUR_IN_SECONDS,
  };
};
