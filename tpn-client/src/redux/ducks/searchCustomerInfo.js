import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const customerURLEmails = process.env.REACT_APP_EMAIL;
const customerURLPhones = process.env.REACT_APP_PHONE;
const customerURLNames = process.env.REACT_APP_NAME;

export const customerEmailData = createAsyncThunk(
  "user/customerEmail",
  async customerEmail => {
    const { data } = await axios.post(`${customerURLEmails}`, {
      data: customerEmail,
    });
    return data;
  }
);
export const customerPhoneData = createAsyncThunk(
  "user/customerPhone",
  async customerPhone => {
    const { data } = await axios.post(`${customerURLPhones}`, {
      data: customerPhone,
    });
    return data;
  }
);
export const customerNameData = createAsyncThunk(
  "user/customerName",
  async customerName => {
    const { data } = await axios.post(`${customerURLNames}`, {
      data: customerName,
    });
    // console.log(customerName);
    return data;
  }
);

const customerMemory = createSlice({
  name: "customers data",
  initialState: {
    loadStatus: {
      emailStatus: "",
      phoneStatus: "",
      nameStatus: "",
    },
    data: [],
    optionInputData: "",
    optionType: "list",
  },
  reducers: {
    optionInput: (state, action) => {
      state.optionInputData = action.payload;
    },
    optionTypeHandler: (state, action) => {
      state.optionType = action.payload;
    },
    resetHandler: state => {
      state.optionInputData = [];
    },
    editDataHandler: (state, action) => {
      const obj = action.payload;
      // console.log(obj);
      const newArr = state.data.map((item, index) => {
        if (index === obj.index) {
          return { ...state.data[index], [obj.stringData]: obj.data };
        }
        return item;
      });
      state.data = newArr;
    },
  },
  extraReducers: {
    [customerEmailData.pending]: state => {
      state.loadStatus.emailStatus = "Loading";
      state.data = [];
    },
    [customerEmailData.fulfilled]: (state, action) => {
      state.loadStatus.emailStatus = "Loaded";
      state.data = action.payload;
    },
    [customerEmailData.rejected]: state => {
      state.loadStatus.emailStatus = "Failed";
      state.data = [];
    },
    [customerPhoneData.pending]: state => {
      state.loadStatus.phoneStatus = "Loading";
      state.data = [];
    },
    [customerPhoneData.fulfilled]: (state, action) => {
      state.loadStatus.phoneStatus = "Loaded";
      state.data = action.payload;
    },
    [customerPhoneData.rejected]: state => {
      state.loadStatus.phoneStatus = "Failed";
      state.data = [];
    },
    [customerNameData.pending]: state => {
      state.loadStatus.nameStatus = "Loading";
      state.data = [];
    },
    [customerNameData.fulfilled]: (state, action) => {
      state.loadStatus.nameStatus = "Loaded";
      state.data = action.payload;
    },
    [customerNameData.rejected]: state => {
      state.loadStatus.nameStatus = "Failed";
      state.data = [];
    },
  },
});

export const { optionInput, optionTypeHandler, resetHandler, editDataHandler } =
  customerMemory.actions;
export default customerMemory.reducer;
