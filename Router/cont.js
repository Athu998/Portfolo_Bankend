// Router/cont.js
const express = require('express');
const Contact = require('../db'); // ✅ Import model
const { redirect } = require('next/dist/server/api-utils');
const router = express.Router();

router.post('/', async (req, res) => {
  const {name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ error: 'Error saving contact message' });
  }
  if(newContact.save()){
    return redirect('/ThankyouPage.html')
  }
});

module.exports = router;
