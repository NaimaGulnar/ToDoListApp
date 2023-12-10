/* eslint-disable react/prop-types */
import { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  return (
    <div className="inputContainer">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Add an item here"
        className="input"
      />
      <button
        className="add"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
