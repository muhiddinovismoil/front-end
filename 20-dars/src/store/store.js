import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
    addProductList,
    deleteProduct,
    calculateAll,
} from "./slice/cart-reducer";
import { loadState, saveState } from "../config/storage";

const setPrices = createListenerMiddleware();
setPrices.startListening({
    matcher: isAnyOf(addProductList, deleteProduct, calculateAll),
    effect: (_, listenerApi) => {
        listenerApi.dispatch(calculateAll());
    },
});
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadState("cart-item"),
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(setPrices.middleware);
    },
});
store.subscribe(() => {
    saveState("cart-item", store.getState()?.cart);
});
