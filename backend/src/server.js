import express from "express";
import weatherRoutes from "./routes/weatherRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
// set up
const app = express();
const PORT = 3001;
dotenv.config();
// mount json middleware
app.use(express.json());
// mount cors middleware
app.use(cors());

weatherRoutes(app);
// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
