import React from "react";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";
import Cart from "../../components/cart/Cart";

const CartPage = () => {
  const carts = useSelector((s) => s.cart.value);
  // console.log(carts);
  return <div>{carts.length ? <Cart data={carts} /> : <Empty />}</div>;
};

export default CartPage;
