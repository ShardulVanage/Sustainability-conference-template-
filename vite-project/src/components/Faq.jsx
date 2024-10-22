import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Leaf, Recycle, Zap } from "lucide-react";

const faqs = [
  {
    question:
      "What is the main focus of the Sustainable Development Conference?",
    answer:
      "The conference focuses on addressing global challenges in sustainability, exploring innovative solutions, and fostering collaboration between researchers, policymakers, and industry leaders.",
    icon: Leaf,
  },
  {
    question: "How can I participate in the conference?",
    answer:
      "You can participate by registering on our website, submitting a research paper, or applying to present a poster. We also welcome attendees who wish to learn and network.",
    icon: HelpCircle,
  },
  {
    question: "What are some key topics that will be discussed?",
    answer:
      "Key topics include renewable energy, circular economy, climate change mitigation, sustainable urban planning, and the role of technology in achieving sustainability goals.",
    icon: Recycle,
  },
  {
    question: "Are there opportunities for networking and collaboration?",
    answer:
      "Yes, the conference includes dedicated networking sessions, panel discussions, and interactive workshops to facilitate collaboration and knowledge sharing among participants.",
    icon: Zap,
  },
];

export default function FAQSection() {
  return (
    <div className="min-h-full bg-gradient-to-br from-green-50 to-green-100 pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-green-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <faq.icon className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-800">
                  {faq.question}
                </h3>
              </div>
              <p className="text-green-700 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-lg text-green-700 font-bold"
        >
          Didn't find the answer you were looking for?
        </motion.div>
      </motion.div>
    </div>
  );
}
