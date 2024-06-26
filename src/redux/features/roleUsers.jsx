import { createSlice } from "@reduxjs/toolkit";
import { roleUsers, userDetails } from "../server/server";

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
    restore: (state) => {
      state.users = [];
      state.localUsers = [];
    },
    setLoading: (state, action) => {
      state.loading = action?.payload;
    },
    statusUpdate: (state, action) => {
      const { id, status } = action.payload;
      const filter = state.users.map((i) => {
        if (i.id === id) {
          return { ...i, status };
        } else {
          return i;
        }
      });
      const filter2 = state.localUsers.map((i) => {
        if (i.id === id) {
          return { ...i, status };
        } else {
          return i;
        }
      });
      return {
        ...state,
        users: filter,
        localUsers: filter2,
      };
    },
    deleteUserReducer: (state, action) => {
      const id = action?.payload;
      const filteredUsers = state.users.filter((i) => {
        return i.id !== id;
      });
      return {
        ...state,
        users: filteredUsers,
        localUsers: filteredUsers,
      };
    },
    filterUsers: (state, action) => {
      const { status, allowFollowUp, dates } = action?.payload;

      state.users = state.localUsers.filter((data) => {
        let isStatusMatched = true;
        let isFollowMatched = true;
        let isDatesMatched = true;
        const date = new Date(data?.date);

        if (status?.name !== "All" && data?.status?.name !== status?.name) {
          isStatusMatched = false;
        }

        if (
          allowFollowUp?.type !== "All" &&
          data?.allowFollowUp?.type !== allowFollowUp?.type
        ) {
          isFollowMatched = false;
        }

        if (dates?.start !== "" && date <= new Date(dates?.start)) {
          isDatesMatched = false;
        }

        if (dates?.end !== "" && date >= new Date(dates?.end)) {
          isDatesMatched = false;
        }

        return isStatusMatched && isFollowMatched && isDatesMatched;
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
      }),
});

export const {
  deleteUserReducer,
  filterUsers,
  setLoading,
  statusUpdate,
  restore,
} = usersSlice.actions;
export default usersSlice.reducer;
