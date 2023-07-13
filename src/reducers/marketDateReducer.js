import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const marketDataSlice = createSlice({
  name: "marketData",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// action 사용
export const { fetchStart, fetchSuccess, fetchFailure } =
  marketDataSlice.actions;

// store 등록용
export default marketDataSlice.reducer;
