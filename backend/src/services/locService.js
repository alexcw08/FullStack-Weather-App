import axios from "axios";

const fetchLocation = async (address) => {
  // Takes in address - returns object containing lat and long
  const key = process.env.GEOCODE_KEY;
  try {
    const geoRes = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
    );
    return geoRes.data.results[0].geometry.location;
  } catch (error) {
    throw error;
  }
};

export default fetchLocation;
