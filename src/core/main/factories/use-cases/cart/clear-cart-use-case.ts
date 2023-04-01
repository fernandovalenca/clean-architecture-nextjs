import { ClearCartUseCase } from "@/core/application/use-cases/cart/clear-cart-use-case";
import { storageCartGateway } from "../../gateways";

export const clearCartUseCase = new ClearCartUseCase(storageCartGateway);
