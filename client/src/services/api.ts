import axios from "axios";

const fetchWeatherData = async (userLocation: string) => {
  // validate input
  if (userLocation.trim() === "") {
    throw new Error("Invalid input. Try again");
  }

  // make a call to the backend to get weather data. catch error
  // encode special characters
  try {
    const response = await axios.get(
      `http://localhost:3001/weather?location=${encodeURIComponent(
        userLocation
      )}`
    );
    return response.data;
  } catch (error) {
    // handle error - log to console and propagate to caller
    console.log("Error fetching weather from backend.", error);
    throw error;
  }
};

export default fetchWeatherData;
