import "./Input.css";
const SelectionInput = ({ label, options, onCustomChange }) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <select onChange={(e) => onCustomChange(e.target.value)}>
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
