import React, { useContext } from "react";

import { CurrentWeatherContext } from "contexts/CurrentWeatherContext";
import { flowers } from "../apis/FlowersIcons";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  const [currentWeather] = useContext(CurrentWeatherContext);

  if (!currentWeather || !currentWeather.current) {
    return <div>Loading...</div>;
  }

  const { feels_like, temp, weather } = currentWeather.current;

  const { icon } = weather[0];

  return (
    <div className="ui weather-card">
      <div className="weather-label">
        Current Weather
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
