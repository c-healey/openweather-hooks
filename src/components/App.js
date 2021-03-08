import React from "react";
import { HashRouter, Route } from "react-router-dom";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Header from "./Header";

function App() {
 

  return (
    <div className="App ui container">
      <HashRouter>
      
        <Header  />
        <Route path="/forecast/:lt?/:lg?" component={Forecast} />
        <Route path="/:lt?/:lg?" exact component={CurrentWeather} />
      </HashRouter>
    </div>
  );
}

export default App;
