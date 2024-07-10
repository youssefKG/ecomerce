import { useContext } from "react";
import { AuthContext } from "../../context";
import useCart, { UseCartI } from "../../hooks/cart";
import Ordersummary from "../../components/OrderSummary";
import ShopingCart from "../../components/ShoppingCart";
import "./index.css";

function Cart() {
  const { checkAuth } = useContext(AuthContext);
  const {
    decreaseProductQuantite,
    cartProducts,
    increaseProductQuantite,
    removeCartProduct,
    isCartProductLoading,
  }: UseCartI = useCart();

  return (
    <div className="cart-container">
      <ShopingCart
        isCartProductsLoading={isCartProductLoading}
        cartProducts={cartProducts}
        decreaseProductQuantite={() => checkAuth(decreaseProductQuantite)()}
        removeCartProduct={removeCartProduct}
        increaseProductQuatite={increaseProductQuantite}
      />
      <Ordersummary />
    </div>
  );
}

export default Cart;
