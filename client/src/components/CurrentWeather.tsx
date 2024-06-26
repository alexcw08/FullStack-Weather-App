import WeatherData from "../types/weatherTypes";
import { selectIcon } from "../utils/iconSelector";

interface ChildProps {
  weatherData: WeatherData;
}

const CurrentWeather: React.FC<ChildProps> = ({ weatherData }) => {
  const weatherDescription = weatherData.current.weather[0].main;
  const iconPath = selectIcon(weatherDescription);
  return (
    <div className="w-[30%] h-full from-[#1F3753] to-[#17397E] bg-gradient-to-b justify-between flex  flex-col text-[#EEFEFF] md:px-14 py-14 overflow-y-hidden">
      {/* city name and tempt */}
      <div className="flex justify-between">
        <div>
          <h1 className="md:text-3xl">{weatherData.address[0]}</h1>
          <h1 className="md:text-2xl">{weatherData.address[1]}</h1>
        </div>
        <h1 className="md:text-4xl">{weatherData.current.temp.toFixed(0)}°</h1>
      </div>
      {/* icon and description */}
      <div className="flex flex-col items-center gap-y-4">
        <div className="">
          <img src={iconPath} alt="Icon" />
        </div>
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
        <div className="rounded-md bg-[#2D4D86] flex py-4 justify-evenly">
          {/* <FiSunrise fontSize={"30px"} /> */}
          <div className="w-8 h-8">
            <img src="/sunrise.png" alt="" />
          </div>
          <p>Sunrise</p>
          <p>{weatherData.current.sunrise.time}</p>
        </div>

        <div className="rounded-md bg-[#2D4D86] flex py-4 justify-evenly">
          {/* <FiSunset fontSize={"30px"} /> */}
          <div className="w-8 h-8">
            <img src="/sunset.png" alt="" />
          </div>
          <p>Sunset</p>
          <p>{weatherData.current.sunset.time}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
