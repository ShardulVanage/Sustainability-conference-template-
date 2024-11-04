import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const VenueInfo = () => (
  <motion.div
    className="bg-green-200 p-8 rounded-lg shadow-lg mb-12"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold text-green-900 ">Conference Venue</h2>
  </motion.div>
);

const VenueSection = () => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col md:flex-row">
      <motion.div
        className="w-full md:w-1/2 h-64 md:h-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4650.779787687322!2d120.98611237579703!3d14.576029577676367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9870b4c7d31%3A0x63befba461d3a32!2sPhilippine%20Christian%20University!5e1!3m2!1sen!2sin!4v1730745589618!5m2!1sen!2sin"
          height="100%"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Venue Map"
        ></iframe>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 p-6 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-green-800 mb-4">Address</h3>
        <p className="text-green-700 text-lg mb-2">
          Philippine Christian University
        </p>
        <p className="text-green-700 mb-2">1648 Taft Ave, Malate</p>
        <p className="text-green-700 mb-2">Manila, 1004 Metro Manila</p>
        <p className="text-green-700 mb-4">Philippines</p>
        <a
          href="https://maps.app.goo.gl/pW8BtHDdtQbVhvYz9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
        >
          Get Directions
        </a>
      </motion.div>
    </div>
  </motion.div>
);

const AttractionCard = ({ title, description, image }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
  >
    <img src={image} alt={title} className="w-full am:h-72 h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-green-700">{description}</p>
    </div>
  </motion.div>
);

const attractions = [
  {
    title: "Intramuros",
    description:
      "Explore the historic walled city, a testament to Manila's rich colonial past.",
    image:
      "https://images.unsplash.com/photo-1633443443141-a32cd6f72278?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rizal Park",
    description:
      "Visit this iconic park dedicated to the national hero, Dr. Jose Rizal.",
    image:
      "https://images.unsplash.com/photo-1674439429452-e7f3bfdd6363?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Manila Ocean Park",
    description:
      "Discover marine life at this world-class oceanarium and marine-themed park.",
    image:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1728037753/ktselkuduuejaoyu6nuy.jpg",
  },
  {
    title: "National Museum of the Philippines",
    description:
      "Immerse yourself in Filipino art, history, and culture at this renowned museum.",
    image:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1728037813/afkdy8oune9etiqemtqn.webp",
  },
];

export default function VenueContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-green-900 text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Welcome to Manila
        </motion.h1>

        <VenueInfo />

        <VenueSection />

        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Explore Manila
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <AttractionCard key={index} {...attraction} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-green-800 font-medium text-lg">
            We look forward to welcoming you to Manila for an inspiring
            conference on sustainable development!
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Register Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
