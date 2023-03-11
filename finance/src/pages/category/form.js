import React, { useState } from "react";
import "./form.css"
function LoginForm() {
  const [name, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission (e.g. validate credentials and log user in)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={name}
        onChange={handleUsernameChange}
        required
        style={{borderRadius: '20px'}}
      />
      <br />
      
      <button type="submit">add category</button>
    </form>
  );
  
}

export default LoginForm;
