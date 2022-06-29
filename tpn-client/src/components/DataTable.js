import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editDataHandler } from "../redux/ducks/searchCustomerInfo";
import { customerUpdateData } from "../redux/ducks/getCustomerList";

function DataTable() {
  const data = useSelector(state => state.customerInfo.data);
  const dispatch = useDispatch();
  function submitHandler() {
    dispatch(customerUpdateData(data));
  }
  return (
    <div className="DataTable" style={{ padding: "4%" }}>
      <Table dataSource={data} scroll={{ x: 6500 }} bordered rowKey={`uuid`}>
        <Table.Column
          title="First Name"
          dataIndex="First Name"
          render={(text, b, index) => {
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={text}
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
                value={text}
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
                value={text}
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
                value={text}
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
          title="Utilities Account Number"
          dataIndex="City of Pharr or North Alamo Water Utilities Account Number"
          width={450}
          render={(text, b, index) => {
            const str =
              "City of Pharr or North Alamo Water Utilities Account Number";
            return (
              <input
                style={{ width: "100%", borderStyle: "none" }}
                value={text}
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
                value={text}
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
                value={text}
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
                value={text}
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
                value={text}
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
                value={text}
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
                value={content}
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
                value={content}
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
                value={content}
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
                value={text}
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
                value={text}
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
          width={250}
          render={(text, b, index) => {
            return (
              <input
                type="date"
                style={{ width: "100%", borderStyle: "none" }}
                value={
                  text && text !== "null"
                    ? `${text.split("T")[0]}`
                    : "1900-01-01"
                }
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
                value={text}
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
            ) : text === "Standard U4" ? (
              <select
                value={text}
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
            ) : text === "Standard U4 Mesh" ? (
              <select
                value={text}
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
            ) : text === "Upgraded U6" ? (
              <select
                value={text}
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
                value={text}
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
                value={text}
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
          title="Hardware Provisioned"
          width={200}
          dataIndex="Hardware Provisioned"
          render={(text, b, index) => {
            return text ? (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Hardware Provisioned",
                      data: e.target.value === "Completed" ? true : false,
                    })
                  )
                }
              >
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            ) : (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Hardware Provisioned",
                      data: e.target.value === "Pending" ? false : true,
                    })
                  )
                }
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="SMX Provisioned"
          dataIndex="SMX Provisioned"
          width={200}
          render={(text, b, index) => {
            return text ? (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "SMX Provisioned",
                      data: e.target.value === "Completed" ? true : false,
                    })
                  )
                }
              >
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            ) : (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "SMX Provisioned",
                      data: e.target.value === "Pending" ? false : true,
                    })
                  )
                }
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Cloud Support Provisioned"
          dataIndex="Cloud Support Provisioned"
          width={300}
          render={(text, b, index) => {
            return text ? (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Cloud Support Provisioned",
                      data: e.target.value === "Completed" ? true : false,
                    })
                  )
                }
              >
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            ) : (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Cloud Support Provisioned",
                      data: e.target.value === "Pending" ? false : true,
                    })
                  )
                }
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            );
          }}
        />
        <Table.Column
          title="Owner Approval"
          dataIndex="Owner Approval"
          width={200}
          render={(text, b, index) => {
            return text !== "Yes" || text !== "No" ? (
              <select
                value={text ? text : "N/A"}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Owner Approval",
                      data: e.target.value,
                    })
                  )
                }
              >
                <option value="N/A">N/A</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : (
              "Error"
            );
          }}
        />
        <Table.Column
          title="Service Status"
          dataIndex="Service Status"
          width={200}
          render={(text, b, index) => {
            return text ? (
              <select
                value={text}
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
                <option value="Pending">Pending</option>
              </select>
            ) : (
              <select
                value={text}
                onChange={e =>
                  dispatch(
                    editDataHandler({
                      index: index,
                      stringData: "Service Status",
                      data: e.target.value === "Pending" ? false : true,
                    })
                  )
                }
              >
                <option value="Pending">Pending</option>
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
            return text ? (
              <select
                value={text}
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
                value={text}
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
                value={text}
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
                value={text}
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
            return text ? (
              <select
                value={text}
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
                value={text}
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
                value={text}
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
