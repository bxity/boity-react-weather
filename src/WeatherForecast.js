import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);

  if (loaded) {
     return (
       <div className="WeatherForecast">
         <div className="row">
           <div className="col">
            < WeatherForecastDay data={forecast[0]} />
           </div>
         </div>
       </div>
     );

  } else {

  let apiKey = "31b4e5b138aa68767a86bde182ff2f27";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;

}}
