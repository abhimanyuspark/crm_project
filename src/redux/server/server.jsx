import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = "http://localhost:3500";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/users?email=${email}`);
      const user = response.data[0];

      if (user.password === password) {
        return user;
      } else {
        return rejectWithValue({ password: "Please Enter valid credentials" });
      }
    } catch (error) {
      return rejectWithValue({ email: "Please Enter valid email" });
    }
  }
);

export const refreshAuthUser = createAsyncThunk(
  "auth/refreshAuthUser",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/users?email=${email}`);
      const user = response.data[0];
      return user;
    } catch (error) {
      return rejectWithValue({ email: "Please Enter valid email" });
    }
  }
);

export const roleUsers = createAsyncThunk(
  "users/roleUsers",
  async (role, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/users?role=${role}`);
      const users = response.data;
      return users;
    } catch (error) {
      return rejectWithValue("Role is not persent in a api");
    }
  }
);

export const updateStatus = createAsyncThunk(
  "user/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      await axios.patch(`${apiUrl}/users/${id}`, { status });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk("user/postUser", async (data) => {
  const response = await axios.post(`${apiUrl}/user`, data);
  return response.data;
});

export const editUser = createAsyncThunk("user/patchUser", async (data) => {
  const response = await axios.patch(`${apiUrl}/user/${data.id}`, data);
  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    await axios.delete(`${apiUrl}/user/${id}`);
    return id;
  } catch (error) {
    console.log(error.message);
  }
});
