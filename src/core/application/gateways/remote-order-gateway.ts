import { Order } from "@/core/domain/entities";
import { OrderGateway } from "@/core/domain/gateways";
import { HttpClient } from "../protocols/http";

export class RemoteOrderGateway implements OrderGateway {
  constructor(private httpClient: HttpClient) {}

  async insert(order: Order): Promise<Order> {
    try {
      const { data } = await this.httpClient.request({
        method: "POST",
        url: "orders",
        body: {
          products: order.props.products,
          credit_card_number: order.props.credit_card_number,
        },
      });

      return new Order(data);
    } catch {
      throw new Error("Could not create order");
    }
  }

  async findById(id: number): Promise<Order> {
    throw new Error("Method not implemented.");
  }
}
