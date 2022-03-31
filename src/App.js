import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";

function App() {
  const [listname, setListName] = useState([]);
  const [error, setError] = useState("");

  function setStudentName(param) {
    setListName([...listname, param]);
  }
  const errorMessage = (param) => {
    setError(param);
  };

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          setStudent={setStudentName}
          setError={errorMessage}
          message={error}
        />
        <Error message={error} />
        <ResidentsList residenSt={listname} />
      </div>
    </div>
  );
}

export default App;
