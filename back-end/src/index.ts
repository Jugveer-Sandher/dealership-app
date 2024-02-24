import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import carRoutes from "./routes/postRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

if (!process.env.JWT_ACCESS_SECRET) {
  throw new Error("JWT_ACCESS_SECRET is missing");
}

if (!process.env.JWT_REFRESH_SECRET) {
  throw new Error("JWT_REFRESH_SECRET is missing");
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

// Routes
app.use("/post", carRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
