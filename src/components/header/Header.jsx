import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logos from "../../assets/images/logos.svg";
import { CiSearch, CiShop } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import { IoCartOutline, IoHomeOutline, IoLogInOutline } from "react-icons/io5";
import { SiBloglovin } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to={"/"}>
            <img className="logo" src={logo} alt="" />
            <img className="logos" src={logos} alt="" />
          </Link>
          <div className="nav__items">
            <Link to={"/"}>
              <IoHomeOutline className="btn__nav" />
              <p>Home</p>
            </Link>
            <Link to={"/cart"}>
              <CiShop className="btn__nav" />
              <p>Shop</p>
            </Link>
            <Link to={"/wislhist"}>
              <FaRegHeart className="btn__nav" />
              <p>Wishlist</p>
            </Link>
            <Link to={"/blog"}>
              <SiBloglovin className="btn__nav" />
              <p>Blog</p>
            </Link>
          </div>
          <div className="nav__btns">
            <button>
              <CiSearch />
            </button>
            <button>
              <IoCartOutline />
            </button>
            <button className="login">
              <IoLogInOutline />
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
