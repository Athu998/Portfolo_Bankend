import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://atharva998:P%40ss1word@cluster0.fd5qknm.mongodb.net/GetData?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

export const Contact = mongoose.model("Contact", contactSchema);
