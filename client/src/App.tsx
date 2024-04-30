import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import RightPanel from "./components/RightPanel";
import defaultWeather from "./data/default";
import WeatherData from "./types/weatherTypes";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeather);

  return (
    <div className="bg-[#D1D8DC] flex h-screen w-full ">
      <CurrentWeather weatherData={weatherData} />
      <RightPanel weatherData={weatherData} setWeatherData={setWeatherData} />
    </div>
  );
}

export default App;
