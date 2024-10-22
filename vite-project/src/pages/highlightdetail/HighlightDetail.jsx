import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const highlights = {
  "sustainable-technologies": {
    title: "Sustainable Technologies and Practices",
    image:
      "https://plus.unsplash.com/premium_photo-1679517119403-5d8a4e75d5ff?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  "innovation-sustainable-future": {
    title: "Innovation for a Sustainable Future",
    image:
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  "smart-future-technologies": {
    title: "Smart and Future Technologies",
    image:
      "https://plus.unsplash.com/premium_photo-1728135850536-fd8c8a0eff59?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
};

export default function HighlightDetail() {
  const { slug } = useParams();
  const highlight = highlights[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!highlight) {
    return <div>Highlight not found</div>;
  }

  return (
    <div className="min-h-full py-8 sm:py-28 bg-gradient-to-br from-green-100 to-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Link>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.aside>
          <main className="md:w-2/3">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-green-800 mb-8"
            >
              {highlight.title}
            </motion.h1>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-4"
            >
              {highlight.topics.map((topic, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
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
            </motion.ul>
          </main>
        </div>
      </div>
    </div>
  );
}
