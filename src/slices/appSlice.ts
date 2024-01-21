import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface AppState {
  loading: boolean;
  sideMenuOpen: boolean;

}

const initialState: AppState = {
  loading: false,
  sideMenuOpen: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSideMenuOpen: (state, action: PayloadAction<boolean>) => {

      console.log(action.payload);
      state.sideMenuOpen = action.payload;
    },
    startLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false;
    }
  },
});

export const {
  setSideMenuOpen,
  startLoading,
  endLoading,
} = appSlice.actions;

export default appSlice.reducer;
