import { Order } from "../entities";

export interface OrderGateway {
  insert(order: Order): Promise<Order>;
  findById(id: number): Promise<Order>;
}
