import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../store";

const initialState = {
  shop: getStore("shop") || [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getProductShop(state, { payload }) {
      state.shop = [...state.shop, payload];
      setStore("shop", state.shop);
    },
  },
});
  
export const { getProductShop } = shopSlice.actions;
export default shopSlice.reducer;
