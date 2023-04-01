import { CartGateway } from "@/core/domain/gateways/cart-gateway";
import { Storage } from "@/core/application/storage";
import { Cart } from "@/core/domain/entities/cart";

export class StorageCartGateway implements CartGateway {
  private readonly KEY_CART_STORAGE = "next-clean-arch/cart";

  constructor(private storage: Storage) {}
  async get(): Promise<Cart> {
    try {
      const { listProducts } = await this.storage.get<Cart>(
        this.KEY_CART_STORAGE
      );

      if (!listProducts) {
        return new Cart({ products: [] });
      }

      return new Cart({ products: listProducts });
    } catch {
      throw Error("Could not get cart from storage");
    }
  }

  async save(cart: Cart): Promise<void> {
    try {
      await this.storage.set(this.KEY_CART_STORAGE, cart);
    } catch {
      throw new Error("Could not save cart");
    }
  }
}
