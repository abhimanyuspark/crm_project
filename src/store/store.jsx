import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/login/reduxLogin";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
