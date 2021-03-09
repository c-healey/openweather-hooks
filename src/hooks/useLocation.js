import { useState, useEffect } from "react";

const useLocation = (lt, lg) => {
  
  const validLatLng = (lat, lng) => {
    const regEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    const latlng = "" + lat + "," + lng;
    // console.log("Validate", latlng, regEx.test(latlng));
    return regEx.test(latlng);
  };
  const setLatLng= (lat, lng)=>{
    if(!lat ||!lng){
      return [null, null];
    }
    return validLatLng(lat, lng)?[lat, lng]:[null, null]
  }

  let [lat, setLat] = useState(setLatLng(lt, lg)[0]);
  let [lng, setLng] = useState(setLatLng(lt, lg)[1]);
 

  useEffect(() => {
    if (validLatLng(lt, lg)) {
      console.log('set LAT LNG', lt, lg)
      setLat(lt);
      setLng(lg);
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
    if (!lat && !lng) {
      
        console.log("!lat && !lng ", lat, lng);
        getLocation();
      
    }
  }, [lat, lng]);
  return [lat, lng];
};

export default useLocation;
