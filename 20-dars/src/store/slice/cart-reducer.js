import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCount: 1,
    discount: 0,
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
                    products: [...state.products, action.payload],
                    userCount: state.userCount + 1,
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

            if (type === "increment" && product.count < maxCount) {
                product.count += 1;
            } else if (type === "decrement" && product.count > 1) {
                product.count -= 1;
            }
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
        calculateAll: (state, action) => {
            return {
                ...state,
                deliveryFee: 5 * state.products.length,
                subTotalPrice: state.products.reduce(
                    (acc, b) => acc + b.price,
                    0
                ),
                discount: (state.subTotalPrice / 100) * 20,
                totalPrice:
                    state.subTotalPrice + state.deliveryFee - state.discount,
            };
        },
    },
});

export default cartReducer.reducer;
export const { addProductList, deleteProduct, toggleAmount, calculateAll } =
    cartReducer.actions;
