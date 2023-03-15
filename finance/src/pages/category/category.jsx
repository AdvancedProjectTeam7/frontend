import React, { useState } from "react";
import "./category.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Form from "./form.js";
import Rows from "./Rows";

function MyComponent() {
  const [visible, setvisible] = useState(false);

  const [rows, setRows] = useState([
    { id: 1, Name: "electricity" },
    { id: 2, Name: "food" },
    { id: 3, Name: "projects" },
    { id: 4, Name: "investment" },
    { id: 5, Name: "funding" },
    { id: 6, Name: "salaries" },
    { id: 7, Name: "rent" },
    { id: 8, Name: "debt" },
  ]); // change to false

  const addNewRow = (elem) => {
    const newArr = [...rows];
    newArr.push(elem);
    setRows(newArr);
  };

  const isvisible = () => {
    setvisible(!visible);
  };

  return (
    <div className="categoryContainer">
      <Form
        isvisible={isvisible}
        addNewRow={addNewRow}
        display={visible ? "flex" : "none"}
      />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>
              <Button
                id="add-button"
                variant="outlined"
                style={{ width: 50, color: "red" }}
                onClick={isvisible}
              >
                <AddIcon />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((eachRow) => {
            return (
              <Rows
                key={rows.indexOf(eachRow)}
                id={eachRow.id}
                name={eachRow.Name}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
