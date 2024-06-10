import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import classRoutes from "./routes/classes";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/classes", classRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
