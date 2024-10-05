import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Users, TreePine } from "lucide-react";
import { GraduationCap } from "lucide-react";
const awards = [
  {
    title: "BEST PRESENTATION AWARD",
    description:
      "Recognizing outstanding research presentation and communication skills",
    icon: <Award className="w-12 h-12" />,
  },
  {
    title: "SESSION'S BEST AWARD",
    description:
      "Honoring the most impactful presentation in each conference session",
    icon: <Users className="w-12 h-12" />,
  },
  {
    title: "BEST STUDENT PRESENTATION AWARD",
    description: "Celebrating exceptional presentations by student researchers",
    icon: <GraduationCap className="w-12 h-12" />,
  },
];
const infocard = [
  {
    title: "Green Innovation",
    description: "Recognizing groundbreaking eco-friendly technologies",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    title: "Community Impact",
    description: "Honoring projects with significant social sustainability",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Circular Economy Champion",
    description: "Celebrating advancements in waste reduction and recycling",
    icon: <TreePine className="w-8 h-8" />,
  },
];

const AwardCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-green-500 text-white p-3 rounded-full mb-4"
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-green-700">{description}</p>
  </motion.div>
);
const InfoCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-green-500 text-white p-4 rounded-full mb-6 inline-block"
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-bold text-green-800 mb-4">{title}</h3>
    <p className="text-green-700 text-lg">{description}</p>
  </motion.div>
);
function Cards() {
  return (
    <div className="min-h-screen bg-green-950 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-100 mb-4">
          Sustainable Development Awards
        </h1>
        <p className="text-xl text-green-300 mb-12">
          Recognizing excellence in creating a greener future
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-1 py-12"
      >
        {awards.map((award, index) => (
          <InfoCard key={index} {...award} index={index} />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {infocard.map((award, index) => (
          <AwardCard key={index} {...award} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-green-100 mb-4">
          Join the Green Revolution
        </h2>
        <p className="text-green-300 mb-8">
          Be part of the change and nominate a project for next year's awards!
        </p>
        <a href="/pricing">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
          >
            Register Now
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}

export default Cards;
