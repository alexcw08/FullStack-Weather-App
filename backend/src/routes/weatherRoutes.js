import fetchLocation from "../services/locService.js";
import fetchWeather from "../services/weatherService.js";

const weatherRoutes = (app) => {
  app.get("/weather", async (req, res) => {
    // receives location for weather
    const location = req.query.location;
    try {
      // fetch coordinates for the location requested
      const coords = await fetchLocation(location);
      // fetch weather for coordinates
      const weatherData = await fetchWeather(coords.lat, coords.lng);
    } catch (error) {
      res.status(500).json({ error: "Server error." });
    }
    res.send("Request received..");
  });
};

export default weatherRoutes;
