import React, {useState} from 'react';

export const CurrentWeatherContext = React.createContext();

export const CurrentWeatherProvider = (props) => {
  
  const [currentWeather, setCurrentWeather] = useState();
  return (
    <CurrentWeatherContext.Provider value={[currentWeather, setCurrentWeather]}>
      {props.children}
    </CurrentWeatherContext.Provider>
  );
};