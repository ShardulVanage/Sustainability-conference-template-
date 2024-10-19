import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GuidelineSection = ({ title, children }) => {
  return (
    <motion.div
      className="bg-green-50 rounded-lg shadow-lg overflow-hidden mb-4"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 bg-green-800">
        <h2 className="text-xl font-semibold text-green-100">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
};

export default function Guideline() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-green-900 text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Abstract Submission Guidelines
        </motion.h1>

        <GuidelineSection title="Length & Format">
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>
              <strong>Word Limit:</strong> Abstracts should not exceed 250-300
              words.
            </li>
            <li>
              <strong>Format:</strong> Use Arial or Times New Roman, 12-point
              font, single-spaced.
            </li>
          </ul>
        </GuidelineSection>

        <GuidelineSection title="Structure">
          <p className="mb-2 text-green-800">Include the following sections:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>
              <strong>Title:</strong> Clear and concise title of the paper (up
              to 15 words).
            </li>
            <li>
              <strong>Author(s):</strong> Full name, affiliation, and email
              address for all authors. Identify the corresponding author.
            </li>
            <li>
              <strong>Keywords:</strong> 3-5 relevant keywords related to the
              topic.
            </li>
            <li>
              <strong>Abstract Body:</strong> Briefly describe the objective,
              methodology, results, and significance of the research.
            </li>
          </ul>
        </GuidelineSection>

        <GuidelineSection title="Submission Platform">
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>
              Submit abstracts through the conference's online submission
              portal.
            </li>
            <li>
              Ensure all submissions are in PDF or Word (.doc/.docx) format.
            </li>
            <li>
              Abstracts sent via email will not be accepted unless specifically
              permitted.
            </li>
          </ul>
        </GuidelineSection>

        {/* <motion.div
          className="mt-8 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Submit Your Abstract
          </a>
        </motion.div> */}
      </motion.div>
    </div>
  );
}
