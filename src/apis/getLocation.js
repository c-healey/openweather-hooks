const getLocation = async (setLat, setLng) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    },
    () => null
  );
};
export default getLocation;
