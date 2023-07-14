import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStart, fetchSuccess } from "../reducers/marketDataReducer";

const ProductsList = () => {
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

  return (
    <>
      <div>hi Im ProductsList</div>
    </>
  );
};

export default ProductsList;
