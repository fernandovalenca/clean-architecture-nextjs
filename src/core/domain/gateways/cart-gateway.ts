import { Cart } from "../entities/cart";

export interface CartGateway {
  get(): Promise<Cart>;
  save(cart: Cart): Promise<void>;
}
