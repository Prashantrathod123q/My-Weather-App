import { useState } from "react";
import WeatherCity from "./WeatherCity";
import WeatherDetails from "./WeatherDetails";
import loadimg from "../loading.gif";
import "./Main.css";

export default function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCity = (cityName) => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=751d66e130befad396405dc13796a57c&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`City not found!`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="content">
      <h2 className="heading">Weather App</h2>
      <div className="weather-search">
        <WeatherCity getCity={getCity} />
      </div>
      <div className="description">
        {loading ? (
          <img
            src={loadimg}
            alt="Image could not be loaded!"
            width="100px"
            height="100px"
          />
        ) : error ? (
          <span className="error">Error occured! {error}</span>
        ) : (
          data && (
            <WeatherDetails
              cityName={data.name}
              cityTemp={data.main.temp}
              cityIcon={data.weather[0].icon}
              cityDesc={data.weather[0].description}
            />
          )
        )}
      </div>
    </div>
  );
}
