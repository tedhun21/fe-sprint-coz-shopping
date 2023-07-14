import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import ProductItem from "../component/ProductItem";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const markedData = useSelector((state) => state.markedData.data);

  console.log(markedData);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <main className="home-main">
      <div className="product-container">
        <h2>상품리스트</h2>
        <div className="product-items">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="bookmark-container">
        <h2>북마크 리스트</h2>
      </div>
    </main>
  );
};

export default Home;
