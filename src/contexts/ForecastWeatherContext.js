import React, {useState} from 'react';

export const ForecastWeatherContext = React.createContext();

export const ForecastWeatherProvider = (props) => {
  
  const [forecastWeather, setForecastWeather] = useState();
  return (
    <ForecastWeatherContext.Provider value={[forecastWeather, setForecastWeather]}>
      {props.children}
    </ForecastWeatherContext.Provider>
  );
};