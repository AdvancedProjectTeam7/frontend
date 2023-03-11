import React from "react";
import "./category.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from '@mui/material/Button';
function FillCategory(props) {
  return (
    <div className="filed-name">
      <div className="title">
        <p> {props.id}</p>
        <p> {props.Name}</p>
        <p> {props.age}</p>
      </div>
      <div className="icon" style={{display:'flex' , justifyContent:'center' ,alignItems:'center'}}>
        <div style={{ width:'180px' , height:'40px' , display:'flex' , justifyContent:'space-around' ,alignItems:'center'}}>
        <Button variant="outlined" style={{width:50 }}><DeleteIcon/></Button>
        <Button variant="outlined" style={{width:50}}><EditIcon /></Button>

        </div>
      </div>
    </div>
  );
}

export default FillCategory;
