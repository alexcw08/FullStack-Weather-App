import WeatherData from "../types/weatherTypes";
import DayCard from "./DayCard";

interface ChildProps {
  weatherData: WeatherData;
}

const DailyContainer: React.FC<ChildProps> = ({ weatherData }) => {
  return (
    <div className="py-10 flex flex-col ">
      <h1 className="text-3xl text-slate-800 mb-8">7 Day Forecast</h1>
      <div className="flex flex-col gap-y-3">
        {weatherData.daily.map((day) => (
          <DayCard day={day} />
        ))}
      </div>
    </div>
  );
};

export default DailyContainer;
