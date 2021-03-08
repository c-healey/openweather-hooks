import React, {useEffect} from "react";
import { Link} from "react-router-dom";
import useLocation from '../hooks/useLocation';

const Header = () => {
 
  let [lat, lng] = useLocation();
  if (lat && lng ){
    // lat = latprop;
    // lng = lngprop;
    console.log('HEADER lat lng ',lat, lng)
  }
  useEffect(()=>{
    console.log('HEADER lat, lng changed', lat, lng)
  }, [lat, lng])
 
 
  return (
    <div className="ui secondary pointing menu">
      <Link
        to={{
          pathname: `/${lat}/${lng}`,
          // pathname: `/`,
          
        }}
        className="item">
        Current Weather
      </Link>

      <Link
        to={{
          pathname: `/forecast/${lat}/${lng}`,
          // pathname: `/forecast/`,
          
        }}
        className="item">
        Forecast
      </Link>
    </div>
  );
};
export default Header;
