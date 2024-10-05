import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Users, TreePine, Globe, Zap } from "lucide-react";

const sponsorshipLevels = [
  {
    title: "Silver Eco-Innovator",
    price: "$5,000",
    benefits: [
      "Logo placement on conference materials",
      "Exhibition space",
      "2 complimentary conference passes",
      "Participation in sponsor panel discussion",
    ],
    icon: <Zap className="w-12 h-12" />,
  },
  {
    title: "Gold Sustainer",
    price: "$7,500",
    benefits: [
      "Prominent logo placement on conference website",
      "Exhibition booth in prime location",
      "3 complimentary conference passes",
      "Sponsored workshop session",
    ],
    icon: <Leaf className="w-12 h-12" />,
  },

  {
    title: "Platinum Green",
    price: "$10,000",
    benefits: [
      "Prime logo placement on all conference materials",
      "VIP access to all conference events",
      "Dedicated exhibition space",
      "5 complimentary conference passes",
      "Sponsored keynote session",
    ],
    icon: <Globe className="w-12 h-12" />,
  },
];

const SponsorshipCard = ({ title, price, benefits, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-green-500 text-white p-4 rounded-full mb-6 inline-block"
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-green-600 mb-4">{price}</p>
    <ul className="text-green-700 mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="mb-2 flex items-start">
          <TreePine className="w-5 h-5 mr-2 flex-shrink-0 text-green-500" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
    >
      Become a Sponsor
    </motion.button>
  </motion.div>
);

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 mb-4">
          Sponsor the Future of Sustainability
        </h1>
        <p className="text-xl text-green-700 max-w-3xl mx-auto">
          Join us in shaping a greener tomorrow. Your sponsorship fuels
          innovation, drives change, and showcases your commitment to
          sustainable development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sponsorshipLevels.map((level, index) => (
          <SponsorshipCard key={index} {...level} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-4">Why Sponsor?</h2>
        <p className="text-green-700 text-lg mb-8">
          By sponsoring our conference, you'll gain unparalleled exposure to
          industry leaders, innovators, and decision-makers in the sustainable
          development sector. Showcase your brand's commitment to a greener
          future and connect with potential partners and customers.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
        >
          Download Sponsorship Prospectus
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="max-w-5xl mx-auto mt-20 bg-green-200 rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Custom Sponsorship Opportunities
        </h3>
        <p className="text-green-700 mb-6">
          Looking for a unique way to showcase your brand? We offer custom
          sponsorship packages tailored to your specific goals and budget. From
          sponsored sessions to branded sustainable giveaways, we'll work with
          you to create a memorable presence at our conference.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
        >
          Contact Us for Custom Packages
        </motion.button>
      </motion.div>
    </div>
  );
}
