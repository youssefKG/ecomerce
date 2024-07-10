import { ShoppingCartProductType } from "../../types";
import { MdOutlineDeleteOutline } from "../../assets/icons";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import "./index.css";
import { FaMinus, FaPlus } from "../../assets/icons";

interface CartTableI {
  cartProducts: ShoppingCartProductType[];
  decreaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  increaseProductQuatite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  removeCartProduct: (productId: string) => Promise<void>;
  isCartProductsLoading: boolean;
}

const ShopingCart = ({
  cartProducts,
  decreaseProductQuantite,
  increaseProductQuatite,
  removeCartProduct,
  isCartProductsLoading,
}: CartTableI) => {
  return (
    <Paper>
      <div className="cart-table-container">
        <TableContainer>
          <Table aria-label="sticky table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className="head-cell">
                    <p>Product</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="head-cell">
                    <p>Quantite</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="head-cell">
                    <p>Price</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="head-cell">
                    <p>Total</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartProducts.map((product) => (
                <TableRow>
                  <TableCell>
                    <div className="product-cell">
                      <img
                        className="product-img-table"
                        src="https://www.ikea.com/global/en/images/Alex_Seb_47132_3c77a65654.jpg?f=xxl"
                      />
                      <p>{product.product.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-quantite-container">
                      <button
                        onClick={() =>
                          decreaseProductQuantite(product.productId, -1)
                        }
                      >
                        <FaMinus />
                      </button>
                      <input value={product.quantite} />
                      <button
                        onClick={() =>
                          increaseProductQuatite(product.productId, 1)
                        }
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="price-cell">{product.price}</TableCell>
                  <TableCell className="total-cell">
                    {product.price * product.quantite}
                  </TableCell>
                  <TableCell>
                    <button onClick={() => removeCartProduct(product.id)}>
                      <MdOutlineDeleteOutline className="delete-icon" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
};

export default ShopingCart;
