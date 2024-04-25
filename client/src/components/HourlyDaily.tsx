import WeatherData from "../types/weatherTypes";
import Searchbar from "./Searchbar";

interface ChildProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const HourlyDaily: React.FC<ChildProps> = ({ setWeatherData }) => {
  return (
    <div className=" w-[70%] md:px-20 flex flex-col py-12">
      <Searchbar setWeatherData={setWeatherData} />
    </div>
  );
};
export default HourlyDaily;
