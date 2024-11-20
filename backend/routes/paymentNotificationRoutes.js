const express = require('express');
const router = express.Router();
const { sendPaymentInitiationEmail } = require('../utils/emailService');

router.post('/payment-notification', async (req, res) => {
  try {
    await sendPaymentInitiationEmail(req.body);
    res.status(200).json({ message: 'Payment notification email sent successfully' });
  } catch (error) {
    console.error('Error sending payment notification:', error);
    res.status(500).json({ error: 'Failed to send payment notification' });
  }
});

module.exports = router;