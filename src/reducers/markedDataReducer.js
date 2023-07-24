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
    unmark: (state, action) => {
      state.data = [...state.data.filter((el) => el.id !== action.payload.id)];
    },
  },
});

export const { mark, unmark } = markedDataSlice.actions;

export default markedDataSlice.reducer;
