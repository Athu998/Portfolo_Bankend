import express from "express";
import cors from "cors";
import contactRouter from "./Router/cont.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.status(200).send("🚀 Portfolio Backend Running Successfully on Railway!");
});

// Mount router
app.use("/contact", contactRouter);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "❌ Route not found" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
