import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_FORECAST_WEATHER_URL } from "../apis/config";

import { flowers } from "../apis/FlowersIcons";
import getCurrentWeather from "../apis/getCurrentWeather";
import getLocation from "../apis/getLocation";
import "./Forecast.css";
import "./CurrentWeather.css";

const Forecast = (props) => {
  const [data, setData] = useState(null);
  
  let { lt, lg } = useParams();
  const [lat, setLat] = useState(lt);
  const [lng, setLng] = useState(lg);

  lt?console.log('PARAMS', lt, lg):console.log('PARAMS UNDEFINED');
  useEffect(() => {
    if (!lat || !lng) {
      getLocation(setLat, setLng);
    }
    if (!lat || !lng) return;
    const initialUrl = `${API_FORECAST_WEATHER_URL}&lat=${lat}&lon=${lng}`;
    getCurrentWeather(setData, initialUrl);
  }, [lat, lng]);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("FORECAST WEATHER", data);

  const renderForecastCard = () => {
    const options = { month: "numeric", day: "numeric" };

    const rows = data.data.list.map((hour) => {
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
        <p>Forecast {data.data.city.name}</p>
      </div>

      <div className="ui segments">{renderForecastCard()}</div>
    </div>
  );
};
export default Forecast;
