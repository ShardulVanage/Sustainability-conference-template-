import React from "react";
import { motion } from "framer-motion";
import { Globe, UserPlus, FileText, CreditCard, Mail } from "lucide-react";

const steps = [
  {
    title: "Visit Conference Website",
    description:
      "Direct all participants to your official conference website for details.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Choose Registration Category",
    description: "Participants select the appropriate registration type.",
    icon: <UserPlus className="w-8 h-8" />,
  },
  {
    title: "Complete Registration Form",
    description: "Attendees fill out an online form with their details.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "Payment",
    description:
      "Provide multiple payment options (credit card, bank transfer, etc.).",
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    title: "Confirmation",
    description:
      "Participants receive a confirmation email with payment details and an official receipt.",
    icon: <Mail className="w-8 h-8" />,
  },
];

const StepCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="bg-green-500 rounded-full p-3 text-white">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl  text-green-800 mb-2 font-bold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function RegistrationProcess() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-300 mb-4">
          Registration Process
        </h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          Join us in shaping a sustainable future. Follow these simple steps to
          register for the conference.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {steps.map((step, index) => (
          <StepCard key={index} {...step} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-green-100 mb-4">
          Ready to Join Us?
        </h2>
        <p className="text-green-200 text-lg mb-8">
          Don't miss this opportunity to be part of the sustainable development
          conversation. Register now and secure your spot at the conference.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="max-w-5xl mx-auto mt-20 bg-green-200 rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Need Assistance?
        </h3>
        <p className="text-green-700 mb-6">
          If you have any questions about the registration process or need help,
          our support team is here to assist you. Don't hesitate to reach out.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
        >
          Contact Support
        </motion.button>
      </motion.div>
    </div>
  );
}
