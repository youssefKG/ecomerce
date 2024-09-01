import { Request, Response, NextFunction } from "express";
import { injectable, inject, container } from "tsyringe";
import { ProductRepository } from "../../../services";
import { IPayementMethod } from "../../../services/stripePayment";
import { productSchema } from "../../../validators";
import { CustomError } from "../../../utils/errorHandler.ts";
import { CreateProductInput } from "../../../types";
import { error } from "console";

interface ProductControllerI {
  createProduct: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  deleteProduct: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  addToCategory: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class ProductController implements ProductControllerI {
  constructor(
    @inject(ProductRepository) private productRepository: ProductRepository,
    @inject("IPayementMethod") private payementMethod: IPayementMethod,
  ) {}

  public async createProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const productInput: CreateProductInput = req.body;

      const productValidationErrors =
        productSchema.validate(productInput).error;

      // throw error if there is error in product data schema
      if (productValidationErrors)
        throw new CustomError(
          "validation errors",
          403,
          productValidationErrors,
        );

      // create product in my payement service (stripe)
      const productId: string = "";
  
      // create price in my payement Service (stripe)
      const priceId = await this.payementMethod.createPrice({
        product: productId,
        currency: "usd",
        unit_amount: productInput.price,
      });

      // create product product in my database (mongodb) with productId and priceId
      const newProduct = await this.productRepository.createProduct({
        ...productInput,
        productId,
        priceId,
      });

      res.status(200).json({
        sucess: true,
        message: "product is created succesfully",
        result: newProduct,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  public async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const productId: string = req.params.productId;

      // delete product form checkout service
      await this.payementMethod.deleteProduct(productId);

      // delete product from database
      await this.productRepository.deleteProduct(productId);

      res.status(200).json({
        success: true,
        result: null,
        message: "the product is deleted successfully!",
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  public async addToCategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {}
}
