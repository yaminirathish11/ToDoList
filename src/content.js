import React, {useState} from "react";
import "./Content.css";
import { FaTrash } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    { id: "checkbox1", label: "Drink Water", checked: false },
    { id: "checkbox2", label: "Exercise", checked: false },
    { id: "checkbox3", label: "Learn React", checked: false }
  ]);
  const [newLabel, setNewLabel] = useState("");

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteCheckbox = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const addCheckbox = () => {
    if (newLabel.trim() === "") {
      return (alert("Cant add empty checklist")); // Prevent adding empty labels
    }

    const newId = `checkbox${items.length + 1}`;
    const newItem = { id: newId, label: newLabel, checked: false };

    setItems((prevItems) => [...prevItems, newItem]);
    setNewLabel(""); // Reset the new label input
  };

  const handleNewLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const checkedCount = items.filter((item) => item.checked).length;
  const remainingBox = items.length - checkedCount;

  return (
    <div id="box">
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            className="boxes"
            id={item.id}
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label htmlFor={item.id}>{item.label}</label>
          <FaTrash role="button" onClick={() => deleteCheckbox(item.id)} />
          <br />
        </div>
      ))}
      <div>
        <input
          type="text"
          value={newLabel}
          onChange={handleNewLabelChange}
          placeholder="Add checklist"
        />
        <button onClick={addCheckbox}>Add</button>
      </div>
      <p>
       {checkedCount} {checkedCount <= 1 ? "box checked" : "boxes checked"},{remainingBox} {remainingBox <= 1 ? "box remaining" : "boxes remaining"}
      </p>
    </div>
  );
};

export default Content;
