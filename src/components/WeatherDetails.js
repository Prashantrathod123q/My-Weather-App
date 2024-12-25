import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <>
      <strong>City:</strong> <span> {props.cityName}</span> <br />
      <strong>Temp:</strong> <span> {props.cityTemp}&deg;C</span>
      <img
        style={{ textAlign: `right` }}
        src={`https://openweathermap.org/img/w/${props.cityIcon}.png`}
        alt="Image could not be loaded"
        align="center"
      />
      <br /> <strong>Description:</strong>
      <span>{props.cityDesc}</span>
    </>
  );
}
