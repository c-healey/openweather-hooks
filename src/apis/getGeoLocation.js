export const validLatLng = (lat, lng) => {
  const regEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
  const latlng = "" + lat + "," + lng;

  return regEx.test(latlng);
};
const getGeoLocation = (setLat, setLng) => {
  

  const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      () => console.log("error getting location")
    );
  };

  getLocation();
};

export default getGeoLocation;
