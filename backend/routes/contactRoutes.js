const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../utils/emailService');

router.post('/contact', async (req, res) => {
  try {
    const formData = req.body;
    await sendContactEmail(formData);
    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form' });
  }
});

module.exports = router;