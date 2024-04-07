import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
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
  return (
    <div className="cart-table-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Quantite</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <div className="product-cell">
                    <img
                      className="product-img-table"
                      src="https://www.ikea.com/ma/fr/images/products/fejka-plante-artificielle-et-supp-mural-interieur-exterieur-vert-mauve__1184665_pe898020_s5.jpg?f=xxs"
                    />
                    <p>Beds and roms</p>
                  </div>
                </TableCell>
                <TableCell>{row.quantite}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ShopingCart;
