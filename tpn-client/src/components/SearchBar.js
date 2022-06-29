import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customerAccNumData,
  customerEmailData,
  customerNameData,
  customerPhoneData,
  customerPonData,
  customerStreetData,
  optionInput,
  optionTypeHandler,
  resetHandler,
} from "../redux/ducks/searchCustomerInfo";
function SearchBar() {
  const dispatch = useDispatch();
  const optionType = useSelector(state => state.customerInfo.optionType);
  const optionInputMem = useSelector(
    state => state.customerInfo.optionInputData
  );
  const records = useSelector(state => state.customerInfo.data);
  function selectHandler(e) {
    if (optionInputMem.firstname || optionInputMem.lastname) {
      dispatch(resetHandler());
    }
    dispatch(resetHandler());
    dispatch(optionTypeHandler(e.target.value));
  }

  function searchHandler(e) {
    e.preventDefault();
    switch (optionType) {
      case "street":
        dispatch(customerStreetData(optionInputMem));
        break;
      case "name":
        dispatch(customerNameData(optionInputMem));
        break;
      case "phone":
        dispatch(customerPhoneData(optionInputMem));
        break;
      case "email":
        dispatch(customerEmailData(optionInputMem));
        break;
      case "pon":
        dispatch(customerPonData(optionInputMem));
        break;
      case "accountNumber":
        dispatch(customerAccNumData(optionInputMem));
        break;
      default:
        alert(`We have run into an Error`);
    }
  }

  return (
    <div className="SearchBar" style={{ padding: "20px 0px" }}>
      <form action="" onSubmit={searchHandler}>
        {optionType === "name" ? (
          <span>
            <input
              type="text"
              placeholder="FirstName..."
              value={optionInputMem.firstname ? optionInputMem.firstname : ""}
              onChange={e =>
                dispatch(
                  optionInput({ ...optionInputMem, firstname: e.target.value })
                )
              }
            />
            <input
              type="text"
              placeholder="LastName..."
              value={optionInputMem.lastname ? optionInputMem.lastname : ""}
              onChange={e =>
                dispatch(
                  optionInput({ ...optionInputMem, lastname: e.target.value })
                )
              }
            />
          </span>
        ) : (
          <input
            type="text"
            placeholder={
              optionType === "phone"
                ? `(xxx) xxx-xxxx`
                : optionType === "email"
                ? `example@example.com`
                : optionType === "pon"
                ? "PON..."
                : optionType === "accountNumber"
                ? "Account Number..."
                : "Street Name..."
            }
            value={optionInputMem}
            onChange={e => dispatch(optionInput(e.target.value))}
          />
        )}
        <select name="Field" id="Field" onChange={selectHandler}>
          <option value="street" stlye={{ padding: "3px" }}>
            Street Name
          </option>
          <option value="name" stlye={{ padding: "3px" }}>
            Name
          </option>
          <option value="phone" stlye={{ padding: "3px" }}>
            Phone
          </option>
          <option value="email" stlye={{ padding: "3px" }}>
            Email
          </option>
          <option value="pon" stlye={{ padding: "3px" }}>
            Pon
          </option>
          <option value="accountNumber" stlye={{ padding: "3px" }}>
            Account Number
          </option>
        </select>
        <button onClick={searchHandler}>Search</button>
      </form>
      <h3>
        {records.length > 0
          ? `${records.length} Records have been found.`
          : `No Records`}
      </h3>
    </div>
  );
}

export default SearchBar;
