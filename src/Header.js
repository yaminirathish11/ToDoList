import React from "react";
import { useState } from "react";
import "./Header.css"

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
        <div id = "header">
        <label for="name">Enter The Name For To-Do-List</label>
        <br></br>
        <div id = "textbox">
        <input
          type="text"
          id="nameForToDoList"
          value={name}
          onChange={Name}
        ></input>
        <button type="button" id="btn1" onClick={handleButtonClick}>
          Enter
        </button>{" "}
        </div>
        </div>
        <br></br>
        <p id="paragraph"> {displayValue} TO DO LIST</p>
      </div>
    </div>
  );
};

export default Header;
