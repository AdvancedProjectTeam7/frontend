import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import "./categories.css";
import AddCategoryForm from "./AddCategoryForm";

export default function Categories() {
  const URL = "http://localhost:8000/";

  const [categories, setcategories] = useState(null);
  const [visible, setVisible] = useState(false);

  const getCategories = () => {
    axios.get(`${URL}api/category`).then((res) => {
      console.log(res.data.data);
      setcategories(res.data.data);
    });
  };
  useEffect(getCategories, []);
  const categoryData = {
    name: "",
    type: "",
  };
  const handleInputChange = (event) => {
    const dataInput = event.target.value;
    const cloneGoalData = categoryData;
    cloneGoalData[event.target.name] = dataInput;
  };
  const handleAddCategory = () => {
    axios.post(`${URL}api/category`, categoryData).then((res) => {
      console.log(res);
      getCategories();
    });
  };

  if (!categories) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <div className="form">
        {visible ? (
          <AddCategoryForm
            handleAddCategory={handleAddCategory}
            handleInputChange={handleInputChange}
          />
        ) : (
          <></>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categ</th>
            <th>Type</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((eachCategory) => {
            return (
              <Row
                getCategories={getCategories}
                categories={categories}
                setcategories={setcategories}
                key={categories.indexOf(eachCategory)}
                id={eachCategory.id}
                type={eachCategory.type}
                category={eachCategory.name}
              />
            );
          })}
        </tbody>
      </table>
      <button
        className="addButton"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "x" : "+"}
      </button>
    </div>
  );
}
