import api, { ResponseI } from "../../api";

interface ProductsServiceI {
  getBestSellingProducts: () => Promise<ResponseI>;
}

class ProductService implements ProductsServiceI {
  public async getBestSellingProducts(): Promise<ResponseI> {
    return api.get("product/best-selling");
  }
}

const productService: ProductsServiceI = new ProductService();

export default productService;

export type { ProductsServiceI };
