import React from "react";
import { useParams } from "react-router-dom";
import { API_FORECAST_WEATHER_URL } from "../apis/config";

import { flowers } from "../apis/FlowersIcons";
import useWeather from "../hooks/useWeather";
import "./Forecast.css";
import "./CurrentWeather.css";

const Forecast = (props) => {
  let { lt, lg } = useParams();
  // console.log('FORCAST lt, lg', lt, lg)
  const data = useWeather(API_FORECAST_WEATHER_URL, lt, lg);

  if (!data) {
    return <div>Loading...</div>;
  }
  // console.log("FORECAST WEATHER", data);

  const renderForecastCard = () => {
    const options = { month: "numeric", day: "numeric" };

    const rows = data.list.map((hour) => {
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
        <p>Forecast {data.city.name}</p>
      </div>

      <div className="ui segments">{renderForecastCard()}</div>
    </div>
  );
};
export default Forecast;
