import WeatherData from "../types/weatherTypes";
import HourlyCard from "./HourlyCard";

interface ChildProps {
  weatherData: WeatherData;
}

const HourlyContainer: React.FC<ChildProps> = ({ weatherData }) => {
  const firstHalf = weatherData.hourly.slice(0, 12);
  const secondHalf = weatherData.hourly.slice(12);
  console.log(secondHalf);
  return (
    <div className="py-10 flex flex-col ">
      <h1 className="text-3xl text-slate-800 mb-8">Hourly Forecast</h1>
      <div className="grid grid-cols-6 grid-rows-2 gap-4">
        {/* {weatherData.hourly.map((hour) => (
          <HourlyCard hour={hour} />
        ))} */}
        {firstHalf.map((hour) => (
          <HourlyCard hour={hour} />
        ))}
        {/* IMPLEMENT DROP DOWN FOR REMAINDER 12 HOUR DATA BELOW */}
        {/* <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {firstHalf.map((hour) => (
              <HourlyCard hour={hour} />
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default HourlyContainer;
