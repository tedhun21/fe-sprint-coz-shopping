import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Home from "./page/Home";
import ProductsList from "./page/ProductsList";
import Bookmark from "./page/Bookmark";
import Header from "./component/Header";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setProducts(res.data));
  }, []);

  console.log(products);
  return (
    <section className="wrapper">
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="products/list" element={<ProductsList />}></Route>
        <Route path="bookmark" element={<Bookmark />} />
      </Routes>
    </section>
  );
}

export default App;
