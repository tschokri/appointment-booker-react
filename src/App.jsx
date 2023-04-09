import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import SelectionInput from "./components/SelectionInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TextInput label="Name" type="text" />
      <TextInput label="Email" type="text" />
      <TextInput label="Telefon" type="text" />
      <SelectionInput label="Service" />
      <SelectionInput label="Standort" />
      <TextInput label="Datum" type="date" />
      <TextInput put label="Uhrzeit" type="time" />
      <button type="button" id="submit">
        Buchen
      </button>
    </div>
  );
}

export default App;
