import { Cart } from "@/core/domain/entities/cart";
import { CartGateway } from "@/core/domain/gateways";

export class GetCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  async execute(): Promise<Cart> {
    try {
      return await this.cartGateway.get();
    } catch {
      throw new Error("Could not get cart");
    }
  }
}
