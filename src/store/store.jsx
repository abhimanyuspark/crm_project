import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/login/reduxLogin";
import layoutSlice from "../redux/features/layoutSlice";
import usersSlice from "../redux/features/roleUsers";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    layout: layoutSlice,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
