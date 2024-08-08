import { delay, inject, injectable } from "tsyringe";
import {
  ProductDetailType,
  ProductType,
  ProductFields,
  ProductFieldsConfig,
  CreateProductInput,
} from "../../types";
import { Database } from "../../services";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { CustomError } from "../../utils/errorHandler.ts";

interface IProductRepository {
  productDetail: (productId: string) => Promise<ProductDetailType | null>;

  similarProducts: (category: string) => Promise<ProductType[] | null>;

  featuredProducts: () => Promise<ProductType[] | null>;

  bestSellingProducts: () => Promise<ProductType[] | CustomError>;

  getProductById: (
    id: string,
    fields: ProductFields,
  ) => Promise<ProductFieldsConfig | null>;

  updateProduct: (
    productId: string,
    stock: number,
  ) => Promise<ProductDetailType | undefined>;

  createProduct: (products: CreateProductInput) => Promise<ProductDetailType>;

  deleteProduct: (productId: string) => Promise<void>;
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
        await this.prisma.product.findUnique({ where: { id }, select: fields });

      return product;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // feautred products
  public async featuredProducts(): Promise<ProductType[] | null> {
    return await this.prisma.product.findMany({
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
  }

  public async productDetail(
    productId: string,
  ): Promise<ProductDetailType | null> {
    try {
      const productDetailData: ProductDetailType | null =
        await this.prisma.product.findUnique({
          where: { id: productId },
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

  public async bestSellingProducts(): Promise<ProductType[] | CustomError> {
    try {
      // check if the product is already in cart
      const bestSellingProductsData: ProductType[] | null =
        await this.prisma.product.findMany({
          orderBy: [],
          take: 14,
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
      if (err instanceof PrismaClientValidationError) {
        throw new CustomError(err.message, 400, err);
      }
      throw new CustomError("database error ", 400, null);
    }
  }

  public async updateProduct(
    productId: string,
    stock: number,
  ): Promise<ProductDetailType> {
    const updatedProduct: ProductDetailType | null =
      await this.prisma.product.update({
        where: { id: productId },
        data: { stock },
      });
    return updatedProduct;
  }

  public async createProduct(product: any): Promise<ProductDetailType> {
    try {
      const newProduct = await this.prisma.product.create({ data: product });

      return newProduct;
    } catch (err) {
      if (err instanceof PrismaClientValidationError)
        throw new CustomError(err.message, 400, err);
      else throw new CustomError("unexpected error", 500, null);
    }
  }

  public async deleteProduct(productId: string): Promise<void> {
    try {
      await this.prisma.product.delete({ where: { id: productId } });
    } catch (err) {
      console.log(err);
      throw new CustomError("delete product error", 500, err);
    }
  }
}

export default ProductRepository;
export { IProductRepository };
