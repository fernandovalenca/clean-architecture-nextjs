import { Product } from "./product";

export interface OrderProps {
  id?: number;
  products: Array<Product>;
  credit_card_number: string;
}

export class Order {
  constructor(public props: OrderProps) {}

  get total(): number {
    if (!this.props.products) {
      return 0;
    }
    return this.props.products.reduce((acc, product) => acc + product.price, 0);
  }
}
