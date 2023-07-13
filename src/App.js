import Header from "./component/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <section className="wrapper">
      <Header />
      <Routes>
        <Route>
          <Route index element={<Home />}></Route>
          <Route path="products/list" element={<ProductsList />}></Route>
          <Route path="bookmark" element={<Bookmark />}></Route>
        </Route>
      </Routes>
    </section>
  );
}

export default App;
