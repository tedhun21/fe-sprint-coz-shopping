import { configureStore } from "@reduxjs/toolkit";
import marketDataReducer from "../reducers/marketDataReducer";
import markedDataReducer from "../reducers/markedDataReducer";
import fourMarketDataReducer from "../reducers/fourMarketDataReducer";
import filterMarketDataReducer from "../reducers/filterMarketDataReducer";

export default configureStore({
  reducer: {
    marketData: marketDataReducer,
    markedData: markedDataReducer,
    fourMarketData: fourMarketDataReducer,
    filterMarketData: filterMarketDataReducer,
  },
});
