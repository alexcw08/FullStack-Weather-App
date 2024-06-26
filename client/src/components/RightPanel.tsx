import WeatherData from "../types/weatherTypes";
import DailyContainer from "./DailyContainer";
import Header from "./Header";
import HourlyContainer from "./HourlyContainer";

interface ChildProps {
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const RightPanel: React.FC<ChildProps> = ({ weatherData, setWeatherData }) => {
  return (
    <div className="w-[70%] overflow-y-scroll bg-slate-200">
      <Header setWeatherData={setWeatherData} />
      <div className="md:px-10 flex flex-col ">
        <HourlyContainer weatherData={weatherData} />
        <DailyContainer weatherData={weatherData} />
      </div>
    </div>
  );
};
export default RightPanel;
