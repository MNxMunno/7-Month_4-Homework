import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  removeItemFromCart,
} from "../../context/cartSlice";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ data }) => {
  const dispatch = useDispatch();
  let cart = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt={el.title} />
      <h5>{el.title}</h5>
      <p>$ {el.price} </p>
      <div className="btns">
        <button
          className="btn"
          disabled={el.quantity <= 1}
          onClick={() => dispatch(decrementCartQuantity(el))}
        >
          -
        </button>
        <span>{el.quantity}</span>
        <button
          className="btn"
          onClick={() => dispatch(incrementCartQuantity(el))}
        >
          +
        </button>
      </div>
      <b>$ {el.price * el.quantity}</b>
      <button onClick={() => dispatch(removeItemFromCart(el))}>
        <MdDeleteForever />
      </button>
    </div>
  ));

  let totalPrice = data?.reduce((acc, el) => acc + el.price * el.quantity, 0);

  return (
    <section className="cart">
      <div className="container">
        <div className="content">
          <div className="cards">
            <div className="title">
              <p>Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {cart}
          </div>
          <div className="right__cards">
            <h2>{totalPrice}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
