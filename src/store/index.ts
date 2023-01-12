// store入口
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gloablSlice from "./gloablSlice";

const store =  configureStore({
  reducer: {
    global: gloablSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>> | Action;
export type AppDispatch = typeof store.dispatch
export default store;