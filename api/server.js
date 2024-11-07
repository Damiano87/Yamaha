import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";
import prisma from "./lib/prisma.js";
import { logger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import root from "./routes/root.js";
import userRoutes from "./routes/userRoutes.js";
import atvRoutes from "./routes/atvRoutes.js";
import motoRoutes from "./routes/motoRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT || 3500;

dotenv.config();
console.log(process.env.NODE_ENV);

const app = express();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

// Serve static files from the "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/", root);
app.use("/users", userRoutes);
app.use("/vehicles/atv", atvRoutes);
app.use("/vehicles/moto", motoRoutes);
app.use("/auth", authRoutes);

// show 404 site if there is no resources
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

const checkDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect MongoDB:", error);
  }
};

checkDatabaseConnection();
