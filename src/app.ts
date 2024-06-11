import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import classRoutes from "./routes/classRoutes";

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow: boolean) => void
  ) => {
    if (!origin || allowedOrigins!.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
};

app.use(cors(corsOptions));

console.log("test", corsOptions);

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Blockchain World! 🌍🚀");
});

export default app;
