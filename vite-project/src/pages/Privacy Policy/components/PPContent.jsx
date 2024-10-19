import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Globe,
} from "lucide-react";

export default function PPContent() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect personal information such as your name, email address, affiliation, and areas of interest when you register for the International Conference on Sustainability, Innovation and Future Technologies. We may also collect information about your interactions with our website and conference materials.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use your information to manage your conference registration, provide you with relevant conference materials, and communicate important updates. We may also use anonymized data for improving our conference offerings and understanding attendee interests in sustainability, innovation, and future technologies.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "3. Data Protection",
      content:
        "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data and regular security audits of our systems.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "4. Sharing of Information",
      content:
        "We do not sell your personal information to third parties. We may share your information with trusted partners directly involved in organizing the conference or providing conference-related services. All partners are required to adhere to our privacy standards.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "5. Communications",
      content:
        "By registering for the conference, you agree to receive communications related to the event. You can opt-out of non-essential communications at any time. We may continue to send critical updates about the conference even after an opt-out.",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you. To exercise these rights, please contact our privacy officer at privacy@sustainableinnovationconference.com.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "7. Updates to Privacy Policy",
      content:
        "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify registered attendees of any material changes to this policy.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#052E16] to-green-950 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-12">
          <div className="flex justify-center space-x-4 mb-6">
            <Shield className="w-16 h-16 text-green-50" />
          </div>
          <h1 className="text-4xl font-extrabold text-green-300 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            International Conference on Sustainability, Innovation and Future
            Technologies
          </p>
        </header>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-colors duration-200"
              >
                <span className="flex items-center space-x-3">
                  {section.icon}
                  <span className="text-lg font-semibold">{section.title}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedSection === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: expandedSection === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-6 text-green-800">{section.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-green-100"
        >
          <p className="mb-2">
            By participating in our conference, you acknowledge that you have
            read and understood our Privacy Policy.
          </p>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
