import React, { useState } from "react";
import "./form.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

function LoginForm({ display, isvisible, addNewRow }) {
  const [name, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name);
        addNewRow({ name: 1, id: 10 });
      }}
      style={{ display: display }}
      className={"myForm"}
    >
      <Button onClick={isvisible}>
        <CloseIcon />
      </Button>
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={name}
        onChange={handleUsernameChange}
        required
        style={{ borderRadius: "20px" }}
      />
      <br />

      <button type="submit">add category</button>
    </form>
  );
}

export default LoginForm;
