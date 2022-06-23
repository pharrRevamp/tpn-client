import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customerEmailData,
  customerNameData,
  customerPhoneData,
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

  function selectHandler(e) {
    if (optionInputMem.firstname || optionInputMem.lastname) {
      dispatch(resetHandler());
    }
    dispatch(optionTypeHandler(e.target.value));
  }

  function searchHandler(e) {
    e.preventDefault();
    switch (optionType) {
      case "list":
        console.log(`we got list`);
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
      default:
        alert(`We have into an Error`);
    }
  }

  return (
    <div className="SearchBar">
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
                : "Click Search Please..."
            }
            value={optionInputMem}
            onChange={e => dispatch(optionInput(e.target.value))}
          />
        )}
        <select name="Field" id="Field" onChange={selectHandler}>
          <option value="list">Full List</option>
          <option value="name">Name</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        <button onClick={searchHandler}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
