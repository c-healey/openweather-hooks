import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';


import { API_CURRENT_WEATHER_URL } from "../apis/config";
import { flowers } from "../apis/FlowersIcons";
import "./CurrentWeather.css";
import getCurrentWeather from "../apis/getCurrentWeather";
import getLocation from "../apis/getLocation";

const CurrentWeather = (props) => {
  let { lt, lg } = useParams();
  const [data, setData] = useState(null);
  
  const [lat, setLat] = useState(lt);
  const [lng, setLng] = useState(lg);

  useEffect(() => {
    
    if (!lat || !lng) {
      getLocation(setLat, setLng);
    }
    if (!lat || !lng) return;

    const initialUrl = `${API_CURRENT_WEATHER_URL}&lat=${lat}&lon=${lng}`;

    getCurrentWeather(setData, initialUrl);
  }, [lat, lng]);

  if (!data || !data.data || !data.data.current) {
    return <div>Loading...</div>;
  }
  console.log(data.data);
  const { feels_like, temp, weather } = data.data.current;

  const { icon } = weather[0];
  console.log("current weather data", feels_like, temp, icon);
  return (
    <div className="ui weather-card">
      <div className="weather-label">Current Weather</div>
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
