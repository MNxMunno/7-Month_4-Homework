import React from "react";
import "./scss/main.scss";
import Header from "./components/header/Header";
import Empty from "./components/empty/Empty";
import Home from "./routers/home/Home";
import CartPage from "./routers/cartPage/CartPage";
import Wishlist from "./routers/wishlist/Wishlist";
import Checkout from "./routers/checkout/Checkout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />}>
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/wislhist" element={<Wishlist />} />
        <Route path="*" element={<Empty />} />
      </Routes>
    </>
  );
};

export default App;
