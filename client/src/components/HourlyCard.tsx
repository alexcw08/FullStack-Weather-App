import { HourlyWeather } from "../types/weatherTypes";
import { selectIcon } from "../assets/utils/iconSelector";

interface ChildProps {
  hour: HourlyWeather;
}

const HourlyCard: React.FC<ChildProps> = ({ hour }) => {
  const weatherDescription = hour.weather[0].main;
  const iconPath = selectIcon(weatherDescription);
  return (
    <div className="card  items-center text-zinc-700 shadow-md bg-zinc-400/10 ">
      <div className="card-body  w-[80%] px-0 items-center">
        <h2 className="card-title block text-center text-md">{hour.dt.time}</h2>
        <div>
          <img src={`${iconPath}`} alt="Icon" />
        </div>
        <h2 className="card-title block text-center text-2xl">
          {hour.temp.toFixed(0)}°
        </h2>
      </div>
    </div>
  );
};

export default HourlyCard;
