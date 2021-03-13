import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Header from "./Header";
import { LocationProvider } from "../contexts/LocationContext";
import { CurrentWeatherProvider } from "../contexts/CurrentWeatherContext";
import { ForecastWeatherProvider } from "contexts/ForecastWeatherContext";

function App() {
  return (
    <div className="App ui container">
      <HashRouter>
        <LocationProvider>
          <CurrentWeatherProvider>
            <ForecastWeatherProvider>
              <Header />
              <Switch>
                <Route path="/forecast/:lt?/:lg?" component={Forecast} />
                <Route path="/:lt?/:lg?" exact component={CurrentWeather} />
              </Switch>
            </ForecastWeatherProvider>
          </CurrentWeatherProvider>
        </LocationProvider>
      </HashRouter>
    </div>
  );
}

export default App;
