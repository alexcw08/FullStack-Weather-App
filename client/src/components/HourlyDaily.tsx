import WeatherData from "../types/weatherTypes";
import DailyContainer from "./DailyContainer";
import Header from "./Header";
import HourlyContainer from "./HourlyContainer";
import Searchbar from "./Searchbar";

interface ChildProps {
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const HourlyDaily: React.FC<ChildProps> = ({ weatherData, setWeatherData }) => {
  return (
    // <div className=" w-[70%] md:px-16 flex flex-col py-12 overflow-y-scroll">
    <div className="w-[70%] overflow-y-scroll">
      <Header setWeatherData={setWeatherData} />
      <div className="md:px-16 flex flex-col py-12 ">
        <HourlyContainer weatherData={weatherData} />
        <DailyContainer weatherData={weatherData} />
      </div>
      {/* <Searchbar setWeatherData={setWeatherData} /> */}
    </div>
  );
};
export default HourlyDaily;
