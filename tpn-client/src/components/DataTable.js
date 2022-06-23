import React from "react";
import { Table } from "antd";
// import { ColumnsType } from "antd/lib/table";
import { useDispatch, useSelector } from "react-redux";
import { editDataHandler } from "../redux/ducks/searchCustomerInfo";
import { customerUpdateData } from "../redux/ducks/getCustomerList";

function DataTable() {
  const data = useSelector(state => state.customerInfo.data);
  const dispatch = useDispatch();
  function submitHandler() {
    // dispatch(testUpdate(data));
    dispatch(customerUpdateData(data));
  }
  return (
    <div className="DataTable" style={{ padding: "4%" }}>
      <Table
        dataSource={[...data]}
        scroll={{ x: 6500 }}
        bordered
        rowKey={`uuid`}
      >
        <Table.Column
          title="First Name"
          dataIndex="First Name"
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["First Name"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "First Name",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
          fixed="left"
          width={150}
        />
        <Table.Column
          title="Last Name"
          dataIndex="Last Name"
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Last Name"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Last Name",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
          fixed="left"
          width={150}
        />
        <Table.Column title="Date" dataIndex="Date" width={150} />
        <Table.Column
          title="Email"
          dataIndex="Email"
          width={300}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Email"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Email",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Phone Number"
          dataIndex="Phone Number"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Phone Number"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Phone Number",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="City of Pharr or North Alamo Water Utilities Account Number"
          dataIndex="City of Pharr or North Alamo Water Utilities Account Number"
          width={450}
          render={(text, b, index) => {
            const str =
              "City of Pharr or North Alamo Water Utilities Account Number";
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index][str]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: str,
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Do You Own or Rent At This Location?"
          dataIndex="Do You Own or Rent At This Location?"
          width={350}
        />
        <Table.Column
          title="Owner First Name"
          dataIndex="Owner First Name"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Owner First Name"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Owner First Name",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Owner Last Name"
          dataIndex="Owner Last Name"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Owner Last Name"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Owner Last Name",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Property Owner Phone"
          dataIndex="Property Owner Phone"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Property Owner Phone"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Property Owner Phone",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Street Address"
          dataIndex="Street Address"
          width={300}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Street Address"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Street Address",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Street Address Line 2"
          dataIndex="Street Address Line 2"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Street Address Line 2"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Street Address Line 2",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column title="City" dataIndex="City" width={100} />
        <Table.Column
          title="State / Province"
          dataIndex="State / Province"
          width={150}
        />
        <Table.Column
          title="Postal / Zip Code"
          dataIndex="Postal / Zip Code"
          width={150}
        />
        <Table.Column
          title="What part of Pharr do you live in?"
          dataIndex="What part of Pharr do you live in?"
          width={300}
          render={(content, b, index) => {
            return data[index]["What part of Pharr do you live in?"] ===
              `North Pharr (Phase V)` ? (
              <select
                value={data[index]["What part of Pharr do you live in?"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "What part of Pharr do you live in?",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option>{content}</option>
                <option>{`Central Pharr (Phase IV)`}</option>
                <option>{`South Pharr (Phase III)`}</option>
              </select>
            ) : data[index]["What part of Pharr do you live in?"] ===
              `Central Pharr (Phase IV)` ? (
              <select
                value={data[index]["What part of Pharr do you live in?"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "What part of Pharr do you live in?",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option>{content}</option>
                <option>{`North Pharr (Phase V)`}</option>
                <option>{`South Pharr (Phase III)`}</option>
              </select>
            ) : (
              <select
                value={data[index]["What part of Pharr do you Live in?"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "What part of Pharr do you Live in?",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option>{content}</option>
                <option>{`North Pharr (Phase V)`}</option>
                <option>{`Central Pharr (Phase IV)`}</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Fiber Optics Plans"
          dataIndex="Fiber Optics Plans"
          width={500}
        />
        <Table.Column
          title="Pay with Credit Card"
          dataIndex="Pay with Credit Card"
          width={200}
        />
        <Table.Column
          title="Utility Account Holder"
          dataIndex="Utility Account Holder"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Utility Account Holder"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Utility Account Holder",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="PON"
          dataIndex="PON"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["PON"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "PON",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Install Date"
          dataIndex="Install Date"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Install Date"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Install Date",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Router Type"
          dataIndex="Router Type"
          width={200}
          render={(text, b, index) => {
            return data[index]["Router Type"] === "" ||
              !data[index]["Router Type"] ||
              data[index]["Router Type"] === "N/A" ? (
              <select
                value={data[index]["Router Type"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Router Type",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option value="N/A">N/A</option>
                <option value="Standard U4">Standard U4</option>
                <option value="Standard U4 Mesh">Standard U4 Mesh</option>
                <option value="Upgraded U6">Upgraded U6</option>
                <option value="Upgraded U6 Mesh">Upgraded U6 Mesh</option>
              </select>
            ) : data[index]["Router Type"] === "Standard U4" ? (
              <select
                value={data[index]["Router Type"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Router Type",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option value="Standard U4">Standard U4</option>
                <option value="Standard U4 Mesh">Standard U4 Mesh</option>
                <option value="Upgraded U6">Upgraded U6</option>
                <option value="Upgraded U6 Mesh">Upgraded U6 Mesh</option>
                <option value="N/A">N/A</option>
              </select>
            ) : data[index]["Router Type"] === "Standard U4 Mesh" ? (
              <select
                value={data[index]["Router Type"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Router Type",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option value="Standard U4 Mesh">Standard U4 Mesh</option>
                <option value="Standard U4">Standard U4</option>
                <option value="Upgraded U6">Upgraded U6</option>
                <option value="Upgraded U6 Mesh">Upgraded U6 Mesh</option>
                <option value="N/A">N/A</option>
              </select>
            ) : data[index]["Router Type"] === "Upgraded U6" ? (
              <select
                value={data[index]["Router Type"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Router Type",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option value="Upgraded U6">Upgraded U6</option>
                <option value="Standard U4 Mesh">Standard U4 Mesh</option>
                <option value="Standard U4">Standard U4</option>
                <option value="Upgraded U6 Mesh">Upgraded U6 Mesh</option>
                <option value="N/A">N/A</option>
              </select>
            ) : (
              <select
                value={data[index]["Router Type"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Router Type",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option value="Upgraded U6 Mesh">Upgraded U6 Mesh</option>
                <option value="Upgraded U6">Upgraded U6</option>
                <option value="Standard U4 Mesh">Standard U4 Mesh</option>
                <option value="Standard U4">Standard U4</option>
                <option value="N/A">N/A</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Mesh Amount"
          dataIndex="Mesh Amount"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Mesh Amount"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Mesh Amount",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Owner Approval"
          dataIndex="Owner Approval"
          width={200}
          render={(text, b, index) => {
            return data[index]["Owner Approval"] ? (
              <select
                value={data[index]["Owner Approval"] ? "Yes" : "No"}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Owner Approval",
                      data: e.target.value === "Yes" ? true : false,
                    })
                  )
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : (
              <select
                value={data[index]["Owner Approval"] ? "Yes" : "No"}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Owner Approval",
                      data: e.target.value === "No" ? false : true,
                    })
                  )
                }
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Service Status"
          dataIndex="Service Status"
          width={200}
          render={(text, b, index) => {
            return data[index]["Service Status"] ? (
              <select
                value={data[index]["Service Status"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Service Status",
                      data: e.target.value === "Active" ? true : false,
                    })
                  )
                }
              >
                <option value="Active">Active</option>
                <option value="Disabled">Disabled</option>
              </select>
            ) : (
              <select
                value={data[index]["Service Status"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Service Status",
                      data: e.target.value === "Disabled" ? false : true,
                    })
                  )
                }
              >
                <option value="Disabled">Disabled</option>
                <option value="Active">Active</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Refund"
          dataIndex="Refund"
          width={200}
          render={(text, b, index) => {
            return data[index]["Refund"] ? (
              <select
                value={data[index]["Refund"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Refund",
                      data: e.target.value === "Refunded" ? true : false,
                    })
                  )
                }
              >
                <option value="Refunded">Refunded</option>
                <option value="N/A">N/A</option>
              </select>
            ) : (
              <select
                value={data[index]["Refund"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Refund",
                      data: e.target.value === "N/A" ? false : true,
                    })
                  )
                }
              >
                <option value="N/A">N/A</option>
                <option value="Refunded">Refunded</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Refund Type"
          dataIndex="Refund Type"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Refund Type"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Refund Type",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Notes"
          dataIndex="Notes"
          width={500}
          render={(text, b, index) => {
            return (
              <textarea
                style={{ width: "100%", borderStyle: "none" }}
                maxLength="1028"
                value={data[index]["Notes"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Notes",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
        <Table.Column
          title="Verified"
          dataIndex="Verified"
          width={200}
          render={(text, b, index) => {
            return data[index]["Verified"] ? (
              <select
                value={data[index]["Verified"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Verified",
                      data: e.target.value === "Yes" ? true : false,
                    })
                  )
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : (
              <select
                value={data[index]["Verified"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Verified",
                      data: e.target.value === "No" ? false : true,
                    })
                  )
                }
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Verified by"
          dataIndex="Verified by"
          width={200}
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={data[index]["Verified by"]}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Verified by",
                      data: e.target.value,
                    })
                  )
                }
              />
            );
          }}
        />
      </Table>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default DataTable;
