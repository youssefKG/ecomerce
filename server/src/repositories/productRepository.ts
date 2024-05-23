import { PrismaClient } from "@prisma/client";
import { ProductType } from "../types";

interface IProductRepository {
  findProductById: (id: string, fields: any) => Promise<ProductType | null>;

  addProductToCart: (
    productId: string,
    quantite: number,
  ) => Promise<ProductType | null>;
}

class ProductRepository implements IProductRepository {
  private prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async findProductById(prodcutId: string): Promise<ProductType | null> {
    try {
      // get product data {title , description, imgURLs ...}
      const product: ProductType | null = await this.prisma.product.findUnique({
        where: { id: prodcutId },
      });

      return product;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async addProductToCart(
    productId: string,
    quantite: number,
  ): Promise<ProductType | null> {
    try {
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async getProductReviews(productId: string) {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}

export default ProductRepository;
export { IProductRepository };
