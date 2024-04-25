import { ChangeEvent, FormEvent, useState } from "react";
import fetchWeatherData from "../services/api";
import WeatherData from "../types/weatherTypes";

interface ChildProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const Searchbar: React.FC<ChildProps> = ({ setWeatherData }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const weatherData = await fetchWeatherData(userInput);
      setWeatherData(weatherData);
    } catch (error) {
      console.log(error);
    } finally {
      setUserInput("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
      <label
        htmlFor="location"
        className="input input-bordered  flex items-center justify-between  bg-[#BFC5C9] "
      >
        <input
          name="location"
          value={userInput}
          onChange={handleChange}
          className="placeholder-[#494949] text-[#1F3753]"
          placeholder="Search city"
          required
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#1F3753"
            className="w-6 h-6 opacity-100"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </form>
  );
};

export default Searchbar;
