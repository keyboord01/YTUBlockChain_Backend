import express from "express";
import authRoutes from "./routes/authRoutes";
import classRoutes from "./routes/classRoutes";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Blockchain World! 🌍🚀🚀");
});

export default app;
