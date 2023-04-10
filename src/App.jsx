import { useEffect, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import SelectionInput from "./components/SelectionInput";

function App() {
  const serviceOptions = [
    { value: "120686", label: "Anmeldung einer Wohnung" },
    { value: "120703", label: "Personalausweis beantragen" },
    { value: "324325", label: "Personalausweis abholen" },
  ];

  const locationOptions = [
    { value: "122231", label: "Bürgeramt 1 (Kreuzberg), Yorckstraße" },
    {
      value: "327346",
      label: "Bürgeramt 1 (Kreuzberg), Yorckstraße - Vorzugstermine",
    },
  ];

  return (
    <div className="App">
      <TextInput label="Name" type="text" />
      <TextInput label="Email" type="text" />
      <TextInput label="Telefon" type="text" />
      <SelectionInput label="Dienstleistung" options={serviceOptions} />
      <SelectionInput label="Standort" options={locationOptions} />
      <TextInput label="Datum" type="date" />
      <TextInput put label="Uhrzeit" type="time" />
      <button type="button" id="submit">
        Buchen
      </button>
    </div>
  );
}

export default App;
