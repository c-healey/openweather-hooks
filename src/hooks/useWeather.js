import { useState, useEffect } from "react";
import axios from "axios";

import useLocation from "./useLocation";

const useWeather = (urlInput, lt = null, lg = null) => {
  // console.log(`USEWEATHER lt = ${lt} lg = ${lg}`)
  const [lat, lng] = useLocation(lt, lg);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // console.log("useWeather lat lng changed");
    const getData = async (url) => {
      try {
        const { data } = await axios.get(url);
        if (data) {
          setResponse(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(`useWeather lat=${lat} lng = ${lng}`)
    if (lat && lng) {
      // console.log("Get weather for ", lat, lng);
      getData(`${urlInput}&lat=${lat}&lon=${lng}`);
    }
  }, [lat, lng, urlInput]);

  return [response, lat, lng];
};
export default useWeather;
