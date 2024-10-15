const express = require('express');
const router = express.Router();
const { sendPaperSubmissionEmail, sendPaperSubmissionNotification } = require('../utils/emailService');

router.post('/paper-submission', async (req, res) => {
  try {
    const formData = req.body;
    await sendPaperSubmissionEmail(formData);
    await sendPaperSubmissionNotification(formData);
    res.status(200).json({ message: 'Paper submitted successfully' });
  } catch (error) {
    console.error('Error submitting paper:', error);
    res.status(500).json({ error: 'An error occurred while submitting the paper' });
  }
});

module.exports = router;