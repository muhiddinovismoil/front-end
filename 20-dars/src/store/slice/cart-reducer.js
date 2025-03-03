import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    userCount: 0,
    discount: 0,
    productCount: 1,
    totalPrice: 0,
    subTotalPrice: 0,
    deliveryFee: 0,
    products: [],
};

export const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductList: (state, action) => {
            const isProductIncludes = state.products.find(
                (item) => item.id === action.payload.id
            );

            if (!isProductIncludes) {
                return {
                    ...state,
                    products: [
                        ...state.products,
                        {
                            ...action.payload,
                            userCount: action.payload.counter,
                            userPrice:
                                action.payload.price * action.payload.counter,
                        },
                    ],
                    productCount: state.productCount + 1,
                    productPrice: action.payload.price,
                    count: action.payload.count - 1,
                };
            }
            return state;
        },
        toggleAmount: (state, action) => {
            const { id, type, maxCount } = action.payload;
            const product = state.products.find((item) => item.id === id);
            if (!product) return;
            if (type === "increment" && product.userCount < maxCount) {
                product.userCount += 1;
            } else if (type === "decrement" && product.userCount > 1) {
                product.userCount -= 1;
            }
            product.userPrice = product.price * product.userCount;
        },

        deleteProduct: (state, action) => {
            const deletedData = state.products.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                products: deletedData,
                productCount: state.productCount - 1,
            };
        },
        calculateAll: (state) => {
            state.subTotalPrice = state.products.reduce((acc, b) => {
                return acc + b.userPrice;
            }, 0);
            state.discount = (state.subTotalPrice / 100) * 20;
            state.deliveryFee = 5 * state.products.length;
            state.totalPrice =
                state.subTotalPrice + state.deliveryFee - state.discount;
        },
    },
});

export default cartReducer.reducer;
export const { addProductList, deleteProduct, toggleAmount, calculateAll } =
    cartReducer.actions;
