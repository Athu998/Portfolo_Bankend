const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://atharva998:P%40ss1word@cluster0.fd5qknm.mongodb.net/GetData?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Admin Schema
// const adminSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
// });

// Models
const Contact = mongoose.model('Contact', contactSchema);
// const Admin = mongoose.model('Admin', adminSchema);

//module.exports = { Contact, Admin };
