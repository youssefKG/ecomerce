import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
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
const rows = [
  { id: 1, productDetail: "bed and rom", quantite: 13, price: 35, total: 3000 },
  { id: 1, productDetail: "bed and rom", quantite: 13, price: 35, total: 3000 },
  { id: 1, productDetail: "bed and rom", quantite: 13, price: 35, total: 3000 },
  { id: 1, productDetail: "bed and rom", quantite: 13, price: 35, total: 3000 },
  { id: 1, productDetail: "bed and rom", quantite: 13, price: 35, total: 3000 },
];
const ShopingCart = () => {
  const { setUnseen, shoppingCartProducts } = useContext(ShoppingCartContext);
  useEffect(() => {
    setUnseen(0);
  }, []);
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
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCartProducts.map((product) => (
                <TableRow>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <div className="product-cell">
                      <img className="product-img-table" src={product.imgURL} />
                      <p>Beds and roms</p>
                    </div>
                  </TableCell>
                  <TableCell>{product.quantite}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.price * product.quantite}</TableCell>
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
