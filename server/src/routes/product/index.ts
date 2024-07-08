import { container } from "tsyringe";
import express, { Router } from "express";
import { ProductRepository, Database, ReviewRepository } from "../../services";
import Product, { IProduct } from "../../controllers/productController";

const route: Router = express.Router();

container.register("DataBase", { useClass: Database });
container.register("ReviewRepository", { useClass: ReviewRepository });
container.register("Product", { useClass: Product });
container.register("ProductRepository", {
  useClass: ProductRepository,
});

const product: IProduct = container.resolve(Product);

route.get("/product-detail/:productId", product.getProductDetail.bind(product));
route.get(
  "/best-selling-products",
  product.getBestSellingProducts.bind(product),
);
route.get("/featured-products", product.getFeaturedProducts.bind(product));
route.get("/simillar-products", product.getSimilartProducts.bind(product));

export default route;
