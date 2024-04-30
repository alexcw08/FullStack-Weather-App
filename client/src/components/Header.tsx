import WeatherData from "../types/weatherTypes";
import Searchbar from "./Searchbar";

interface ChildProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const Header: React.FC<ChildProps> = ({ setWeatherData }) => {
  return (
    <div className="w-full pl-10 py-12 h-12 flex items-center rounded-md border-zinc-600/10 border-b-2 ">
      <span className="text-xl pl-2 text-[#1F3753] font-semibold ">
        weather.
        <span className="text-[#2973af]">io</span>
      </span>
      <Searchbar setWeatherData={setWeatherData} />
    </div>
  );
};

export default Header;
