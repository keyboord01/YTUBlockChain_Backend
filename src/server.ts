import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
