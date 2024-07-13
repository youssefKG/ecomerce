import { useContext } from "react";
import { AuthContext } from "../../context";
import useCart, { UseCartI } from "../../hooks/cart";
import Ordersummary from "../../components/OrderSummary";
import ShopingCart from "../../components/ShoppingCart";
import "./index.css";

function Cart() {
  const { checkAuth } = useContext(AuthContext);
  const {
    incrementCartItemQuantite,
    cartProducts,
    decrementCartItemQuantite,
    removeCartItem,
    isCartProductLoading,
  }: UseCartI = useCart();

  return (
    <div className="cart-container">
      <ShopingCart
        isCartProductsLoading={isCartProductLoading}
        cartProducts={cartProducts}
        decrementCartItemQuantite={decrementCartItemQuantite}
        removeCartItem={removeCartItem}
        incrementCartItemQuantite={incrementCartItemQuantite}
      />
      <Ordersummary />
    </div>
  );
}

export default Cart;
