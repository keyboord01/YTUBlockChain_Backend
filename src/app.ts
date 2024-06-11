import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import classRoutes from "./routes/classRoutes";

const app = express();

app.use(
  cors({
    origin: process.env.PUBLIC_API_HOST,
  })
);

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Blockchain World! 🌍🚀🚀");
});

export default app;
