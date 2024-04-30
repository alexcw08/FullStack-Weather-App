import { selectIcon } from "../assets/utils/iconSelector";
import { DailyWeather } from "../types/weatherTypes";

interface ChildProps {
  day: DailyWeather;
}

const DayCard: React.FC<ChildProps> = ({ day }) => {
  const weatherDescription = day.weather[0].main;
  const iconPath = selectIcon(weatherDescription);
  return (
    <div className="card shadow-md bg-zinc-400/10 text-zinc-700">
      <div className="card-body flex-row justify-between items-center">
        <h1 className=" text-xl w-32">{day.dt.day}</h1>
        <div>
          <img src={`${iconPath}`} alt="Icon" />
        </div>
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
