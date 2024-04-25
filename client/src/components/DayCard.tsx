import { DailyWeather } from "../types/weatherTypes";
import { FaCloudRain } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { IconType } from "react-icons";

interface ChildProps {
  day: DailyWeather;
}

const icons: { [key: string]: IconType } = {
  ["Clear"]: FaCloud,
  ["Rain"]: FaCloudRain,
  ["Drizzle"]: FaCloudRain,
  ["Snow"]: IoSnowOutline,
  ["Sunny"]: FaSun,
  ["Clouds"]: FaCloud,
};

const DayCard: React.FC<ChildProps> = ({ day }) => {
  const weatherDescription = day.weather[0].main;
  const IconComponent = icons[weatherDescription];
  return (
    <div className="card shadow-md bg-zinc-400/10 text-zinc-700">
      <div className="card-body flex-row justify-between items-center">
        <h1 className=" text-xl w-32">{day.dt.day}</h1>
        {IconComponent && <IconComponent fontSize={"50px"} color="#005569" />}
        <span className="text-2xl text-slate-700">
          {day.temp.day.toFixed(0)}°
        </span>
        <div className="flex flex-col ">
          <span>High: {day.temp.max.toFixed(0)}°</span>
          <span>High: {day.temp.min.toFixed(0)}°</span>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
