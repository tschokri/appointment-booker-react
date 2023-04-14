import React from "react";
import "./Input.css";

const TextInput = ({ label, type, onCustomChange }) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        id={label}
        onChange={(e) => onCustomChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
