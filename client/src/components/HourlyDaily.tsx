import WeatherData from "../types/weatherTypes";
import HourlyContainer from "./HourlyContainer";
import Searchbar from "./Searchbar";

interface ChildProps {
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const HourlyDaily: React.FC<ChildProps> = ({ weatherData, setWeatherData }) => {
  return (
    <div className=" w-[70%] md:px-20 flex flex-col py-12">
      <Searchbar setWeatherData={setWeatherData} />
      <HourlyContainer weatherData={weatherData} />
    </div>
  );
};
export default HourlyDaily;
