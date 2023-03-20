import { createSlice } from "@reduxjs/toolkit";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  card: [],
  totalQuentity: 0,
  totalPrice: 0,
};

export const cardSlice = createSlice({
  name: "card", 
  initialState,
  reducers: {
    addToCard: (state, actions) => {

      const item = actions;
      console.log("item yeh aya cart me ",item);
      toast.success('Product add to cart')
      let find = state.card.findIndex((item) => item.id === actions.payload.id);
      if (find >= 0) {
        state.card[find].quantity += 1;
      } else {
        state.card.push(actions.payload);
      }

    },
    getCardTotal: (state) => {
      let { totalQuentity, totalPrice } = state.card.reduce(
        (cardTotal, cardItem) => {
          const { price, quantity } = cardItem;
          const itemTotal = price * quantity;
          cardTotal.totalPrice += itemTotal;
          cardTotal.totalQuentity += quantity;
          return cardTotal;
        },
        {
          totalPrice: 0,
          totalQuentity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuentity = totalQuentity;
    },


 
     
  

  },
});

export const {
  addToCard,
  getCardTotal,
} = cardSlice.actions;

export default cardSlice.reducer;
