const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Contact form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // For GitHub Pages, we'll just log the contact form data
    // In production, integrate with email service or webhook
    console.log('Contact Form Submission:', { name, email, message, timestamp: new Date() });
    
    res.json({ 
      message: 'Thank you for your message! I will get back to you soon.',
      success: true 
    });
  } catch (err) {
    res.status(500).json({ message: 'Error processing contact form' });
  }
});

module.exports = router;
