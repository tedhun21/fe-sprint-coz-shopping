import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fourMarketDataSlice = createSlice({
  name: "fourMarketData",
  initialState,
  reducers: {
    fourFetchStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fourFetchSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fourFetchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// action 사용용
export const { fourFetchStart, fourFetchSuccess, fourFetchFailure } =
  fourMarketDataSlice.actions;

// store 등록용
export default fourMarketDataSlice.reducer;
