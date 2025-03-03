import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
    addProductList,
    deleteProduct,
    calculateAll,
    toggleAmount,
} from "./slice/cart-reducer";
import { loadState, saveState } from "../config/storage";

const setPrices = createListenerMiddleware();
setPrices.startListening({
    matcher: isAnyOf(addProductList, deleteProduct, toggleAmount),
    effect: async (_, listenerApi) => {
        const state = listenerApi.getState();
        listenerApi.dispatch(calculateAll(state.cart.products));
    },
});
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadState("cart-item"),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(setPrices.middleware),
});
store.subscribe(() => {
    saveState("cart-item", store.getState()?.cart);
});
