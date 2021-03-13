import React, {useState} from 'react';

export const LocationContext = React.createContext();

export const LocationProvider = (props) => {
  
  const [lat, setLat] = useState(null);
  const [lng, setLng ] = useState(null)
  return (
    <LocationContext.Provider value={[lat, setLat, lng, setLng]}>
      {props.children}
    </LocationContext.Provider>
  );
};