import { FindProductByIdUseCase } from "@/core/application/use-cases/product/find-product-by-id-use-case";
import { remoteProductGateway } from "../../gateways/remote-product-gateway";

export const remoteFindProductByIdUseCase = new FindProductByIdUseCase(
  remoteProductGateway
);
