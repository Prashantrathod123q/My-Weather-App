import { useState } from "react";
import "./WeatherCity.css";

export default function WeatherCity(props) {
  const [city, setCity] = useState("");

  const handleChange = (e) => setCity(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getCity(city);
    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
