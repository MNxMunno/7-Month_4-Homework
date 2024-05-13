import { Link } from "react-router-dom";
import axios from "../../api";
import React, { useEffect, useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleLike } from "../../context/wishlistSlice";

const Products = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);
  const dispatch = useDispatch();

  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      {/* <Link to={"/cart"}>
        <img src={el.images[0]} alt={el.title} />
      </Link> */}
      <div className="content">
        <img src={el.images[0]} alt={el.title} />
        <div className="btns">
          <button onClick={() => dispatch(toggleLike(el))}>
            {wishlist?.some((item) => item.id === el.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button>
            <MdAddShoppingCart />
          </button>
          <button>
            <CiSearch />
          </button>
        </div>
      </div>
      <h2 title={el.title}>{el.title}</h2>
      <p>$ {el.price}</p>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Products;
