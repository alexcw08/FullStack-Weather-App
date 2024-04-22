import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaCloudRain } from "react-icons/fa";
export default function CurrentCast() {
  return (
    <div className="w-[40%] from-[#1F3753] to-[#17397E] bg-gradient-to-b flex  flex-col text-[#EEFEFF] px-14 pt-14">
      {/* city name and tempt */}
      <div className="flex justify-between mb-40">
        <div>
          <h1 className="text-3xl">Boston</h1>
          <h1 className="text-2xl">MA</h1>
        </div>
        <h1 className="text-3xl">50°</h1>
      </div>
      {/* icon and description */}
      <div className="flex flex-col items-center gap-y-4 mb-20">
        <FaCloudRain fontSize={"50px"} />
        <p className="text-2xl">Rain</p>
      </div>
      {/* details */}
      <div className="grid grid-rows-2 grid-cols-2 text-xl  gap-y-6 gap-x-11 text-center mb-80">
        <div className="rounded-md bg-[#2D4D86] py-4 ">
          <p>Feels like</p>
          <p>50°</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] py-4">
          <p>Humidity</p>
          <p>64%</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] py-4">
          <p>Wind</p>
          <p>12mph</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] py-4">
          <p>Clouds</p>
          <p>85%</p>
        </div>
      </div>
      {/* sunrise and sunset */}
      <div className="flex flex-col gap-y-5">
        <div className="rounded-md bg-[#2D4D86] flex  py-8 justify-evenly">
          <FiSunrise fontSize={"30px"} />
          <p>Sunrise</p>
          <p>5:48 AM</p>
        </div>
        <div className="rounded-md bg-[#2D4D86] flex  py-8 justify-evenly">
          <FiSunset fontSize={"30px"} />
          <p>Sunset</p>
          <p>7:34 PM</p>
        </div>
      </div>
    </div>
  );
}
