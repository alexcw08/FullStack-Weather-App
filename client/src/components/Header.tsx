import WeatherData from "../types/weatherTypes";
import Searchbar from "./Searchbar";

interface ChildProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const Header: React.FC<ChildProps> = ({ setWeatherData }) => {
  return (
    <div className="bg-[#BFC5C9] w-full pl-10 py-12 h-12 flex items-center rounded-md border-zinc-500/10 border-b-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M3.618,16.492c-.3.124-.719.491-.6.95a1.5,1.5,0,1,1-2.9.778,3.837,3.837,0,0,1,1.93-4.3A5.93,5.93,0,0,1,2,12.971a6.016,6.016,0,0,1,.182-1.357,6.208,6.208,0,0,1,5.109-4.6,1.5,1.5,0,0,1,.424,2.97,3.269,3.269,0,0,0-2.623,2.356A3.079,3.079,0,0,0,5,13.026a2.927,2.927,0,0,0,.067.685A2.447,2.447,0,0,1,3.618,16.492Zm16.3,3.433A5.118,5.118,0,0,1,14.8,24H7.772a4.147,4.147,0,0,1-.944-.128,3.73,3.73,0,0,1-.784-6.945A5.352,5.352,0,0,1,6.1,15.2a5.187,5.187,0,0,1,3.828-4.032,5.249,5.249,0,0,1,6.047,2.806.368.368,0,0,0,.208.2A5.036,5.036,0,0,1,19.915,19.925Zm-4.474-2.852a3.333,3.333,0,0,1-2.164-1.8,2.306,2.306,0,0,0-2.625-1.2,2.206,2.206,0,0,0-1.6,1.7A2.318,2.318,0,0,0,9.068,16.8a2.262,2.262,0,0,1-1.411,2.68c-.336.126-.753.508-.631.963a.786.786,0,0,0,.55.525A.992.992,0,0,0,7.815,21H14.8a2.152,2.152,0,0,0,2.164-1.623A2.009,2.009,0,0,0,15.441,17.073ZM22.5,8H20.3a5.986,5.986,0,0,0-.64-1.542L21.218,4.9A1.5,1.5,0,0,0,19.1,2.783L17.542,4.337A5.986,5.986,0,0,0,16,3.7V1.5a1.5,1.5,0,0,0-3,0V3.694a5.923,5.923,0,0,0-1.55.636L9.9,2.783A1.5,1.5,0,0,0,7.782,4.9l2.475,2.475a1.508,1.508,0,0,0,2.121,0,3.007,3.007,0,0,1,4.811,3.453,1.5,1.5,0,1,0,2.686,1.336A5.943,5.943,0,0,0,20.305,11h2.2A1.5,1.5,0,0,0,22.5,8Z" />
      </svg>

      <span className="text-3xl pl-2 text-[#4b4850] font-semibold italic">
        WeatherApp
      </span>
      <Searchbar setWeatherData={setWeatherData} />
    </div>
  );
};

export default Header;