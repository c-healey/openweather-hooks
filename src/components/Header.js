import React, {useEffect, useState}from "react";
import { Link} from "react-router-dom";

import SearchPlaces from './SearchPlaces'
const Header = () => {
  const [path, setPath] = useState('');
 

  const panTo = React.useCallback(({ lat, lng }) => {
    console.log("lat, lng", lat, lng);
    document.title = `Lat: ${lat} Lng: ${lng}`;
  
    window.location.hash = (`#/${[lat, lng].join('/')}`)
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
    <div className="ui secondary pointing menu">
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
