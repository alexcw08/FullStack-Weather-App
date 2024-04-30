export const selectIcon = (description: string) => {
  // sets a file name depending on the given description
  let filePath = "";
  switch (description) {
    case "Clear":
      filePath = "/sun.png";
      break;
    case "Rain":
      filePath = "/rainy.png";
      break;
    case "Drizzle":
      filePath = "/rainy.png";
      break;
    case "Snow":
      filePath = "/snow.png";
      break;
    case "Sunny":
      filePath = "/sunny.png";
      break;
    case "Clouds":
      filePath = "/clouds.png";
      break;
    case "Mist":
      filePath = "/clouds.png";
      break;
    default:
      filePath = "/clouds.png";
  }
  return filePath;
};
