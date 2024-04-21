import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-[#EAE3DB] px-8 py-3 flex items-center rounded-md justify-between">
      <h1 className="text-3xl text-[#3B4664] font-bold italic">Weather Cast</h1>
      <form action="get" className="w-1/2">
        <label className="input input-bordered  flex items-center justify-between  bg-[#4D5880] ">
          <input
            className="placeholder-[#a9a49e] text-[#EAE3DB]"
            placeholder="Search for location"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#EAE3DB"
              className="w-6 h-6 opacity-100"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>
      <div>
        <button className="">
          <MdFavoriteBorder size={30} color="#4D5880" />
        </button>
        <button className="ml-4">
          <MdOutlineSettings size={30} color="#4D5880" />
        </button>
      </div>
    </div>
  );
}
