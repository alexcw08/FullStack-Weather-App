import express from "express";

// set up
const app = express();
const PORT = 3001;
// mount json middleware
app.use(express.json());

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
