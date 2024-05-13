import React from "react";
import hero1 from "../../assets/images/hero-1.png";
import hero2 from "../../assets/images/hero-2.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="cards">
          <div className="card">
            <p className="title">Welcome to GreenShop</p>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p className="hero_desc">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button className="btn">SHOP NOW</button>
          </div>
          <div className="card">
            <div className="img">
              <img className="img1" src={hero2} alt="img" />
              <img src={hero1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
