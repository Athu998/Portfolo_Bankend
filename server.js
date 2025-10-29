// server.js
import express from "express";
import cors from "cors";
import contactRouter from "./Router/cont.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(200).send("🚀 Portfolio Backend Running Successfully on Railway!");
});

app.use("/contact", contactRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "❌ Route not found" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
