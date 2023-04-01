import { AddProductIntoCartUseCase } from "@/core/application/use-cases/cart";
import { storageCartGateway } from "../../gateways";

export const addProductIntoCartUseCase = new AddProductIntoCartUseCase(
  storageCartGateway
);
