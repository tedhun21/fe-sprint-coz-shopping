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
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=10")
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((error) => dispatch(fetchFailure(error.message)));
  }, []);
  return (
    <section className="wrapper">
      <Header></Header>
    </section>
  );
}

export default App;
