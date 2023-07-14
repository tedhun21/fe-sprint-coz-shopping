import { configureStore } from "@reduxjs/toolkit";
import marketDataReducer from "../reducers/marketDataReducer";

export default configureStore({
  reducer: { marketData: marketDataReducer },
});
