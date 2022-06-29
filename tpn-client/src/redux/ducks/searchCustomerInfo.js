import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const customerURLEmails = process.env.REACT_APP_EMAIL;
const customerURLPhones = process.env.REACT_APP_PHONE;
const customerURLNames = process.env.REACT_APP_NAME;
const customerURLStreets = process.env.REACT_APP_CUSTOMER_STREET;
const customerURLPon = process.env.REACT_APP_PON;
const customerURLAcctNum = process.env.REACT_APP_ACCTNUM;
export const customerAccNumData = createAsyncThunk(
  "user/customerAccNum",
  async customerAccNum => {
    const { data } = await axios.post(`${customerURLAcctNum}`, {
      data: customerAccNum,
    });
    return data;
  }
);
export const customerPonData = createAsyncThunk(
  "user/customerPon",
  async customerPon => {
    const { data } = await axios.post(`${customerURLPon}`, {
      data: customerPon,
    });
    return data;
  }
);

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
export const customerStreetData = createAsyncThunk(
  "user/customerStreet",
  async customerStreet => {
    const { data } = await axios.post(`${customerURLStreets}`, {
      data: customerStreet,
    });
    return data;
  }
);
const customerMemory = createSlice({
  name: "customers data",
  initialState: {
    loadStatus: {
      emailStatus: "Idle",
      phoneStatus: "Idle",
      nameStatus: "Idle",
      StreetStatus: "Idle",
      ponStatus: "Idle",
      accountNumberStatus: "Idle",
    },
    data: [],
    optionInputData: "",
    optionType: "street",
  },
  reducers: {
    optionInput: (state, action) => {
      state.optionInputData = action.payload;
    },
    optionTypeHandler: (state, action) => {
      state.optionType = action.payload;
    },
    resetHandler: state => {
      state.optionInputData = "";
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
    [customerAccNumData.pending]: state => {
      state.loadStatus.accountNumberStatus = "Loading";
      state.data = [];
    },
    [customerAccNumData.fulfilled]: (state, action) => {
      state.loadStatus.accountNumberStatus = "Loaded";
      state.data = action.payload;
    },
    [customerAccNumData.rejected]: state => {
      state.loadStatus.accountNumberStatus = "Failed";
      state.data = [];
    },
    [customerPonData.pending]: state => {
      state.loadStatus.ponStatus = "Loading";
      state.data = [];
    },
    [customerPonData.fulfilled]: (state, action) => {
      state.loadStatus.ponStatus = "Loaded";
      state.data = action.payload;
    },
    [customerPonData.rejected]: state => {
      state.loadStatus.ponStatus = "Failed";
      state.data = [];
    },
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

    [customerStreetData.pending]: state => {
      state.loadStatus.StreetStatus = "Loading";
      state.data = [];
    },
    [customerStreetData.fulfilled]: (state, action) => {
      state.loadStatus.StreetStatus = "Loaded";
      state.data = action.payload;
    },
    [customerStreetData.rejected]: state => {
      state.loadStatus.StreetStatus = "Failed";
      state.data = [];
    },
  },
});

export const { optionInput, optionTypeHandler, resetHandler, editDataHandler } =
  customerMemory.actions;
export default customerMemory.reducer;
