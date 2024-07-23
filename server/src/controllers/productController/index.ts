import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "tsyringe";
import { ReviewRepository, ProductRepository } from "../../services";
import {
  NewProductType,
  ProductDataType,
  ProductType,
  ReviewType,
} from "../../types";
import { CustomError } from "../../utils/errorHandler.ts";

interface IProduct {
  getProductDetail: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  getFeaturedProducts: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  getSimilartProducts: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  getBestSellingProducts: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  getProductReviews: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  createProducts: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class Product implements IProduct {
  constructor(
    @inject("ProductRepository") private productRepository: ProductRepository,
    @inject("ReviewRepository") private reviewRepository: ReviewRepository,
  ) {}

  // get product detail (id, name , description, stock ... ) method
  public async getProductDetail(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      // distruct product from request objet
      const productId: string = req.params.productId;

      // find the product detail
      const productDetail: ProductDataType | null =
        await this.productRepository.productDetail(productId);

      if (!productDetail) {
        next(new CustomError("not found ", 401, null));
        return;
      }

      res.status(200).json({
        success: true,
        message: "product detail ",
        result: productDetail,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // get simillar products method
  public async getFeaturedProducts(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const featuredProducts: ProductType[] | null =
        await this.productRepository.featuredProducts();

      if (!featuredProducts) {
        next(new CustomError("not founds", 402, null));
        return;
      }

      res.status(200).json({
        success: true,
        result: featuredProducts,
        message: "featured products",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // get best selling product method
  public async getBestSellingProducts(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const bestSellingProducts: ProductType[] | null =
        await this.productRepository.bestSellingProducts();

      if (!bestSellingProducts) {
        next(new CustomError("not found ", 402, null));
        return;
      }

      res.status(200).json({
        success: true,
        result: bestSellingProducts,
        message: "best selling products",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // get simillar products method
  public async getSimilartProducts(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const category: string = req.body.category;
      const similartProducts =
        await this.productRepository.similarProducts(category);

      if (!similartProducts) {
        next(new CustomError("similar products not found ", 402, null));
        return;
      }

      res.status(200).json({
        success: true,
        result: similartProducts,
        message: "smillar products",
      });
    } catch (err) {
      next(err);
      console.log(err);
    }
  }

  // get product reviews  method
  public async getProductReviews(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      // destruct the product id of request params
      const productId: string = req.params.productId;

      // fetch the product reviews
      const productReviews: ReviewType[] | null =
        await this.reviewRepository.getProductReviews(productId);

      // if there is no product or error send this error
      if (!productReviews) {
        next(
          new CustomError(
            "An error occurred while loading reviews. Please refresh the page or try again later. If the problem persists, contact customer support.",
            500,
            null,
          ),
        );
        return;
      }

      // send the product reviews
      res.status(200).json({
        message: "product reviews ",
        result: productReviews,
        success: true,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public async createProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products: NewProductType[] = req.body;
      console.log(products);
      await this.productRepository.createProducts(products);

      res.status(200).json({
        success: true,
        result: null,
        message: "the products is created",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default Product;
export { IProduct };
