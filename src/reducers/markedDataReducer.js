import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const markedDataSlice = createSlice({
  name: "markedData",
  initialState,
  reducers: {
    mark: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { mark } = markedDataSlice.actions;

export default markedDataSlice.reducer;
