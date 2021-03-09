import React, {useEffect, useState}from "react";
import { Link} from "react-router-dom";

import SearchPlaces from './SearchPlaces'
import './Header.css'
const Header = () => {
  const [path, setPath] = useState('');
 

  const panTo = React.useCallback(({ lat, lng }) => {
    console.log("lat, lng", lat, lng);
    document.title = `Lat: ${lat} Lng: ${lng}`;
    const onForecastPage = window.location.hash.split("/")
    .filter((el) => el === "forecast" ).length;
    setPath([lat, lng].join('/'))
    window.location.hash = (`#/${onForecastPage?'forecast/':''}${[lat, lng].join('/')}`)
  }, []);
  
  useEffect(()=>{
    const optionalPaths = window.location.hash
    .split("/")
    .filter((el) => el !== '#' && el !== "forecast"  && el !== 'today' && el.length)
    .join("/");
    let [lat, lng]= optionalPaths.split('/')
    document.title = `Lat: ${lat} Lng: ${lng}`;
    setPath(optionalPaths);
    console.log('PATH', path)
  }, [path])
  
  // console.log("HEADER", optionalPaths);
 
  return (
    <div className="ui secondary pointing menu stackable ow-menu">
      <Link
        to={`/${path}`}
        className="item">
        Current Weather
      </Link>

      <Link
        to={`/forecast/${path}` }
        className="item">
        Forecast
      </Link>
      <div className="right item">
        <SearchPlaces panTo={panTo} />
      </div>
      
    </div>
  );
};
export default Header;
