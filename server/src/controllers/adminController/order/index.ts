import { Request, Response, NextFunction } from "express";
import { injectable, inject, container } from "tsyringe";
import { ProductRepository } from "../../../services";
import { privateDecrypt } from "crypto";
import { PromiseWithChild } from "child_process";

interface ProductControllerI {
  createProduct: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  // deleteProduct: (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) => Promise<void>;
  //
  // addToCategory: (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) => Promise<void>;
}

@injectable()
class ProductControler implements ProductControllerI {
  constructor(
    @inject(ProductRepository) private productRepository: ProductRepository,
  ) {}

  public async createProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
    } catch (err) {
      next(err);
    }
  }
}
