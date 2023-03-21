import React from "react";

export default function AddCategoryForm({
  handleInputChange,
  handleAddCategory,
}) {
  return (
    <div >
    <form style={{display:"flex" , justifyContent :"space-between"}}>
      <label className="label" htmlFor="category">
        Category :
        <input
          onChange={handleInputChange}
          type="text"
          id="category"
          name="name"
          style={{border : "2px solid #4f7439"}}
        />
      </label>
      <label className="label" htmlFor="type">
        type:
        <input onChange={handleInputChange} type="text" id="type" name="type"  style={{border : "2px solid #4f7439"}}/>
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddCategory();
        }}
      >
        ADD
      </button>
    </form>
    </div>
  );
}
