import { useSelector } from "react-redux";

const Home = () => {
  const marketData = useSelector((state) => state.marketData.data);
  // const isLoading = useSelector((state) => state.marketData.isLoading);
  // const error = useSelector((state) => state.marketData.error);
  console.log(marketData);

  return (
    <>
      <div>Hi Im home</div>
    </>
  );
};

export default Home;
