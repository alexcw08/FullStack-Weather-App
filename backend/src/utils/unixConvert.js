import getDayAndTime from "./dateTime.js";

const convertTimeStamps = async (data) => {
  // convert current data
  data.current["dt"] = await getDayAndTime(data.current["dt"]);
  // convert hourly data - loop through each hour
  for (let i = 0; i < data.hourly.length; i++) {
    data.hourly[i]["dt"] = await getDayAndTime(data.hourly[i]["dt"]);
  }
  // convert weekly data - loop through each day
  for (let i = 0; i < data.daily.length; i++) {
    data.daily[i]["dt"] = await getDayAndTime(data.daily[i]["dt"]);
  }
  // return all data now with dates and times
  return data;
};

export default convertTimeStamps;
