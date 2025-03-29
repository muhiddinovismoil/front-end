import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from "@reduxjs/toolkit";
import { loadState, saveState } from "@/config/localStorage";
import cartReducer from "./cart/cart.reducer";
import {
    addProductToCart,
    removeProductFromCart,
    toggleAmout,
    totalPrice,
} from "./cart/cart.reducer";

const setTotalPrice = createListenerMiddleware();

setTotalPrice.startListening({
    matcher: isAnyOf(addProductToCart, removeProductFromCart, toggleAmout),
    effect: (_, listenerApi) => {
        listenerApi.dispatch(totalPrice());
    },
});

export const store = configureStore({
    reducer: {
        product: cartReducer,
    },
    preloadedState: {
        product: loadState("cart-products"),
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(setTotalPrice.middleware);
    },
});
store.subscribe(() => {
    console.log(store.getState()?.product);
    saveState("cart-products", store.getState()?.product);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
