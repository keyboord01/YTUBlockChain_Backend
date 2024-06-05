import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB");
    console.log(process.env.MONGODB_URI); // Debug line to check the URI
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
