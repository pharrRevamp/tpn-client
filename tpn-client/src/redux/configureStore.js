import { configureStore } from "@reduxjs/toolkit";
import customerInfoReducer from "./ducks/searchCustomerInfo";
import customerUpdateReducer from "./ducks/getCustomerList";

const store = configureStore({
  reducer: {
    customerInfo: customerInfoReducer,
    updatedInfo: customerUpdateReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({ serializableCheck: false }),
  //   devTools: false,
});
export default store;
