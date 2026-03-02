import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Task from "./models/Task.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT, () => {
      console.log("listening...");
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
