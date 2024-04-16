import axios from "axios";

const fetchLocation = async (address) => {
  // Takes in address - returns object containing lat and long
  const key = process.env.GEOCODE_KEY;
  const geoRes = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
  );

  // check for errors with query
  if (geoRes.data.status === "OK") {
    return geoRes.data.results[0].geometry.location;
  } else if (geoRes.data.status === "ZERO_RESULTS") {
    throw new Error("Zero results for query.");
  } else if (geoRes.data.status === "INVALID_REQUEST") {
    throw new Error("Invalid query.");
  } else {
    throw new Error("Geocode API error.");
  }
};

export default fetchLocation;
