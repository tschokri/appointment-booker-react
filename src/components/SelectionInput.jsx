import React, { useEffect, useState } from "react";
import "./Input.css";

const SelectionInput = ({ label, options }) => {
  const [option, setOption] = useState("");

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setOption(selectedOption);
    console.log(option);
  };

  return (
    <div className="input">
      <label for={label}>{label}</label>
      <select onChange={handleChange}>
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
