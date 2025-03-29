import { CartProduct } from "@/data/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateI {
    products: CartProduct[];
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
        addProductToCart: (state, action: PayloadAction<CartProduct>) => {
            const getOneProduct = state.products.find(
                (item) => item.id == action.payload.id
            );
            if (!getOneProduct) {
                return {
                    ...state,
                    count: state.count + 1,
                    products: [
                        ...state.products,
                        {
                            ...action.payload,
                            userCount: action.payload.count,
                            userPrice:
                                +action.payload.price * action.payload.count,
                        },
                    ],
                };
            }
        },
        toggleAmout: (
            state,
            action: PayloadAction<{ id: string; type: boolean }>
        ) => {
            const product = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    const newUserCount = action.payload.type
                        ? item.userCount + 1
                        : Math.max(0, item.userCount - 1);
                    const newCount = action.payload.type
                        ? Math.max(0, item.count - 1)
                        : item.count + 1;
                    return {
                        ...item,
                        userCount: newUserCount,
                        userPrice: newCount * +item.price,
                        count: newCount,
                    };
                }
                return item;
            });
            return {
                ...state,
                products: product,
            };
        },
        removeProductFromCart: (
            state,
            action: PayloadAction<{ id: string }>
        ) => {
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : state.count,
                products: state.products.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        },
        totalPrice: (state) => {
            return {
                ...state,
                price: state.products.reduce(
                    (acc, cv) => acc + cv.userPrice,
                    0
                ),
            };
        },
    },
});

export const {
    addProductToCart,
    removeProductFromCart,
    toggleAmout,
    totalPrice,
} = CartSlice.actions;
export default CartSlice.reducer;
