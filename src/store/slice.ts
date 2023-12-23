import { IProduct } from './../types/product.interface';
import { PayloadAction } from './../../node_modules/@reduxjs/toolkit/dist/createAction.d';
import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";

const initialState: IInitialState = {
    items: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
             state.items = [...state.items, action.payload]
        },
        removeCart: (state, action: PayloadAction<number>) => {
             state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const {addToCart, removeCart} = cartSlice.actions
