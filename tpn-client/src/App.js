import "./App.css";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
import { useSelector } from "react-redux";
function App() {
  const uploadStatus = useSelector(
    state => state.updatedInfo.loadStatus.updatedStatus
  );
  // console.log(uploadStatus);
  useEffect(() => {
    if (uploadStatus === "Loaded") {
      alert("Your data has successfully been uploaded!");
    } else if (uploadStatus === "Failed") {
      alert(
        "Your data has Failed been uploaded! Please Refine your search or contact Michael Trevino ext: 4912"
      );
    }
  }, [uploadStatus]);
  return (
    <div className="App">
      <SearchBar />
      <DataTable />
    </div>
  );
}

export default App;
