// Router/cont.js
import express from "express";
import { Contact } from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "✅ Contact message saved successfully!",
    });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ error: "Error saving contact message" });
  }
});

// ✅ This line is critical
export default router;
