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
  const response = await axios.post(`${apiUrl}/users`, data);
  return response.data;
});

export const userDetails = createAsyncThunk("user/userDetails", async (id) => {
  const response = await axios.get(`${apiUrl}/users/${id}`);
  return response.data;
});

export const editUser = createAsyncThunk("user/patchUser", async (data) => {
  const response = await axios.patch(`${apiUrl}/users/${data.id}`, data);
  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    await axios.delete(`${apiUrl}/users/${id}`);
    return id;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteUserEvent = createAsyncThunk(
  "event/deleteUserEvent",
  async ({ userId, eventId }) => {
    try {
      const userResponse = await axios.get(`${apiUrl}/users/${userId}`);
      const user = userResponse.data;
      const eventIndex = user.events.findIndex((event) => event.id === eventId);

      if (eventIndex !== -1) {
        user.events.splice(eventIndex, 1);
        await axios.patch(`${apiUrl}/users/${userId}`, user);
        return { userId, eventId };
      } else {
        throw new Error("Event not found in user's events array");
      }
    } catch (error) {
      console.log(error.message);
      throw rejectWithValue(error.message);
    }
  }
);
