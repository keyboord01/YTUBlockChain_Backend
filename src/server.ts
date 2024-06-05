import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
