import { useState, useEffect } from "react";

const useLocation = (lt = null, lg = null) => {
  let [lat, setLat] = useState(null);
  let [lng, setLng] = useState(null);

  useEffect(() => {
    if (lt && lg) {
      setLat(lt);
      setLng(lg);
      // console.log("useLocation lt, lg changed set lat, lng", lt, lg);
    }
  }, [lt, lg]);

  useEffect(() => {
    
    const getLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => console.log("error getting location")
      );
    };
    if (!lat || !lng){ 
      // console.log("useLocation  lat, lng changed ", lat, lng);
      getLocation();}
  }, [lat, lng]);
  return [lat, lng];
};

export default useLocation;
