import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db.js";
import morgan from "morgan";
import cors from "cors";




const app = express();

//Default API
app.get("/", (req, res) => {
  console.log("Default Get api hit");
  res.json({ message: "welcome to my first backend project" });
});

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server Started on port:", port);
    });
  })
  .catch((error) => {
    console.error("Server failed to start:", error.message);
  });