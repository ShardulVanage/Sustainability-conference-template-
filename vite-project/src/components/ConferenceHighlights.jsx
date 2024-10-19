import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const highlights = [
  {
    title: "Sustainable Technologies and Practices",
    topics: [
      "Renewable Energy Systems and Innovations",
      "Green Technologies for Environmental Sustainability",
      "Sustainable Urban Planning and Smart Cities",
      "Circular Economy and Waste Management",
      "Sustainability in Industry 4.0",
      "Energy Efficiency in Industrial Processes",
      "Eco-friendly Materials and Manufacturing",
      "Social and Economic Aspects of Sustainability",
      "Water, Food, and Agriculture Sustainability",
    ],
  },
  {
    title: "Innovation for a Sustainable Future",
    topics: [
      "Emerging Technologies for Sustainability",
      "Disruptive Innovations in Clean Technology",
      "Innovative Approaches to Sustainable Business Models",
      "Role of AI and Big Data in Sustainability",
      "Innovation in Agriculture for Sustainability",
      "Sustainable Design and Innovation in Architecture",
      "Innovation in Education and Research for Sustainability",
    ],
  },
  {
    title: "Smart and Future Technologies",
    topics: [
      "Internet of Things (IoT) and Sustainability",
      "AI and Machine Learning for Smart Cities",
      "Future Mobility and Transportation",
      "Autonomous Systems and Robotics for Sustainability",
      "Blockchain Technology for Sustainable Development",
      "5G and Communication Technologies in Green Solutions",
      "Sustainable Healthcare and Biotechnology",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}

export default function ConferenceHighlights() {
  return (
    <div className="min-h-full bg-gradient-to-br from-green-100 to-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <AnimatedSection>
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12">
            Conference Highlights
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((section, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
                <div className="bg-green-600 py-4 px-6">
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="py-6 px-6 space-y-2 flex-grow">
                  {section.topics.map((topic, topicIndex) => (
                    <motion.li
                      key={topicIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: topicIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="mt-12 text-center">
            {/* <a
              href="#"
              className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
            >
              Call for Papers
            </a> */}
          </div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
