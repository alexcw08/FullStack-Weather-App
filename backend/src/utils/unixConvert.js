import getDayAndTime from "./dateTime.js";

const convertTimeStamps = async (data) => {
  // convert current data time and sunrise/sunset times
  data.current["dt"] = await getDayAndTime(data.current["dt"]);
  data.current["sunrise"] = await getDayAndTime(data.current["sunrise"]);
  data.current["sunset"] = await getDayAndTime(data.current["sunset"]);
  // convert hourly data - loop through each hour
  for (let i = 0; i < data.hourly.length; i++) {
    data.hourly[i]["dt"] = await getDayAndTime(data.hourly[i]["dt"]);
  }
  // convert weekly data - loop through each day
  for (let i = 0; i < data.daily.length; i++) {
    data.daily[i]["dt"] = await getDayAndTime(data.daily[i]["dt"]);
  }
  // return all data now with dates and times converted
  return data;
};

export default convertTimeStamps;
