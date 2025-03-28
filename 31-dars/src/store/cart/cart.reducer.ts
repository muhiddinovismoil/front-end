import { Product } from "@/data/types/category";
import { createSlice } from "@reduxjs/toolkit";

interface StateI {
    products: Product[];
    count: number;
    price: number;
}

const initialState: StateI = {
    products: [],
    count: 0,
    price: 0,
};

export const CartSlice = createSlice({
    name: "product-cart",
    initialState,
    reducers: {
        addProductToCart: () => {},
        removeProductFromCart: () => {},
    },
});

export const { addProductToCart, removeProductFromCart } = CartSlice.actions;
export default CartSlice.reducer;
