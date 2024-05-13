import axios from "../../api";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.images[0]} alt="" />
      <h2>{el.title}</h2>
      <p>{el.price}</p>
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
