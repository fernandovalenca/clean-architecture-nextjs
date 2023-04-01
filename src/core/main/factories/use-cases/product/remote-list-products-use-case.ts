import { ListProductsUseCase } from "@/core/application/use-cases/product/list-products-use-case";
import { remoteProductGateway } from "@/core/main/factories/gateways/remote-product-gateway";

export const remoteListProductsUseCase = new ListProductsUseCase(
  remoteProductGateway
);
