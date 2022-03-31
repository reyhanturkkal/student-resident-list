import React from "react";
import { STUDENTS } from "../studentList";


function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}
function studentValue(pr, pr2, pr3, pr4) {
  var data = document.getElementById("studentName");

  if (data.value != "") {
    var newval =
      data.value.charAt(0).toUpperCase() + data.value.slice(1).toLowerCase();
    const result = STUDENTS.find((student) => student.name === newval);
    if (result === undefined) {
      pr(`Sorry, "${newval}" is not a verified student!`);
      setTimeout(() => pr(""), 5000);
    } else {
      if (!pr3(pr2(), result.validityDate)) {
        pr(`Sorry, ${newval}'s validty has expired!`);
        setTimeout(() => pr(""), 5000);
      } else {
        pr4(result.name);
      }
    }
  }
}
function joinValue() {
  var data = document.getElementById("joiningDate");
  if (data.value != "") {
    return data.value;
  } else {
    console.log("error");
  }
}
function clearInput() {
  var inpstd = document.getElementById("studentName");
  var inpscld = document.getElementById("joiningDate");

  inpstd.value = "";
  inpscld.value = "";
}

function Search(props) {
  var setAName = props.setStudent;
  var setError = props.setError;

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={() => {
          var ress = joinValue;
          studentValue(setError, ress, checkValidity, setAName);
          clearInput();
        }}
      >
        Add
      </button>
    </div>
  );
}
export default Search;
