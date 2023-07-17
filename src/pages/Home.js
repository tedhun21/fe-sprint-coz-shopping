import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "../component/ProductItem";
import "./Home.css";
import {
  fourFetchFailure,
  fourFetchStart,
  fourFetchSuccess,
} from "../reducers/fourMarketDataReducer";

const Home = () => {
  const { data: products, isLoading } = useSelector(
    (state) => state.fourMarketData,
  );

  const markedData = useSelector((state) => state.markedData.data);
  console.log(markedData);

  const dispatch = useDispatch();
  useEffect(() => {
    fourFetchStart();
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        console.log(res.data);
        dispatch(fourFetchSuccess(res.data));
      })
      .catch((err) => fourFetchFailure());
  }, []);
  return (
    <main className="home-main">
      <div className="product-container">
        <h2>상품리스트</h2>
        <div className="product-items">
          {isLoading || products === null
            ? null
            : products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </div>
      </div>
      <div className="bookmark-container">
        <h2>북마크 리스트</h2>
        <div className="bookmark-container"></div>
      </div>
    </main>
  );
};

export default Home;
