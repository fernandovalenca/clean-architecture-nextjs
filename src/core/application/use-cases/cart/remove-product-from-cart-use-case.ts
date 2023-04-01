import { CartGateway } from "@/core/domain/gateways";

export class RemoveProductFromCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  async execute(id: number): Promise<void> {
    try {
      const cart = await this.cartGateway.get();
      cart.remove(id);
      await this.cartGateway.save(cart);
    } catch {
      throw new Error("Could not remove product from cart");
    }
  }
}
