import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CreditCard,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Flag,
} from "lucide-react";
import axios from "axios";

export default function RegistrationDialog({
  isOpen = false,
  onClose = () => {},
  title = "Registration",
  price = "",
  currency = "USD",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const backendHost = "https://icsift.onrender.com"; //change this to your backend host

  const paymentCCAvenue = async () => {
    let paymentData = {
      merchant_id: "350427",
      order_id: "ORD" + Date.now(),
      amount: price,
      currency: currency,
      billing_email: formData.email,
      billing_name: formData.name,
      billing_address: formData.address,
      billing_city: formData.city,
      billing_state: formData.state,
      billing_zip: formData.zip,
      billing_country: formData.country,
      redirect_url: `${backendHost}/api/ccavenue-handle`,
      cancel_url: `${backendHost}/api/ccavenue-handle`,
      merchant_param1: "Extra Information",
      merchant_param2: "Extra Information",
      merchant_param3: "Extra Information",
      merchant_param4: "Extra Information",
      language: "EN",
      billing_tel: formData.phone,
    };

    try {

      await axios.post(`${backendHost}/api/payment-notification`, {
        ...formData,
        amount: price,
        currency: currency,
        order_id: paymentData.order_id
      });
      
      const response = await axios.post(
        `${backendHost}/api/ccavenue-initiate`,
        paymentData
      );
      const { encRequest, accessCode } = response.data;
      //	https://secure.ccavenue.com
      const URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encRequest}&access_code=${accessCode}`;
      window.location.href = URL;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const inputClasses =
    "mt-1 block w-full py-1.5 px-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-all duration-200 ease-in-out";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark px-4 py-4 sm:px-6">
                <h3 className="text-2xl font-bold leading-6 text-green-800 mb-2">
                  {title}
                </h3>
                <p className="text-primary-foreground">
                  Fill in your details to complete the registration for
                </p>
              </div>
              <hr />
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <form className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className={labelClasses}>
                      <User className="inline-block w-4 h-4 mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className={labelClasses}>
                      <Mail className="inline-block w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="phone" className={labelClasses}>
                      <Phone className="inline-block w-4 h-4 mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="address" className={labelClasses}>
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="city" className={labelClasses}>
                        <Building className="inline-block w-4 h-4 mr-2" />
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="state" className={labelClasses}>
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="zip" className={labelClasses}>
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label htmlFor="country" className={labelClasses}>
                        <Flag className="inline-block w-4 h-4 mr-2" />
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </motion.div>
                  </div>
                </form>
              </div>
              <div className="bg-green-950 px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={paymentCCAvenue}
                  className="inline-flex w-full justify-center rounded-md border py-2 bg-primary px-4  text-base font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-200 ease-in-out"
                >
                  <CreditCard className="mr-2" />
                  Pay Now ({price} {currency})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-200 ease-in-out"
                >
                  Cancel
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-2 top-2 text-green-400 hover:text-green-900 transition-colors duration-200"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
