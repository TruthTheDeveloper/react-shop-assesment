import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import products from "../products.json";

// export interface State {
  
// }
export interface ProductState  {
    allProduct: {
      id:number,
      title:string,
      subtitle:string,
      detail:string,
      price:number,
      image:string
    }[],

    singleProduct: null | {
      id:number,
      title:string,
      subtitle:string,
      detail:string,
      price:number,
      image:string
    }
    
}



  
const initialState: ProductState = {
    allProduct: products,
    singleProduct:null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       
      getProduct: (state, action: PayloadAction<number>)=>{
        const product = state.allProduct.filter(el => el.id === action.payload)
        state.singleProduct = product[0]
      }
    },
  })


export const { getProduct } = productSlice.actions
export default productSlice.reducer


  