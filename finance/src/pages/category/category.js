import React, { useState } from "react";
import FillCategory from "./FillCategory";
import "./category.css";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Form from "./form.js";
let rows = [
  { id: 1, Name: "electricity" },
  { id: 2, Name: "food" },
  { id: 3, Name: "projects" },
  { id: 4, Name: "investment" },
  { id: 5, Name: "funding" },
  { id: 6, Name: "salaries" },
  { id: 7, Name: "rent" },
  { id: 8, Name: "debt" },
];

function MyComponent() {
  const [visible, setvisible] = useState(false);

  const isvisible = () => {
    if (visible == false) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  return (
    <div className="all" style={{ position: "relative" }}>
      {visible && (
        <div
          style={{
            height: "100vh",
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "lightGreen",
              zIndex: "1",
              borderRadius: "20px",
            }}
          >
            <button
              style={{
                fontSize: "50px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
              }}
              onClick={isvisible}
            >
              {" "}
              <CloseIcon/>
            </button>

            <Form />
          </div>
        </div>
      )}
      <div>
        <div className="table-category">
          <div className="content">
            <div className="first-line" style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  width: "345px",
                  justifyContent: "space-around",
                }}
              >
                <h4>Id</h4>
                <h4>Name</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "342px",
                }}
              >
                <Button
                  id="add-button"
                  variant="outlined"
                  style={{ width: 50 }}
                  onClick={isvisible}
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
            {rows.map((ele) => {
              return <FillCategory id={ele.id} Name={ele.Name}  />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
