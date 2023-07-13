import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import ProductsList from "./page/ProductsList";
import Bookmark from "./page/Bookmark";
import Header from "./component/Header";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "./reducers/marketDateReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((error) => dispatch(fetchFailure(error.message)));
  }, []);
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
