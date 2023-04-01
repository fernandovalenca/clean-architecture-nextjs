import { CartGateway } from "@/core/domain/gateways";

export class ClearCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  async execute(): Promise<void> {
    try {
      const cart = await this.cartGateway.get();
      cart.clear();
      await this.cartGateway.save(cart);
    } catch {
      throw new Error("Could not execute clear cart");
    }
  }
}
