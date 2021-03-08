import React from "react";
import { Link} from "react-router-dom";

const Header = () => {

  const optionalPaths = window.location.hash
    .split("/")
    .filter((el) => el !== '#' && el !== "forecast"  && el !== 'today' && el.length)
    .join("/");
  // console.log("HEADER", optionalPaths);
 
  return (
    <div className="ui secondary pointing menu">
      <Link
        to={`/${optionalPaths}`}
        className="item">
        Current Weather
      </Link>

      <Link
        to={`/forecast/${optionalPaths}` }
        className="item">
        Forecast
      </Link>
    </div>
  );
};
export default Header;
