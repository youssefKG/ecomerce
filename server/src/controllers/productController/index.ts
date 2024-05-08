import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class Product {
  public async getFeaturedProducts(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const featuredProductsPromise = await prisma.product.findMany({
        skip: 0,
        take: 10,
        orderBy: {
          created_at: "desc",
        },
        select: {
          id: true,
          price: true,
          discount: true,
          title: true,
          rate: true,
          imgURLS: true,
        },
      });

      const bestSelligProductsPromise = await prisma.product.findMany({
        skip: 0,
        take: 10,
        orderBy: { created_at: "desc" },
        select: {
          id: true,
          price: true,
          discount: true,
          title: true,
          rate: true,
          imgURLS: true,
        },
      });

      const [featuredProducts, bestSellingProducts] = await Promise.all([
        featuredProductsPromise,
        bestSelligProductsPromise,
      ]);

      res.status(200).json({
        success: true,
        result: { bestSellingProducts, featuredProducts },
        message: "products fetched successfully",
        error: null,
      });
    } catch (err) {
      next(err);
      console.log(err);
    }
  }
  public async getProductDetail(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const product_id: string = req.params?.product_id;

      console.log(product_id);

      const findProductDeatil = await prisma.product.findUnique({
        where: {
          id: product_id,
        },
      });
      console.log("product : ", findProductDeatil);

      if (!findProductDeatil) {
        res.status(404).json({
          success: false,
          message: "not found ",
          result: null,
        });
        return;
      }

      res.status(200).json({
        success: true,
        result: findProductDeatil,
        message: "product fetched successfully",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default Product;
