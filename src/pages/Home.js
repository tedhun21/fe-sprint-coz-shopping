import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setProducts(res.data));
  }, []);
  return <div></div>;
};

export default Home;
