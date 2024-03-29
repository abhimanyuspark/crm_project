import { createSlice } from "@reduxjs/toolkit";
import { roleUsers, userDetails } from "../server/server";

const initialState = {
  users: [],
  loading: false,
  error: null,
  user: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserReducer: (state, action) => {
      const id = action?.payload;
      state.users = state.users.filter((i) => {
        return i.id !== id;
      });
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(roleUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(roleUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(roleUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export const { deleteUserReducer } = usersSlice.actions;
export default usersSlice.reducer;
