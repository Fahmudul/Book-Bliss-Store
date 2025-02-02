import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ICart {
  productId: string;
  quantity: string;
}

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getCart = (state: RootState) => state.cart;

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
