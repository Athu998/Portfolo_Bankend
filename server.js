// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Home route — for Railway health check
app.get("/", (req, res) => {
  res.status(200).send("🚀 Portfolio Backend Running Successfully on Railway!");
});

// ✅ Contact route — handles your form submission
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("📩 Contact Received:", { name, email, message });

    // You can add MongoDB save logic here later if needed
    res.status(200).json({
      success: true,
      message: "✅ Thank you! Your message has been received successfully.",
    });
  } catch (err) {
    console.error("❌ Error processing contact form:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Catch-all route for safety
app.use((req, res) => {
  res.status(404).json({ error: "❌ Route not found" });
});

// ✅ Start the server — this line is key for Railway
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
