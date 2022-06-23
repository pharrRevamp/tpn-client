import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customerEmailData,
  customerNameData,
  customerPhoneData,
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
        </select>
        <button onClick={searchHandler}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
