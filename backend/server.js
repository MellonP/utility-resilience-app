import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import helmet from "helmet"; // ← NEW
import { fileURLToPath } from "url";
import favicon from "serve-favicon";

import connectDB from "./config/db.js";
import outageRoutes from "./routes/outageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ["http://localhost:8081"], // your frontend dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(helmet()); // ← ADD HELMET FOR SECURITY HEADERS
app.use(express.json());

// Add global headers manually (optional)
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store"); // Or: max-age=0
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

// Serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Routes
app.use("/api/outages", outageRoutes);
app.use("/api/users", userRoutes);
app.use('/api/reports', reportRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
