import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStart, fetchSuccess } from "../reducers/marketDataReducer";
import "./ProductsList.css";
import FilterItem from "../component/FilterItem";
import ProductItem from "../component/ProductItem";

const ProductsList = () => {
  const [filters, setFilters] = useState([
    { id: 1, label: "전체", isClicked: false },
    { id: 2, label: "상품", isClicked: false },
    { id: 3, label: "카테고리", isClicked: false },
    { id: 4, label: "기획전", isClicked: false },
    { id: 5, label: "브랜드", isClicked: false },
  ]);
  const products = useSelector((state) => state.marketData.data);

  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStart();
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      });
  }, []);

  const handleFilterClick = (index) => {
    const updatedFilters = filters.map((filter, i) => {
      if (i === index) {
        return { ...filter, isClicked: true };
      } else {
        return { ...filter, isClicked: false };
      }
    });
    setFilters(updatedFilters);
  };

  return (
    <main className="product-list-main">
      <div className="filter-container">
        {filters.map((el, index) => (
          <FilterItem
            key={el.id}
            index={index}
            filter={el}
            onClick={handleFilterClick}
          />
        ))}
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsList;
