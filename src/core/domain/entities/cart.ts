import { Observable } from "./observable";
import { Product } from "./product";

export type CartProps = {
  products: Array<Product>;
};

export class Cart extends Observable {
  listProducts: Array<Product> = [];

  constructor(props: CartProps) {
    super();
    this.listProducts = props.products;
  }

  add(product: Product): void {
    this.listProducts.push(product);
    this.notify("add-product", product);
  }

  remove(id: number): void {
    this.listProducts.filter((product) => product.id !== id);
    this.notify<number>("remove-product", id);
  }

  clear(): void {
    this.listProducts = [];
    this.notify<Array<Product>>("clear", this.listProducts);
  }

  get total(): number {
    if (!this.listProducts) {
      return 0;
    }
    return this.listProducts.reduce((acc, product) => acc + product.price, 0);
  }

  get products(): Array<Product> {
    this.notify("products", this.listProducts);
    return this.listProducts;
  }
}
