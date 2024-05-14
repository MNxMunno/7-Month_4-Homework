import React from "react";
import Empty from "../../components/empty/Empty";
import { useDispatch, useSelector } from "react-redux";

const Checkout = ({ data }) => {
  // const dispatch = useDispatch();
  const carts = useSelector((s) => s.cart.value);
  return (
    <div style={{ paddingTop: "60px" }}>
      {carts.length ? <p>Checkout</p> : <Empty />}
    </div>
  );
};

export default Checkout;
