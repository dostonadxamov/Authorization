
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log("Payload:", payload);
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    }
  }
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
