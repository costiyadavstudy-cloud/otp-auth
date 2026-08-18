import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}authentication`,
    );
    
    console.log("db Connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
}

export default connectDb;