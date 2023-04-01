import { Cart } from "@/core/domain/entities/cart";
import { Product } from "@/core/domain/entities/product";
import { CartGateway } from "@/core/domain/gateways";

export class AddProductIntoCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  async execute(product: Product): Promise<Cart> {
    try {
      const cart = await this.cartGateway.get();
      cart.add(product);
      await this.cartGateway.save(cart);
      return cart;
    } catch {
      throw new Error("Could not add product in cart");
    }
  }
}
