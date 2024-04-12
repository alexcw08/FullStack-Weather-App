import axios from "axios";
import getDayAndTime from "../utils/dateTime.js";
import convertAllData from "../utils/unixConvert.js";

const fetchWeather = async (lat, lng) => {
  // takes in lat and long for a location, returns object containing weather data
  const key = process.env.WEATHER_KEY;
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=imperial&appid=${key}`
    );
    // process data - 1. remove excess hours 2. convert unix to reg data
    let data = res.data;
    data.hourly = data.hourly.slice(0, 24);
    data = await convertAllData(data);

    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeather;
