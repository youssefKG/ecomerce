import api, { ResponseI } from "../../api";
import { CategoryFilterType } from "../../types";

interface ProductsServiceI {
  getBestSellingProducts: () => Promise<ResponseI>;
  findProducts: (
    categorys: CategoryFilterType,
    rate: number[],
    price: number[],
  ) => Promise<ResponseI>;
  searchForProducts: (inputSearch: string) => Promise<ResponseI>;
}

class ProductService implements ProductsServiceI {
  public async getBestSellingProducts(): Promise<ResponseI> {
    return api.get("product/best-selling");
  }

  public async findProducts(
    categorys: CategoryFilterType,
    rate: number[],
    price: number[],
  ): Promise<ResponseI> {
    return api.post("/product/list", {
      categorys,
      rate,
      price,
    });
  }

  public async searchForProducts(inputSearch: string): Promise<ResponseI> {
    return api.get(`/product/search/${inputSearch}`);
  }
}

const productService: ProductsServiceI = new ProductService();

export default productService;

export type { ProductsServiceI };
