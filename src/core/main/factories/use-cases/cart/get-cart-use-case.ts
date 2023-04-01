import { GetCartUseCase } from "@/core/application/use-cases/cart";
import { storageCartGateway } from "../../gateways";

export const getCartUseCase = new GetCartUseCase(storageCartGateway);
