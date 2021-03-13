import React, { useContext } from "react";

import { flowers } from "../apis/FlowersIcons";
import "./Forecast.css";
import "./CurrentWeather.css";
import { ForecastWeatherContext } from "contexts/ForecastWeatherContext";

const Forecast = () => {
  const [forecastWeather] = useContext(ForecastWeatherContext);

  if (!forecastWeather) {
    return <div>Loading...</div>;
  }

  const renderForecastCard = () => {
    const options = { month: "numeric", day: "numeric" };

    const rows = forecastWeather.list.map((hour) => {
      const date = new Date(hour.dt * 1000);

      return (
        <div className="ui fluid three item menu " key={hour.dt}>
          <div className=" item forecast-card-dt-tm">
            <p>{date.toLocaleTimeString([], { hour: "2-digit" })}</p>
            <p>{date.toLocaleDateString(undefined, options)}</p>{" "}
          </div>
          <span className="item">
            <i
              className={`weather-icon wi ${flowers[hour.weather[0].icon]}`}
            ></i>
          </span>
          <span className="item flex-top weather-temp">
            <span>{Math.ceil(hour.main.temp)}</span>
            <span className="degree-dark"></span>F
          </span>
        </div>
      );
    });
    return <div>{rows}</div>;
  };
  return (
    <div className="ui segments">
      <div className="ui segment">
        <p>Forecast {forecastWeather.city.name} </p>
      </div>

      <div className="ui segments">{renderForecastCard()}</div>
    </div>
  );
};
export default Forecast;
