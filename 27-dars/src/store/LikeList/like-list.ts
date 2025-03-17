import { ProductI } from "@/app/data/types/mock-data.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateI {
    likes: ProductI[];
    count: number;
}

const initialState: StateI = {
    likes: [],
    count: 0,
};

export const ProductSlice = createSlice({
    name: "product-slice",
    initialState,
    reducers: {
        addProductToLikeList: (state, action: PayloadAction<ProductI>) => {
            return {
                ...state,
                count: state.count + 1,
                likes: [...state.likes, action.payload],
            };
        },
        removeProductFromLikeList: (
            state,
            action: PayloadAction<{ id: string }>
        ) => {
            return {
                ...state,
                count: state.count - 1,
                likes: state.likes.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        },
    },
});

export const { addProductToLikeList, removeProductFromLikeList } =
    ProductSlice.actions;
export default ProductSlice.reducer;
