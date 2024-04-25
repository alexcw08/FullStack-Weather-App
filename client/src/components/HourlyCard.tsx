import { HourlyWeather } from "../types/weatherTypes";

import { FaCloudRain } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { IconType } from "react-icons";

interface ChildProps {
  hour: HourlyWeather;
}

const icons: { [key: string]: IconType } = {
  ["Clear"]: FaCloud,
  ["Rain"]: FaCloudRain,
  ["Drizzle"]: FaCloudRain,
  ["Snow"]: IoSnowOutline,
  ["Sunny"]: FaSun,
  ["Clouds"]: FaCloud,
};

const HourlyCard: React.FC<ChildProps> = ({ hour }) => {
  const weatherDescription = hour.weather[0].main;
  const IconComponent = icons[weatherDescription];
  return (
    <div className="card  items-center text-zinc-700 shadow-md bg-zinc-400/10 ">
      <div className="card-body  w-[80%] px-0 items-center">
        <h2 className="card-title block text-center text-md">{hour.dt.time}</h2>
        {IconComponent && <IconComponent fontSize={"50px"} color="#005569" />}
        <h2 className="card-title block text-center text-2xl">
          {hour.temp.toFixed(0)}°
        </h2>
      </div>
    </div>
  );
};

export default HourlyCard;
