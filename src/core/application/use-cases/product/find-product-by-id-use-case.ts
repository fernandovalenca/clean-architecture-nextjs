import { Product } from "@/core/domain/entities/product";
import { ProductGateway } from "@/core/domain/gateways/product-gateway";

export class FindProductByIdUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(id: number): Promise<Product> {
    try {
      return await this.productGateway.findById(id);
    } catch {
      throw new Error("Product not found");
    }
  }
}
