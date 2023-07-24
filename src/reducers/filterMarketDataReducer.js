import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const filterMarketDataSlice = createSlice({
  name: "filterMarketData",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.data = action.payload;
    },
  },
});

// action 사용용
export const { filter } = filterMarketDataSlice.actions;

// store 등록용
export default filterMarketDataSlice.reducer;
