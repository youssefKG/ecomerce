import { useCart, UseCartI } from "../../hooks";
import CartTable from "../../components/CartTable";
import Ordersummary from "../../components/OrderSummary";
import "./index.css";

const Cart = () => {
  const {
    incrementCartItemQuantite,
    cartProducts,
    decrementCartItemQuantite,
    removeCartItem,
    isCartProductLoading,
  }: UseCartI = useCart();
  return (
    <div className="flex gap-8  md:mx-20 mx-2 sm:mx-10 flex-wrap mt-5">
      <CartTable
        cartProducts={cartProducts}
        incrementCartItemQuantite={incrementCartItemQuantite}
        decrementCartItemQuantite={decrementCartItemQuantite}
        removeCartItem={removeCartItem}
        isCartProductLoading={isCartProductLoading}
      />
      <Ordersummary />
    </div>
  );
};
export default Cart;
