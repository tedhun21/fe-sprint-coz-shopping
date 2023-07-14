import { configureStore } from "@reduxjs/toolkit";
import marketDataReducer from "../reducers/marketDataReducer";
import markedDataReducer from "../reducers/markedDataReducer";

export default configureStore({
  reducer: { marketData: marketDataReducer, markedData: markedDataReducer },
});
