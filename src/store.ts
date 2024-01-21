import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import noteReducer from "./slices/noteSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    note: noteReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
