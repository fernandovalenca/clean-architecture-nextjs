import { Product } from "@/core/domain/entities/product";
import { ProductGateway } from "@/core/domain/gateways/product-gateway";
import { HttpClient } from "@/core/application/protocols/http";

export class RemoteProductGateway implements ProductGateway {
  constructor(private httpClient: HttpClient) {}

  async findAll(): Promise<Product[]> {
    try {
      const { data } = await this.httpClient.request<Array<Product>>({
        url: "/products",
        method: "GET",
      });

      return data || [];
    } catch (error) {
      throw new Error("Unexpected error while fetch products");
    }
  }

  async findById(id: number): Promise<Product> {
    try {
      const { data } = await this.httpClient.request<Product>({
        url: `/products/${id}`,
        method: "GET",
      });

      return data as Product;
    } catch (error) {
      throw new Error("Unexpected error while fetch a product");
    }
  }
}
