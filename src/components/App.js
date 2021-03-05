import React, { useEffect, useState } from "react";
import { HashRouter, Route} from "react-router-dom";

import getLocation from "../apis/getLocation";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Header from "./Header";

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    getLocation(setLat, setLng);
  }, []);

  return (
    <div className="App ui container">
      <HashRouter>
        <Header lat={lat} lng={lng} />

        <Route path="/forecast/:lt?/:lg?" component={Forecast} />
        <Route path="/:lt?/:lg?" exact component={CurrentWeather} />
      </HashRouter>
    </div>
  );
}

export default App;
