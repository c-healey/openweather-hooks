import axios from "axios";
const getCurrentWeather = async (setData, url) => {
  try {
    const data = await axios.get(url);
    if (!data) return null;

    if (data) {
      setData(data);
      // console.log('get weather data = ', data, data.data.current.weather)
    }
  } catch (error) {
    console.log(error);
  }
};
export default getCurrentWeather;
