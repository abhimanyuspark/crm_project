import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { authenticateUser, refreshAuthUser } from "../../server/server";

const initialState = {
  error: null,
  loading: false,
  user: {},
  persist: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.loading = false;
      state.user = {};
      state.persist = false;
      Cookies.remove("user");
      Cookies.remove("sidebar");
      Cookies.remove("theme");
    },
    togglePersist: (state, action) => {
      state.persist = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload;
        const persist = state?.persist;
        Cookies.set("sidebar", true, { expires: 7 });
        Cookies.set("theme", true, { expires: 7 });
        if (persist) {
          const { email } = action?.payload;
          Cookies.set("user", JSON.stringify({ email }), {
            expires: 7,
          });
        }
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action?.error?.message;
      })
      .addCase(refreshAuthUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload;
      })
      .addCase(refreshAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action?.error?.message;
      });
  },
});

export const { logout, togglePersist } = authSlice.actions;
export default authSlice.reducer;
