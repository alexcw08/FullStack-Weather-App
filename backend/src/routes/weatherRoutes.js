import fetchLocation from "../services/locService.js";

const weatherRoutes = (app) => {
  app.get("/weather", async (req, res) => {
    // receives location for weather
    const location = req.query.location;
    try {
      // fetch coordinates for the location requested
      const coords = await fetchLocation(location);
      console.log(coords);
      // TODO: fetch weather for coordinates
    } catch (error) {
      console.log(error);
    }
    res.send("Request received..");
  });
};

export default weatherRoutes;
