import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "../reducers/marketDateReducer";

export default configureStore({
  reducer: {
    marketData: marketReducer,
  },
});
