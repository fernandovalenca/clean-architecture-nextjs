import { Product } from "@/core/domain/entities/product";

export interface ProductGateway {
  findAll(): Promise<Array<Product>>;
  findById(id: number): Promise<Product>;
}
