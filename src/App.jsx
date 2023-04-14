import { useEffect, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import SelectionInput from "./components/SelectionInput";
import { serviceOptions, locationOptions } from "./Constants";

function App() {
  const [values, setValues] = useState({});

  const handleChange = (key, value) => {
    setValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const userData = {
    name: values["name"],
    email: values["email"],
    phone: values["phone"],
  };

  const appointmentData = {
    service: values["service"],
    location: values["location"],
    date: values["date"],
    time: values["time"],
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const handleClick = () => {
    fetch("http://127.0.0.1:5500/bookappointment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ userData, appointmentData }),
    })
      .then((response) => response.text())
      .then((text) => console.log(text));
  };

  return (
    <div className="App">
      <TextInput
        label="Name"
        type="text"
        onCustomChange={(value) => handleChange("name", value)}
      />
      <TextInput
        label="Email"
        type="text"
        onCustomChange={(value) => handleChange("email", value)}
      />
      <TextInput
        label="Telefon"
        type="text"
        onCustomChange={(value) => handleChange("phone", value)}
      />
      <SelectionInput
        label="Dienstleistung"
        options={serviceOptions}
        onCustomChange={(value) => handleChange("service", value)}
      />
      <SelectionInput
        label="Standort"
        options={locationOptions}
        onCustomChange={(value) => handleChange("location", value)}
      />
      <TextInput
        label="Datum"
        type="date"
        onCustomChange={(value) => handleChange("date", value)}
      />
      <TextInput
        put
        label="Uhrzeit"
        type="time"
        onCustomChange={(value) => handleChange("time", value)}
      />
      <button type="button" id="submit" onClick={handleClick}>
        Buchen
      </button>
    </div>
  );
}

export default App;
