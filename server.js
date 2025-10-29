// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your contact route if exists
try {
  const contactRouter = require('./Router/cont');
  app.use('/contact', contactRouter);
} catch (err) {
  console.log('⚠️ Contact route not found, continuing without it.');
}

// Default route for Railway health check
app.get('/', (req, res) => {
  res.status(200).send('🚀 Portfolio Backend Running Successfully!');
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send('❌ Route not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
