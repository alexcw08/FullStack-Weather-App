import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaCloudRain } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import WeatherData from "../types/weatherTypes";
import { IconType } from "react-icons";
interface ChildProps {
  weatherData: WeatherData;
}

const icons: { [key: string]: IconType } = {
  ["Clear"]: FaCloud,
  ["Rain"]: FaCloudRain,
  ["Drizzle"]: FaCloudRain,
  ["Snow"]: IoSnowOutline,
  ["Sunny"]: FaSun,
  ["Clouds"]: FaCloud,
};

const CurrentWeather: React.FC<ChildProps> = ({ weatherData }) => {
  const weatherDescription = weatherData.current.weather[0].main;
  const IconComponent = icons[weatherDescription];
  return (
    <div className="w-[30%] h-full from-[#1F3753] to-[#17397E] bg-gradient-to-b justify-between flex  flex-col text-[#EEFEFF] md:px-14 py-14 overflow-y-hidden">
      {/* city name and tempt */}
      <div className="flex justify-between">
        <div>
          <h1 className="md:text-3xl">{weatherData.address[0]}</h1>
          <h1 className="md:text-2xl">{weatherData.address[1]}</h1>
        </div>
        <h1 className="md:text-3xl">{weatherData.current.temp.toFixed(0)}°</h1>
      </div>
      {/* icon and description */}
      <div className="flex flex-col items-center gap-y-4">
        {/* <FaCloudRain fontSize={"100px"} /> */}
        {IconComponent && <IconComponent fontSize={"100px"} />}
        <p className="md:text-2xl">{weatherData.current.weather[0].main}</p>
      </div>
      {/* details */}
      <div className="grid grid-rows-2 grid-cols-2 text-xl gap-1  md:gap-y-6 md:gap-x-11 text-center">
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
      <div className="flex flex-col gap-y-5">
        <div className="rounded-md bg-[#2D4D86] flex  py-8 justify-evenly">
          <FiSunrise fontSize={"30px"} />
          <p>Sunrise</p>
          <p>{weatherData.current.sunrise.time}</p>
        </div>

        <div className="rounded-md bg-[#2D4D86] flex  py-8 justify-evenly">
          <FiSunset fontSize={"30px"} />
          <p>Sunset</p>
          <p>{weatherData.current.sunset.time}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
