import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import medicinesRoutes from "./routes/medicines.js";
import ordersRoutes from "./routes/orders.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pharmacy", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.use("/api/medicines", medicinesRoutes);
app.use("/api/orders", ordersRoutes);
// Routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
