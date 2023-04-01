import { Product } from "@/core/domain/entities/product";
import { ProductGateway } from "@/core/domain/gateways/product-gateway";

export class ListProductsUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(): Promise<Array<Product>> {
    try {
      return await this.productGateway.findAll();
    } catch {
      throw new Error("Unexpected error when trying to find all products");
    }
  }
}
