import { RemoteOrderGateway } from "@/core/application/gateways";
import { axiosHttpClient } from "../protocols/http";

export const remoteOrderGateway = new RemoteOrderGateway(axiosHttpClient);
