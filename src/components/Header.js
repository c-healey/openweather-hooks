import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import SearchPlaces from "./SearchPlaces";
import getGeoLocation, { validLatLng } from "apis/getGeoLocation";
import getAxiosData from "apis/getAxiosData";
import { LocationContext } from "../contexts/LocationContext";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";
import { ForecastWeatherContext } from "contexts/ForecastWeatherContext";
import {
  API_CURRENT_WEATHER_URL,
  API_FORECAST_WEATHER_URL,
} from "../apis/config";

const Header = () => {
  const [path, setPath] = useState("");
  const [lat, setLat, lng, setLng] = useContext(LocationContext);
  const [, setCurrentWeather] = useContext(CurrentWeatherContext);
  const [, setForecastWeather] = useContext(ForecastWeatherContext);

  const getLatLngFromUrl = () => {
    const latlng = window.location.hash
      .split("/")
      .filter((el) => el !== "#" && el.length && !isNaN(el));
    if (latlng.length === 2 && validLatLng(...latlng)) {
      setLat(latlng[0]);
      setLng(latlng[1]);
      document.title = `Lat: ${lat} Lng: ${lng}`;
      setPath(latlng.join("/"));
      return latlng;
    }
    getGeoLocation(setLat, setLng);
    return [];
  };

  window.addEventListener("popstate", (event) => {
    getLatLngFromUrl();
  });

  const panTo = ({ lat, lng }) => {
    document.title = `Lat: ${lat} Lng: ${lng}`;
    const onForecastPage = window.location.hash
      .split("/")
      .filter((el) => el === "forecast").length;
    setPath([lat, lng].join("/"));
    window.location.hash = `#/${onForecastPage ? "forecast/" : ""}${[
      lat,
      lng,
    ].join("/")}`;
  };

  useEffect(() => {
    getLatLngFromUrl();
  }, []);

  useEffect(() => {
    if (lat && lng) {
      const cwUrl = `${API_CURRENT_WEATHER_URL}&lat=${lat}&lon=${lng}`;
      getAxiosData(cwUrl, setCurrentWeather);
      const fcUrl = `${API_FORECAST_WEATHER_URL}&lat=${lat}&lon=${lng}`;
      getAxiosData(fcUrl, setForecastWeather);
    }
    // Listing one dependancy causes a lint warning but I only want the axios call made once when both lat and lng are updated.
    // listing both as dependancies triggers two axios calls. updates to Lat and Lng are only triggered in the header, lat then lng
  }, [lng]);

  return (
    <div className="ui secondary pointing menu stackable ow-menu">
      <Link to={`/${path}`} className="item">
        Current Weather
      </Link>

      <Link to={`/forecast/${path}`} className="item">
        Forecast
      </Link>
      <div className="right item">
        <SearchPlaces panTo={panTo} />
      </div>
    </div>
  );
};
export default Header;
