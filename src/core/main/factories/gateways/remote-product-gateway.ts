import { RemoteProductGateway } from "@/core/application/gateways";
import { axiosHttpClient } from "@/core/main/factories/protocols/http";

export const remoteProductGateway = new RemoteProductGateway(axiosHttpClient);
