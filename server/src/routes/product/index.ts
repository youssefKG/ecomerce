import express, { Router } from "express";
import Product from "../../controllers/productController";
const productRouter: Router = express.Router();
const product = new Product();
productRouter.get("/product_detail/:product_id", product.getProductDetail);
export default productRouter;
