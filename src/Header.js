import React from "react";
import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const Name = (event) => {
    setName(event.target.value);
  };
  const handleButtonClick = () => {
    setDisplayValue(name);
  };

  return (
    <div>
      <div>
        <label for="name">Enter The Name For To-Do-List</label>
        <br></br>
        <input
          type="text"
          id="nameForToDoList"
          value={name}
          onChange={Name}
        ></input>
        <button type="button" id="btn1" onClick={handleButtonClick}>
          Enter
        </button>{" "}
        <br></br>
        <p id="paragraph"> {displayValue} TO DO LIST</p>
      </div>
    </div>
  );
};

export default Header;
