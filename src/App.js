import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import ProductsList from "./page/ProductsList";
import Bookmark from "./page/Bookmark";
import Header from "./component/Header";

function App() {
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
