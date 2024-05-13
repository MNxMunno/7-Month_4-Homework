import React, { useEffect, useState } from "react";
import Banner from "../../static/banner/Banner";
import Products from "../../static/products/Products";
import axios from "../../api";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main style={{ paddingTop: "70px" }}>
      <Banner />
      <Products data={data} />
    </main>
  );
};

export default Home;
