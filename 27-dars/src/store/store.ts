import { configureStore } from "@reduxjs/toolkit";
import likeListSlice from "./LikeList/like-list";
import { loadState, saveState } from "@/config/localStorage";
export const store = configureStore({
    reducer: {
        likeListSlice,
    },
    preloadedState: {
        likeListSlice: loadState("like_lists") || undefined,
    },
});
store.subscribe(() => {
    saveState("like_lists", store.getState()?.likeListSlice);
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
