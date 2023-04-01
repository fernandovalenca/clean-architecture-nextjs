import { Order } from "@/core/domain/entities";
import { OrderGateway } from "@/core/domain/gateways";

export class CreateOrderUseCase {
  constructor(private orderGateway: OrderGateway) {}

  async execute(order: Order): Promise<Order> {
    try {
      return await this.orderGateway.insert(order);
    } catch {
      throw new Error("Could not execute order");
    }
  }
}
