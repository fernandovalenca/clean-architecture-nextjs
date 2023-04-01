import { RemoveProductFromCartUseCase } from "@/core/application/use-cases/cart";
import { storageCartGateway } from "../../gateways";

export const removeProductFromCartUseCase = new RemoveProductFromCartUseCase(
  storageCartGateway
);
