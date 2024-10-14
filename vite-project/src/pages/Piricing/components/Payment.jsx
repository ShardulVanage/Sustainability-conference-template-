import React from "react";
import axios from "axios";

export default function PaymentButton() {
  const backendHost = "http://localhost:5000"; // Make sure this matches your backend URL

  const paymentCCAvenue = async () => {
    let paymentData = {
      merchant_id: "350427",
      order_id: "ORD123",
      amount: "50",
      currency: "INR",
      billing_email: "johndoe@gmail.com",
      billing_name: "John Doe",
      billing_address: "Address Details",
      billing_city: "Ahmedabad",
      billing_state: "Gujarat",
      billing_zip: "380002",
      billing_country: "India",
      redirect_url: `${backendHost}/api/ccavenue-handle`,
      cancel_url: `${backendHost}/api/ccavenue-handle`,
      merchant_param1: "Extra Information",
      merchant_param2: "Extra Information",
      merchant_param3: "Extra Information",
      merchant_param4: "Extra Information",
      language: "EN",
      billing_tel: "1234567890",
    };

    try {
      const response = await axios.post(
        `${backendHost}/api/ccavenue-initiate`,
        paymentData
      );
      const { encRequest, accessCode } = response.data;
      const URL = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encRequest}&access_code=${accessCode}`;
      window.location.href = URL;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <>
      <button onClick={paymentCCAvenue}>Pay Now</button>
    </>
  );
}
