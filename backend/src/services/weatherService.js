import axios from "axios";

const fetchWeather = async (lat, lng) => {
  // takes in lat and long for a location, returns object containing weather data
  const key = process.env.WEATHER_KEY;
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=${key}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeather;
