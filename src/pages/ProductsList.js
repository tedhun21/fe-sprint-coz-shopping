import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../reducers/marketDataReducer";
import "./ProductsList.css";
import FilterItem from "../component/FilterItem";
import ProductItem from "../component/ProductItem";
import { filter } from "../reducers/filterMarketDataReducer";

const filterCategory = [
  { id: 1, label: "전체", type: "전체", isClicked: false },
  { id: 2, label: "상품", type: "Product", isClicked: false },
  { id: 3, label: "카테고리", type: "Category", isClicked: false },
  { id: 4, label: "기획전", type: "Exhibition", isClicked: false },
  { id: 5, label: "브랜드", type: "Brand", isClicked: false },
];

const ProductsList = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState([
    { id: 1, label: "전체", type: "전체", isClicked: true },
  ]);

  // 서버에서 불러오는 100개 데이터, redux에서 가져온다.
  const { data: products, isLoading } = useSelector(
    (state) => state.marketData,
  );

  // 카테고리로 필터된 데이터 가져온다.
  const filteredProducts = useSelector((state) => state.filterMarketData.data);

  // 100개 데이터 redux로 보내 저장한다.
  useEffect(() => {
    fetchStart();
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => fetchFailure(err.data));
  }, []);

  const handleFilterClick = (index) => {
    // filter state를 true로 바꾸기
    const updatedFilters = filterCategory.filter((filter, i) => i === index);
    console.log(updatedFilters[0]);
    // setFilters([...updatedFilters[0], updatedFilter[0].isClicked: true]);
    console.log(updatedFilters);

    // filter를 눌렀을 때, 해당하는 filter의 정보 가져오기(전체, Product, Category, Exhibition, Brand)
    const selectedFilter = updatedFilters.filter(
      (filter) => filter.isClicked === true,
    );

    // 눌렀을 때의 정보를 가지고 filter한 데이터를 dispatch

    dispatch(
      filter(
        products.filter((product) =>
          selectedFilter[0].type === "전체"
            ? true
            : product.type === selectedFilter[0].type,
        ),
      ),
    );
  };

  return (
    <main className="product-list-main">
      <div className="filter-container">
        {filterCategory.map((el, index) => (
          <FilterItem
            key={el.id}
            index={index}
            filter={el}
            onClick={handleFilterClick}
          />
        ))}
      </div>
      <div className="products-list">
        {isLoading
          ? null
          : filteredProducts?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </main>
  );
};

export default ProductsList;
