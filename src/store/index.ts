import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: { productReducer },
});
  
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  export const useAppDispatch = () => useDispatch<AppDispatch>();

