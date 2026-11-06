import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "hello from gateway" });
});

app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL || "http://localhost:8001"));

app.listen(port, () => {
  console.log(`Gateway started on http://localhost:${port}`);
});

