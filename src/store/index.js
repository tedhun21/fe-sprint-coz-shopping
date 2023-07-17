import { configureStore } from "@reduxjs/toolkit";
import marketDataReducer from "../reducers/marketDataReducer";
import markedDataReducer from "../reducers/markedDataReducer";
import FourmarketDataReducer from "../reducers/fourMarketDataReducer";

export default configureStore({
  reducer: {
    marketData: marketDataReducer,
    markedData: markedDataReducer,
    fourMarketData: FourmarketDataReducer,
  },
});
