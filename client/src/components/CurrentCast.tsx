import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaCloudRain } from "react-icons/fa";
import WeatherData from "../types/weatherTypes";

interface ChildProps {
  weatherData: WeatherData;
}

// TO DO
// 2. work on backend. need to convert timestamps for sunset and sunrise
// 3. backend implement caching
// 4. redo currentCast ui to use daisyUi
// 5. finish hourly and daily Ui

const CurrentCast: React.FC<ChildProps> = ({ weatherData }) => {
  return (
    <div className="w-[40%] from-[#1F3753] to-[#17397E] bg-gradient-to-b justify-between flex  flex-col text-[#EEFEFF] px-14 pt-14">
      {/* city name and tempt */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl">{weatherData.address[0]}</h1>
          <h1 className="text-2xl">{weatherData.address[1]}</h1>
        </div>
        <h1 className="text-3xl">{weatherData.current.temp.toFixed(0)}°</h1>
      </div>
      {/* icon and description */}
      <div className="flex flex-col items-center gap-y-4">
        <FaCloudRain fontSize={"50px"} />
        <p className="text-2xl">{weatherData.current.weather[0].main}</p>
      </div>
      {/* details */}
      <div className="grid grid-rows-2 grid-cols-2 text-xl  gap-y-6 gap-x-11 text-center">
        <div className="rounded-md bg-[#2D4D86] py-4 ">
          <p>Feels like</p>
          <p>{weatherData.current.feels_like.toFixed(0)}°</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] py-4">
          <p>Humidity</p>
          <p>{weatherData.current.humidity}%</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] py-4">
          <p>Wind</p>
          <p>{weatherData.current.wind_speed.toFixed(0)}mph</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] py-4">
          <p>Clouds</p>
          <p>{weatherData.current.clouds}%</p>
        </div>
      </div>
      {/* sunrise and sunset */}
      <div className="flex flex-col gap-y-5 pb-10">
        <div className="rounded-md bg-[#2D4D86] flex  py-8 justify-evenly">
          <FiSunrise fontSize={"30px"} />
          <p>Sunrise</p>
          <p>5:48 AM</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] flex  py-8 justify-evenly">
          <FiSunset fontSize={"30px"} />
          <p>Sunset</p>
          <p>7:34 PM</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentCast;
