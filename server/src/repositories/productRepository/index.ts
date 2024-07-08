import { delay, inject, injectable } from "tsyringe";
import {
  ProductDetailType,
  ProductType,
  ProductFields,
  ProductFieldsConfig,
  ProductDataType,
} from "../../types";
import { Database } from "../../services";

interface IProductRepository {
  productDetail: (productId: string) => Promise<ProductDataType | null>;
  similarProducts: (category: string) => Promise<ProductType[] | null>;
  featuredProducts: () => Promise<ProductType[] | null>;
  bestSellingProducts: () => Promise<ProductType[] | null>;
  getProductById: (
    id: string,
    fields: ProductFields,
  ) => Promise<ProductFieldsConfig | null>;
  updateProduct: (
    productId: string,
    stock: number,
  ) => Promise<ProductDetailType | null>;
}

@injectable()
class ProductRepository implements IProductRepository {
  constructor(@inject(delay(() => Database)) private prisma: Database) {}

  public async getProductById(
    id: string,
    fields: ProductFields,
  ): Promise<ProductFieldsConfig | null> {
    try {
      const product: ProductFieldsConfig | null =
        await this.prisma.product.findUnique({
          where: { id },
          select: fields,
        });

      return product;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // feautred products
  public async featuredProducts(): Promise<ProductType[] | null> {
    try {
      const featuredProductsData: ProductType[] | null =
        await this.prisma.product.findMany({
          orderBy: [{ created_at: "asc" }],
          select: {
            id: true,
            name: true,
            imgURLS: true,
            price: true,
            discount: true,
            rate: true,
            stock: true,
          },
        });

      return featuredProductsData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async productDetail(
    productId: string,
  ): Promise<ProductDataType | null> {
    try {
      const productDetailData: ProductDataType | null =
        await this.prisma.product.findUnique({
          where: { id: productId },
          select: {
            id: true,
            name: true,
            description: true,
            imgURLS: true,
            price: true,
            rate: true,
            stock: true,
            discount: true,
          },
        });

      return productDetailData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async similarProducts(
    categoryId: string,
  ): Promise<ProductType[] | null> {
    try {
      const similarProductsData: ProductType[] | null =
        await this.prisma.product.findMany({
          where: { categoryId },
          take: 9,
          skip: 0,
          select: {
            id: true,
            name: true,
            price: true,
            discount: true,
            rate: true,
            imgURLS: true,
            stock: true,
          },
        });

      return similarProductsData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async bestSellingProducts(): Promise<ProductType[] | null> {
    try {
      // check if the product is already in cart
      const bestSellingProductsData: ProductType[] | null =
        await this.prisma.product.findMany({
          orderBy: [],
          take: 9,
          skip: 0,
          select: {
            id: true,
            name: true,
            price: true,
            discount: true,
            stock: true,
            rate: true,
            imgURLS: true,
          },
        });

      return bestSellingProductsData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async updateProduct(
    productId: string,
    stock: number,
  ): Promise<ProductDetailType | null> {
    const updatedProduct: ProductDetailType | null =
      await this.prisma.product.update({
        where: { id: productId },
        data: { stock },
      });
    return updatedProduct;
  }
}

export default ProductRepository;
export { IProductRepository };
