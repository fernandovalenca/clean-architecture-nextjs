import { CreateOrderUseCase } from "@/core/application/use-cases/order/create-order-use-case";
import { remoteOrderGateway } from "../../gateways";

export const createOrderUseCase = new CreateOrderUseCase(remoteOrderGateway);
