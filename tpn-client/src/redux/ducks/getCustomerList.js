import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const customerURLList = process.env.REACT_APP_CUSTOMER_LIST;
const customerURLPost = process.env.REACT_APP_CUSTOMER_UPDATE;

export const customerListData = createAsyncThunk(
  "user/customerList",
  async customerlist => {
    const { data } = await axios.post(`${customerURLList}`);
    return data;
  }
);

export const customerUpdateData = createAsyncThunk(
  "user/customerUpdate",
  async customerUpdate => {
    const { data } = await axios.post(`${customerURLPost}`, {
      data: customerUpdate,
    });
    return data;
  }
);

const customerUpdateMemory = createSlice({
  name: "Customers updated Data",
  initialState: {
    loadStatus: {
      updatedStatus: "Idle",
      customerFullList: "Idle",
    },
    data: [],
  },
  reducers: {
    testUpdate: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [customerListData.pending]: state => {
      state.customerFullList = "Loading";
    },
    [customerListData.fulfilled]: (state, action) => {
      state.customerFullList = "Loaded";
      state.data = action.payload;
    },
    [customerListData.rejected]: state => {
      state.customerFullList = "Failed";
    },

    [customerUpdateData.pending]: state => {
      state.loadStatus.updatedStatus = "Loading";
    },
    [customerUpdateData.fulfilled]: (state, action) => {
      state.loadStatus.updatedStatus = "Loaded";
      state.data = action.payload;
    },
    [customerUpdateData.rejected]: state => {
      state.loadStatus.updatedStatus = "Failed";
    },
  },
});

export const { testUpdate } = customerUpdateMemory.actions;
export default customerUpdateMemory.reducer;
