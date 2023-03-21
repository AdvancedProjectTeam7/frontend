import React from "react";
import axios from "axios";

export default function Row({
  id,
  category,
  type,
  getCategories,

  categories,
  setcategories,
}) {
  const handelDelete = (id) => {
    try {
      axios
        .delete(`http://127.0.0.1:8000/api/category/${id.toString()}`)
        .then((response) => {
          getCategories();
        });
    } catch (erorr) {
      console.log(erorr);
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{category}</td>
      <td>{type}</td>
      <td>
        <button>Edit</button>
        <button
          // onClick={(e) => {
          //   handleDeleteCategory(id);
          // }}
          onClick={() => {
            handelDelete(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
