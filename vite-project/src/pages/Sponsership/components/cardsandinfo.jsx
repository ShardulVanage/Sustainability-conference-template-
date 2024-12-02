import React from "react";
import { motion } from "framer-motion";
import { Diamond, Award, Crown, Coins, Store } from 'lucide-react';
import axios from "axios";

const sponsorshipLevels = [
  {
    title: "Platinum Package",
    price: "15000",
    benefits: [
      "1 VIP participating in the conference",
      "Complementary registration for 12 Students and 5 Faculties",
      "Stage honor to the Sponsor Party",
      "Full Page ad in the conference proceeding book",
      "Brand carried in all website and promotional activities",
      "Event called by title sponsor",
      "Networking opportunities with different delegates",
      "Media Coverage",
      "2 Feedback video bites featured on organizer's YouTube channel",
    ],
    icon: <Crown className="w-12 h-12" />,
  },
  {
    title: "Diamond Package",
    price: "12000",
    benefits: [
      "1 Session Chair participating from the sponsor side",
      "Complementary registration for 10 Students and 3 Faculties",
      "Full Page ad in the conference proceeding book",
      "Brand carried in all website and promotional activities",
      "Public announcement recognizing the Sponsor",
      "Networking opportunities with different delegates",
      "Logo used on all website activities and campaigns",
      "5 minutes slot for media Coverage",
      "1 Feedback video featured on the YouTube channel",
    ],
    icon: <Diamond className="w-12 h-12" />,
  },
  {
    title: "Gold Package",
    price: "10000",
    benefits: [
      "Complementary registration for 8 Students and 2 Faculties",
      "Full page ad in conference proceedings",
      "Announcement recognition of the sponsor during the valedictory function",
      "Logos used in all promotional materials",
      "One anchor can join from the sponsor side",
      "Networking opportunities with different delegates",
      "A standee of the sponsor side on the registration desk",
    ],
    icon: <Award className="w-12 h-12" />,
  },
  {
    title: "Silver Package",
    price: "7500",
    benefits: [
      "Complementary registration for 5 Students and 1 Faculty",
      "2 volunteers at the registration desk from the sponsor side",
      "Half page ad in Conference proceeding book",
      "Brand carried out in few promotional activities",
      "Networking opportunities with different delegates",
      "Print media coverage",
    ],
    icon: <Coins className="w-12 h-12" />,
  },
  {
    title: "Exhibitor Package",
    price: "Contact Us",
    benefits: [
      "One stall allowed in the conference area",
      "Advertise products at the conference",
    ],
    icon: <Store className="w-12 h-12" />,
  },
];

const initiateCCAvenue = async (price) => {
  const backendHost = "https://icsift.onrender.com"; // Replace with your backend URL
  const paymentData = {
    merchant_id: "350427", // Replace with your CCAvenue merchant ID
    order_id: "ORD" + Date.now(),
    amount: price,
    currency: "USD",
    redirect_url: `${backendHost}/api/ccavenue-handle`,
    cancel_url: `${backendHost}/api/ccavenue-handle`,
    language: "EN",
  };

  try {
    const response = await axios.post(
      `${backendHost}/api/ccavenue-initiate`,
      paymentData
    );
    const { encRequest, accessCode } = response.data;
    const URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encRequest}&access_code=${accessCode}`;
    window.location.href = URL;
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
};

const SponsorshipCard = ({ title, price, benefits, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
  >
    <motion.div
      className="bg-green-500 text-white p-4 rounded-full mb-6 inline-block w-1/3"
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-green-600 mb-4">${price}</p>
    <ul className="text-green-700 mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="mb-2 flex items-start">
          <Award className="w-5 h-5 mr-2 flex-shrink-0 text-green-500" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
      onClick={() => initiateCCAvenue(price)}
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

