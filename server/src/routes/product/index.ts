import express, { Router } from "express";
import Product, { IProduct } from "../../controllers/productController";
import {
  productRepository,
  reviewRepository,
  IReviewRepository,
} from "../../services";

const route: Router = express.Router();
const product: IProduct = new Product(productRepository, reviewRepository);

route.get("/product-detail/:productId", product.getProductDetail.bind(product));
route.get(
  "/best-selling-products",
  product.getBestSellingProducts.bind(product),
);
route.get("/featured-products", product.getFeaturedProducts.bind(product));
route.get("/simillar-products", product.getSimilartProducts.bind(product));

export default route;
