import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { lat, lng } = props;
  return (
    <div className="ui secondary pointing menu">
      <Link
        to={{
          pathname: `/${lat}/${lng}`,
          
        }}
        className="item">
        Current Weather
      </Link>

      <Link
        to={{
          pathname: `/forecast/${lat}/${lng}`,
          
        }}
        className="item">
        Forecast
      </Link>
    </div>
  );
};
export default Header;
