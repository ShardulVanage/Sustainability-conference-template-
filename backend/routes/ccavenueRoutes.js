const express = require('express');
const router = express.Router();
const CCAvenue = require('../utils/CCAvenue');
const dotenv = require('dotenv');
dotenv.config();


router.post('/ccavenue-handle', async (req, res) => {
  try {
    // Decrypt the Response Data from Request Body
    let data = CCAvenue.redirectResponseToJson(req.body.encResp);

    // Handle Redirect as per Payment Status
    if (data.order_status === "Success") {
      // Redirect to Payment Success Page
      res.redirect(302, `${process.env.FRONTEND_URL}/success`);
    } else {
      // Redirect to Payment Failed Page
      res.redirect(302, `${process.env.FRONTEND_URL}/failed`);
    }
  } catch (error) {
    // Handling Errors if anything Issue/Problem while Payment
    console.error('Error processing CCAvenue request:', error);

    // Redirect to Payment Failed Page
    res.redirect(302, `${process.env.FRONTEND_URL}/failed`);
  }
});

router.post('/ccavenue-initiate', (req, res) => {
  try {
    const encRequest = CCAvenue.getEncryptedOrder(req.body);
    const accessCode = process.env.ACCESS_CODE; // Replace with your actual access code
    res.json({ encRequest, accessCode });
  } catch (error) {
    console.error('Error initiating CCAvenue payment:', error);
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
});

module.exports = router;