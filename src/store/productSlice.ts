import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartTypes, allProductAndCartTypes } from '../tsd/product';
import products from "../products.json";




export interface ProductState  {
    allProduct: allProductAndCartTypes[],
    singleProduct: null | allProductAndCartTypes
    cart:CartTypes[],
    
}


const initialState: ProductState = {
    allProduct: products,
    singleProduct:null,
    cart:[]
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       
      getProduct: (state, action: PayloadAction<number>)=>{
        const product = state.allProduct.filter(el => el.id === action.payload)
        state.singleProduct = product[0]
      },

      addTocart:(state, action: PayloadAction<CartTypes>) => {
        state.cart.push(action.payload)
      }
    },
  })


export const { getProduct, addTocart } = productSlice.actions
export default productSlice.reducer


  