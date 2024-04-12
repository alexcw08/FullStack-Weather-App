import express from "express";
import weatherRoutes from "./routes/weatherRoutes.js";
import dotenv from "dotenv";

// set up
const app = express();
const PORT = 3001;
dotenv.config();
// mount json middleware
app.use(express.json());

weatherRoutes(app);
// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
