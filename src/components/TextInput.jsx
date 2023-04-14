import { useEffect, useState } from "react";
import React from "react";

const TextInput = ({ label, type, onCustomChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const changedData = e.target.value;
    setInputValue(changedData);
    onCustomChange(changedData);
  };

  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        id={label}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
