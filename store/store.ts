import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "@/store/features/gameListSlice";
export const store = configureStore({
  reducer: {
    gameList: GameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
