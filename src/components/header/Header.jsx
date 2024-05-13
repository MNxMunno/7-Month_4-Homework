import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logos from "../../assets/images/logos.svg";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoLogInOutline } from "react-icons/io5";

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
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>Shop</Link>
            <Link to={"/wislhist"}>Wishlist</Link>
            <Link to={"/blog"}>Blog</Link>
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
