export default function HourlyDaily() {
  return (
    <div className=" w-[60%] px-20 flex flex-col">
      <form action="get" className="w-1/2 mx-auto">
        <label className="input input-bordered  flex items-center justify-between  bg-[#BFC5C9] ">
          <input
            className="placeholder-[#494949] text-[#1F3753]"
            placeholder="Search for location"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#1F3753"
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
    </div>
  );
}
