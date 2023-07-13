import Header from "./component/Header";
import "./App.css";

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
      <Header></Header>
    </section>
  );
}

export default App;
