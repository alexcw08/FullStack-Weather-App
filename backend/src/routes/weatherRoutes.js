import fetchLocation from "../services/locService.js";
import fetchWeather from "../services/weatherService.js";
import { query, validationResult } from "express-validator";

const weatherRoutes = (app) => {
  app.get(
    "/weather",
    query("location").trim().notEmpty().escape(),
    async (req, res) => {
      // validate location
      const validation = validationResult(req);
      if (validation.isEmpty()) {
        // receives location for weather
        const location = req.query.location;
        try {
          // fetch coordinates for the location requested
          const coords = await fetchLocation(location);
          // fetch weather for coordinates
          const weatherData = await fetchWeather(coords.lat, coords.lng);
          // send data back to client
          res.send(weatherData);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      } else {
        res
          .status(400)
          .json({ error: "Invalid input. Location must not be empty." });
      }
    }
  );
};

export default weatherRoutes;
