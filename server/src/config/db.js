import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    throw new Error("MONGO_DB_URI is not defined in .env");
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
