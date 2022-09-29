import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartTypes, allProductAndCartTypes } from "../tsd/product";
import products from "../products.json";

export interface ProductState {
  allProduct: allProductAndCartTypes[];
  singleProduct: null | allProductAndCartTypes;
  cart: CartTypes[];
  totalCost: number;
  tax: number;
  totalQuantity: number;
  showModal: boolean;
  currency: string;
}

const initialState: ProductState = {
  allProduct: products,
  singleProduct: null,
  cart: [],
  totalCost: 0,
  tax: 0,
  totalQuantity: 1,
  showModal: false,
  currency: "$",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<number>) => {
      const product = state.allProduct.filter((el) => el.id === action.payload);
      state.singleProduct = product[0];
    },

    checkIfProductInCart: (state) => {
      for (var i = 0; i < state.allProduct.length; i++) {
        for (var j = 0; j < state.cart.length; j++) {
          if (state.allProduct[i].id === state.cart[j].id) {
            state.allProduct[i].inCart = true;
          }
        }
      }
    },

    //NOTE: their is no UI REPRESENTATION FOR  REMOVING ITEM FROM CART SO THE BELOW FUNCTION REDUCER
    // IS NOT USED IN THE APPLICATION

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const product = state.allProduct.filter((el) => el.id !== action.payload);
      state.allProduct = product;
    },

    addTocart: (state, action: PayloadAction<CartTypes>) => {
      state.cart.push(action.payload);
    },

    addToTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost += action.payload;
    },

    calculateTax: (state) => {
      state.tax = state.totalCost > 0 ? state.totalCost * (21 / 100) : 0;
    },

    incrementTotalQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity += action.payload;
    },

    decrementTotalQuantity: (state, action: PayloadAction<number>) => {
      if (state.totalQuantity > state.cart.length) {
        state.totalQuantity -= action.payload;
      }
    },

    setTotalQuantityDefaulltValue: (state) => {
      state.totalQuantity = state.cart.length;
    },

    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },

    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const {
  getProduct,
  addTocart,
  addToTotalCost,
  calculateTax,
  incrementTotalQuantity,
  decrementTotalQuantity,
  setTotalQuantityDefaulltValue,
  setShowModal,
  changeCurrency,
  checkIfProductInCart,
} = productSlice.actions;
export default productSlice.reducer;
