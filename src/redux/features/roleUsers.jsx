import { createSlice } from "@reduxjs/toolkit";
import { roleUsers, userDetails, filterUsers } from "../server/server";

const initialState = {
  users: [],
  localUsers: [],
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
      const filteredUsers = state.users.filter((i) => {
        return i.id !== id;
      });
      return {
        ...state,
        users: filteredUsers,
      };
    },
    dateFilter: (state, action) => {
      const { start, end } = action?.payload;
      const filteredUsers = state.localUsers.filter((item) => {
        if (start && end) {
          const d = new Date(item?.date);
          return d >= start && d <= end;
        }
        return true;
      });
      return {
        ...state,
        users: filteredUsers,
      };
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
        state.localUsers = action.payload;
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
      })
      .addCase(filterUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.localUsers = action.payload;
      })
      .addCase(filterUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export const { deleteUserReducer, dateFilter } = usersSlice.actions;
export default usersSlice.reducer;
