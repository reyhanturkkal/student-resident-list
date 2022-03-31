import React from "react";

function ResidentsList(props) {
  const list = [props];
  const list2 = list[0].residenSt;

  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {list2.map((item, i) => (
          <li key={i} className="list-group-item">
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
