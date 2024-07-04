import { shoppingCartProductType } from "../../types";
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
  cartProducts: shoppingCartProductType[];
  decreaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  increaseProductQuatite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  removeCartProduct: (productId: string) => Promise<void>;
}

const ShopingCart = ({
  cartProducts,
  decreaseProductQuantite,
  increaseProductQuatite,
  removeCartProduct,
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
                    <p>Order Id</p>
                  </div>
                </TableCell>
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
                <TableCell>
                  <div className="head-cell">
                    <p>Total</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>bhkspenf_98573456HDHKS</TableCell>
                <TableCell>
                  <div className="product-cell">
                    <img
                      className="product-img-table"
                      src="https://www.ikea.com/ext/ingkadam/m/23d41776febf815/original/PH195594.jpg?f=xs"
                    />
                    <p>Beds and roms</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="product-quantite-container">
                    <button>
                      <FaMinus />
                    </button>
                    <p>18</p>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                </TableCell>
                <TableCell>189£</TableCell>
                <TableCell>3008 $</TableCell>
                <TableCell>
                  <button>
                    <MdOutlineDeleteOutline className="delete-icon" />
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              {cartProducts.map((product) => (
                <TableRow>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <div className="product-cell">
                      <img
                        className="product-img-table"
                        src={product.imgURL[0]}
                      />
                      <p>Beds and roms</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-quantite-container">
                      <button
                        onClick={() => decreaseProductQuantite(product.id, 1)}
                      >
                        <FaMinus />
                      </button>
                      <input value={product.quantite} />
                      <button
                        onClick={() => increaseProductQuatite(product.id, 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.price * product.quantite}</TableCell>
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
