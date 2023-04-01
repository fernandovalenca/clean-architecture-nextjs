export type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export class Product {
  constructor(public props: ProductProps) {}

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }
}
