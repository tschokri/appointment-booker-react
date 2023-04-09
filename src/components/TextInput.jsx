import React from "react";

const TextInput = ({ label, type }) => {
  return (
    <div className="input">
      <label for={label}>{label}</label>
      <input type={type} name={label} id={label} />
    </div>
  );
};

export default TextInput;
