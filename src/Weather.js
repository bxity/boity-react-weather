import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data)
  }



  const key = "3a5627ae326058co2dc72a44fbta8eef";
  let query = "Paris";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Monday 11:55</li>
        <li>Light Rain Showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Light Rain Showers"
            className="float-left"
          />
          <div className="float-left">
          <span className="temperature">13</span>
          <span className="unit">℃</span>
          </div>
          </div>
          </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 100%</li>
            <li>Humidity: 81%</li>
            <li>Wind: 14km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
