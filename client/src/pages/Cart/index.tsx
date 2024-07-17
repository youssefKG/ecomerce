import useCart, { UseCartI } from "../../hooks/cart";
import Ordersummary from "../../components/OrderSummary";
import ShopingCart from "../../components/ShoppingCart";
import CartTable from "../../components/CartTable";
import "./index.css";

const Cart = () => {
  const {
    incrementCartItemQuantite,
    cartProducts,
    decrementCartItemQuantite,
    removeCartItem,
  }: UseCartI = useCart();
  return (
    <div className="cart-container">
      <CartTable
        cartProducts={cartProducts}
        incrementCartItemQuantite={incrementCartItemQuantite}
        decrementCartItemQuantite={decrementCartItemQuantite}
        removeCartItem={removeCartItem}
      />
      <Ordersummary />
    </div>
  );
};
export default Cart;
