import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/login/reduxLogin";
import layoutSlice from "../redux/features/layoutSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    layout: layoutSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
