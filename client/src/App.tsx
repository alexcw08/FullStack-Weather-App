import { useState } from "react";
import "./App.css";
import CurrentCast from "./components/CurrentCast";
import HourlyDaily from "./components/HourlyDaily";
import defaultWeather from "./data/default";
import WeatherData from "./types/weatherTypes";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeather);

  return (
    <div className="bg-[#D1D8DC] flex h-dvh w-full}">
      <CurrentCast weatherData={weatherData} />
      <HourlyDaily weatherData={weatherData} setWeatherData={setWeatherData} />
    </div>
  );
}

export default App;
