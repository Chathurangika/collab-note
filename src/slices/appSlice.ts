import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// @ts-ignore
import Cookies from "js-cookie";

export interface AppState {
  loading: boolean;
  sideMenuOpen: boolean;
  userId: string;
  userFullName: string;

}

const initialState: AppState = {
  loading: false,
  sideMenuOpen: true,
  userId: "string",
  userFullName: "string",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSideMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.sideMenuOpen = action.payload;
    },
    startLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false;
    },

    setUserDetails: (state) => {
      state.userFullName = Cookies.get("userFullName");
      state.userId = Cookies.get("user");
    },
  },
});

export const {
  setSideMenuOpen,
  startLoading,
  endLoading,
  setUserDetails
} = appSlice.actions;

export default appSlice.reducer;
