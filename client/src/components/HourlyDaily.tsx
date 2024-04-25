import WeatherData from "../types/weatherTypes";
import DailyContainer from "./DailyContainer";
import HourlyContainer from "./HourlyContainer";
import Searchbar from "./Searchbar";

interface ChildProps {
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const HourlyDaily: React.FC<ChildProps> = ({ weatherData, setWeatherData }) => {
  return (
    <div className=" w-[70%] md:px-16 flex flex-col py-12 overflow-y-scroll">
      <Searchbar setWeatherData={setWeatherData} />
      <HourlyContainer weatherData={weatherData} />
      <DailyContainer weatherData={weatherData} />
    </div>
  );
};
export default HourlyDaily;
