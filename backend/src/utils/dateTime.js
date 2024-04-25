const getDayAndTime = (unix) => {
  // convert to milliseconds
  const milSeconds = unix * 1000;
  const dateObj = new Date(milSeconds);
  // retrieve time
  const time = dateObj.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });
  const day = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  // return obj w time & day
  return {
    time: time,
    day: day,
  };
};

export default getDayAndTime;
