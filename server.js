// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Default route for Railway health check
app.get("/", (req, res) => {
  res.status(200).send("🚀 Portfolio Backend Running Successfully! 🌐");
});

// ✅ Example contact POST route (for testing form submission)
app.post("/contact", (req, res) => {
  console.log("📩 New Contact Submission:", req.body);
  res.status(200).json({ success: true, message: "Message received successfully!" });
});

// ✅ Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "❌ Route not found" });
});

// ✅ Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
