import { StorageCartGateway } from "@/core/application/gateways/storage-cart-gateway";
import { storage } from "../storage";

export const storageCartGateway = new StorageCartGateway(storage);
