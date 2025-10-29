// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Import router
const contactRouter = require('./Router/cont');

// ✅ Middleware
app.use(cors({
  origin: '*', // You can replace '*' with your portfolio domain for better security
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Routes
app.use('/contact', contactRouter);

// ✅ Default route
app.get('/', (req, res) => {
  res.send('🚀 Portfolio Backend Running Successfully!');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
