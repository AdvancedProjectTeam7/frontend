import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";


const Rows = ({ id, name }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td className="buttonsContainer">
        <Button variant="outlined" style={{ width: 50 }}>
          <DeleteIcon />
        </Button>
        <Button variant="outlined" style={{ width: 50 }}>
          <EditIcon />
        </Button>
      </td>
    </tr>
  );
};

export default Rows;
