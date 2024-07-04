import useCart, { UseCartI } from "../../hooks/cart";
import Ordersummary from "../../components/OrderSummary";
import ShopingCart from "../../components/ShoppingCart";
import "./index.css";

function Cart() {
  const {
    decreaseProductQuantite,
    cartProducts,
    errorMessage,
    increaseProductQuantite,
    removeCartProduct,
  }: UseCartI = useCart();

  return (
    <div className="cart-container">
      <ShopingCart
        cartProducts={cartProducts}
        decreaseProductQuantite={decreaseProductQuantite}
        removeCartProduct={removeCartProduct}
        increaseProductQuatite={increaseProductQuantite}
      />
      <Ordersummary />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Cart;
