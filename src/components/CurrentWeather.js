import React from "react";
import { useParams } from "react-router-dom";

import { API_CURRENT_WEATHER_URL } from "../apis/config";
import { flowers } from "../apis/FlowersIcons";
import "./CurrentWeather.css";

import useWeather from "../hooks/useWeather";

const CurrentWeather = () => {

  let { lt, lg } = useParams();
 

  const [data, lat, lng] = useWeather(API_CURRENT_WEATHER_URL, lt, lg);


  if (!data || !data.current) {
    return <div>Loading...</div>;
  }

  const { feels_like, temp, weather } = data.current;

  const { icon } = weather[0];
  // console.log(data);
  // console.log("current weather data", feels_like, temp, icon);
  return (
    <div className="ui weather-card">
      <div className="weather-label">Current Weather 
      {/* <p>Lat: {lat} Lng: {lng}</p> */}
      </div>
      <div className="ui  weather-header">
        <div className="ball ui list">
          <div className="item">
            <i className={`weather-icon wi ${flowers[icon]}`}></i>
          </div>
          <div className="item weather-temp">
            {Math.ceil(temp)} <span className="degree"></span>F
          </div>
          <div className="item ">
            Real Feel {Math.ceil(feels_like)}
            <span className="degree"></span>F
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
