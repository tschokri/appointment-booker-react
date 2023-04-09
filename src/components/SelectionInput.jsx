import React from "react";
import "./Input.css";

const SelectionInput = ({ label }) => {
  return (
    <div className="input">
      <label for={label}>{label}</label>
      <select name={label} id={label} />
    </div>
  );
};

export default SelectionInput;
