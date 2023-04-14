import React, { useEffect, useState } from "react";
import "./Input.css";

const SelectionInput = ({ label, options, onCustomChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const changedData = e.target.value;
    setSelectedValue(changedData);
    onCustomChange(changedData);
  };

  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <select onChange={handleChange}>
        <option value="">Bitte wählen</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectionInput;
