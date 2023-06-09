import React, { useState } from "react";
import "./Content.css";

const Content = () => {
  
  const [checked, setChecked] = useState(0);
  const [remainingBox, setRemainingBox] = useState(5);

  const handleCheckboxChange = () => {
    
    const inputElems = document.getElementsByClassName("boxes");
    const totalBoxes = inputElems.length;
    let count = 0;


    for (let i = 0; i < totalBoxes; i++) {
      if (inputElems[i].type === "checkbox" && inputElems[i].checked) {
        count++;
      }
    }

    setChecked(count);
    setRemainingBox(totalBoxes - count);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="boxes"
        id="btn1"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="water">Drink Water</label>
      <br />
      <input
        type="checkbox"
        className="boxes"
        id="btn2"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="exercise">Exercise</label>
      <br />
      <input
        type="checkbox"
        className="boxes"
        id="btn3"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="study">Learn React</label>
      <br />
      <input
        type="checkbox"
        className="boxes"
        id="btn4"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="breakfast">Make Breakfast</label>
      <br />
      <input
        type="checkbox"
        className="boxes"
        id="btn5"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="german">Learn German</label>
      <br />
      <p>
        {checked} boxes checked, {remainingBox} boxes remaining
      </p>
    </div>
  );
};

export default Content;
