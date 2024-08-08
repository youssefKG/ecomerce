import Stripe from "stripe";
import { container } from "tsyringe";
import { CustomError } from "../../utils/errorHandler.ts";
import { LineItem } from "../../types/product.type.js";

type CreateProductInput = {
  id: string;
  name: string;
  images: string[];
  description: string;
};

type CreatePriceInput = {
  product: string;
  unit_amount: number;
  currency: "usd";
};

interface IPayementMethod {
  createSession: (line_items: LineItem[]) => Promise<string>;

  createProduct: (productData: CreateProductInput) => Promise<string>;

  createPrice: (priceData: CreatePriceInput) => Promise<string>;

  deleteProduct: (productId: string) => Promise<void>;
}

class StripeSevice implements IPayementMethod {
  private stripe;

  constructor() {
    this.stripe = new Stripe("hqjdslkqsdlksqfqsfhk");
  }

  public async createProduct(productdata: CreateProductInput): Promise<string> {
    try {
      const product = await this.stripe.products.create(productdata);
      return product.id;
    } catch (err) {
      console.log(err);
      throw new CustomError("payement service error", 402, err);
    }
  }

  public async createPrice(
    priceData: Stripe.PriceCreateParams,
  ): Promise<string> {
    try {
      const price = await this.stripe.prices.create(priceData);
      return price.id;
    } catch (err) {
      throw new CustomError("stripe price error", 402, err);
    }
  }

  public async createSession(line_items: LineItem[]): Promise<string> {
    try {
      const session = await this.stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${process.env.DOMAIN}/orders`,
        cancel_url: `${process.env.DOMAIN}/home`,
      });

      return session.url as string;
    } catch (err) {
      throw err;
    }
  }

  public async deleteProduct(productId: string): Promise<void> {
    try {
      await this.stripe.products.del(productId);
    } catch (err) {
      throw new CustomError("stripe: error in deleting product", 500, err);
    }
  }
}

container.register("IPaymentMethod", StripeSevice);
export type { IPayementMethod };
